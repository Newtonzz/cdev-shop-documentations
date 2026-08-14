
(function () {
  "use strict";

  var DOC = window.__BLDR_STORE__;
  // Overridable so the site can be pointed at a proxy, or exercised locally.
  var API = DOC.apiBase || "https://headless.tebex.io/api";
  var TOKEN = DOC.token;
  var ACCOUNT = "/accounts/" + TOKEN;
  var BASKET_KEY = "bldr-basket-" + TOKEN;

  var state = {
    webstore: null,
    categories: [],
    packages: [],
    cmsPages: [],
    modules: [],
    basket: null,
    authMethods: [],
    route: { name: "home" },
    cartOpen: false,
    /** Reset each render: the product view belongs on the page exactly once. */
    productShown: false,
  };

  /* ---------------------------------------------------------------- utils */

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function currency() {
    return (state.basket && state.basket.currency) || (state.webstore && state.webstore.currency) || DOC.currency || "USD";
  }

  function amount(value) {
    return Number(value || 0).toFixed(2);
  }

  /**
   * A short plain-text lead-in for a card.
   *
   * Package descriptions are full store HTML \u2014 headings, lists, links, inline
   * colour, sometimes a thousand words. Dropping that into a card renders the
   * whole product page inside a tile, so teasers are stripped and cut at a
   * word boundary. The product page still gets the real thing.
   */
  function teaser(html, max) {
    if (!html) return "";

    var text = String(html)
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|div|li|h[1-6])>/gi, " ")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();

    if (text.length <= max) return text;

    var cut = text.slice(0, max);
    var space = cut.lastIndexOf(" ");
    return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,.;:\-]+$/, "") + "\u2026";
  }

  function money(value, cur) {
    return '<span class="bldr-price-badge"><span class="cur">' + esc(cur || currency()) + '</span><span class="now">' + amount(value) + "</span></span>";
  }

  /** Surfaces Tebex's own validation detail rather than a bare status code. */
  function api(path, options) {
    var config = Object.assign({ headers: { "Content-Type": "application/json" } }, options || {});

    return fetch(API + path, config).then(function (response) {
      return response
        .json()
        .catch(function () { return null; })
        .then(function (body) {
          if (response.ok) return body;

          var detail = body && (body.detail || body.message || body.title);
          if (!detail && body && body.errors) {
            var first = Object.keys(body.errors)[0];
            detail = first ? [].concat(body.errors[first])[0] : null;
          }
          throw new Error(detail || "Tebex returned " + response.status);
        });
    });
  }

  /* -------------------------------------------------------- headless api */

  var Tebex = {
    webstore: function () { return api(ACCOUNT + "/"); },
    pages: function () { return api(ACCOUNT + "/pages"); },
    categories: function (query) { return api(ACCOUNT + "/categories" + (query || "")); },
    category: function (id, query) { return api(ACCOUNT + "/categories/" + id + (query || "")); },
    allPackages: function (query) { return api(ACCOUNT + "/packages" + (query || "")); },
    package: function (id) { return api(ACCOUNT + "/packages/" + id); },
    sidebar: function () { return api(ACCOUNT + "/sidebar"); },

    getBasket: function (ident) { return api(ACCOUNT + "/baskets/" + ident); },
    createBasket: function (body) { return api(ACCOUNT + "/baskets", { method: "POST", body: JSON.stringify(body) }); },
    basketAuth: function (ident, returnUrl) {
      return api(ACCOUNT + "/baskets/" + ident + "/auth?returnUrl=" + encodeURIComponent(returnUrl));
    },
    dynamicPackages: function (ident, body) {
      return api(ACCOUNT + "/baskets/" + ident + "/dynamic-packages", { method: "PUT", body: JSON.stringify(body) });
    },

    // Package mutations are basket-scoped and take no token \u2014 the OpenAPI
    // schema lists them under the account server URL, but that 404s in
    // practice. Their own tag says it: "requiring only a basket ident with no
    // token". Verified against a live store.
    addPackage: function (ident, body) {
      return api("/baskets/" + ident + "/packages", { method: "POST", body: JSON.stringify(body) });
    },
    removePackage: function (ident, packageId) {
      return api("/baskets/" + ident + "/packages/remove", { method: "POST", body: JSON.stringify({ package_id: Number(packageId) }) });
    },
    setQuantity: function (ident, packageId, quantity) {
      return api("/baskets/" + ident + "/packages/" + packageId, { method: "PUT", body: JSON.stringify({ quantity: Number(quantity) }) });
    },

    applyCoupon: function (ident, code) {
      return api(ACCOUNT + "/baskets/" + ident + "/coupons", { method: "POST", body: JSON.stringify({ coupon_code: code }) });
    },
    removeCoupon: function (ident, code) {
      return api(ACCOUNT + "/baskets/" + ident + "/coupons/remove", { method: "POST", body: JSON.stringify({ coupon_code: code }) });
    },
    applyGiftCard: function (ident, number) {
      return api(ACCOUNT + "/baskets/" + ident + "/giftcards", { method: "POST", body: JSON.stringify({ card_number: number }) });
    },
    removeGiftCard: function (ident, number) {
      return api(ACCOUNT + "/baskets/" + ident + "/giftcards/remove", { method: "POST", body: JSON.stringify({ card_number: number }) });
    },
    applyCreatorCode: function (ident, code) {
      return api(ACCOUNT + "/baskets/" + ident + "/creator-codes", { method: "POST", body: JSON.stringify({ creator_code: code }) });
    },
    removeCreatorCode: function (ident) {
      return api(ACCOUNT + "/baskets/" + ident + "/creator-codes/remove", { method: "POST", body: "{}" });
    },
    updateTier: function (tierId, packageId) {
      return api(ACCOUNT + "/tiers/" + tierId, { method: "PATCH", body: JSON.stringify({ package_id: Number(packageId) }) });
    },
  };

  /* --------------------------------------------------------------- basket */

  function basketIdent() {
    try { return window.localStorage.getItem(BASKET_KEY); } catch (e) { return null; }
  }

  function rememberBasket(ident) {
    try { window.localStorage.setItem(BASKET_KEY, ident); } catch (e) {}
  }

  function forgetBasket() {
    try { window.localStorage.removeItem(BASKET_KEY); } catch (e) {}
    state.basket = null;
    state.authMethods = [];
  }

  function loadBasket() {
    var ident = basketIdent();
    if (!ident) return Promise.resolve(null);

    return Tebex.getBasket(ident)
      .then(function (body) {
        state.basket = body.data;
        // A completed basket is history; the next add should open a fresh one.
        if (state.basket && state.basket.complete) forgetBasket();
        return state.basket;
      })
      .catch(function () {
        // A basket can expire or be paid; start clean rather than wedge the UI.
        forgetBasket();
        return null;
      });
  }

  function pageUrl(hash) {
    return window.location.origin + window.location.pathname + (hash || "");
  }

  function ensureBasket() {
    if (state.basket) return Promise.resolve(state.basket);

    return Tebex.createBasket({
      complete_url: pageUrl("#thanks"),
      cancel_url: pageUrl(window.location.hash),
      complete_auto_redirect: true,
    }).then(function (body) {
      state.basket = body.data;
      rememberBasket(state.basket.ident);
      return state.basket;
    });
  }

  /**
   * Some platforms (Minecraft, Steam, \u2026) require the customer to prove who
   * they are before Tebex will accept a basket. The API tells us by returning
   * sign-in providers; an empty list means the store takes anonymous baskets.
   */
  function refreshAuth() {
    if (!state.basket || state.basket.username) { state.authMethods = []; return Promise.resolve([]); }

    return Tebex.basketAuth(state.basket.ident, pageUrl(window.location.hash))
      .then(function (body) {
        state.authMethods = Array.isArray(body) ? body : body && body.data ? body.data : [];
        return state.authMethods;
      })
      .catch(function () { state.authMethods = []; return []; });
  }

  /**
   * Stores like FiveM and Minecraft reject a package until the customer has
   * proved who they are \u2014 the API answers the add itself with "User must login
   * before adding packages to basket". So the sign-in happens before the add,
   * not at checkout, and what they were buying is remembered across the round
   * trip so the click is not lost.
   */
  var PENDING_KEY = "bldr-pending-" + TOKEN;

  // Long enough to sign in and come back, short enough that a click from last
  // week does not add something unexpected to a fresh basket.
  var PENDING_TTL_MS = 60 * 60 * 1000;

  function rememberPending(packageId, quantity) {
    try {
      window.localStorage.setItem(PENDING_KEY, JSON.stringify({ packageId: packageId, quantity: quantity, at: Date.now() }));
    } catch (e) {}
  }

  /** Read without consuming \u2014 a customer who has not signed in yet still has one waiting. */
  function peekPending() {
    try {
      var raw = window.localStorage.getItem(PENDING_KEY);
      if (!raw) return null;

      var parsed = JSON.parse(raw);
      if (!parsed || Date.now() - (parsed.at || 0) > PENDING_TTL_MS) {
        clearPending();
        return null;
      }
      return parsed;
    } catch (e) { return null; }
  }

  function clearPending() {
    try { window.localStorage.removeItem(PENDING_KEY); } catch (e) {}
  }

  function startAuth(packageId, quantity) {
    if (state.authMethods.length === 0) return false;

    if (packageId) rememberPending(packageId, quantity);

    // One provider is the common case, so go straight there rather than
    // making the customer pick from a list of one.
    if (state.authMethods.length === 1) {
      window.location.href = state.authMethods[0].url;
      return true;
    }

    openCart();
    toast("Sign in to continue.");
    return true;
  }

  function addPackage(packageId, button, options) {
    var original = button ? button.textContent : "";
    var quantity = (options && options.quantity) || 1;

    if (button) { button.disabled = true; button.textContent = "Adding\u2026"; }

    function restore() {
      if (button) { button.disabled = false; button.textContent = original; }
    }

    return ensureBasket()
      .then(refreshAuth)
      .then(function () {
        // Known up front: send them to sign in rather than to a 422.
        if (startAuth(packageId, quantity)) return null;

        var payload = { package_id: Number(packageId), quantity: quantity };
        if (options && options.dynamic) payload.dynamic = true;
        if (options && options.variableData) payload.variable_data = options.variableData;
        return Tebex.addPackage(state.basket.ident, payload);
      })
      .then(function (result) {
        if (result === null) return null;
        return loadBasket().then(refreshAuth).then(function () {
          if (button) { button.disabled = false; button.textContent = "In cart"; }
          renderCart();
          openCart();
        });
      })
      .catch(function (error) {
        restore();

        // Tebex can decide mid-flight that a login is needed.
        if (/must login/i.test(error.message)) {
          return refreshAuth().then(function () {
            if (!startAuth(packageId, quantity)) toast("This store needs you to sign in before buying.");
          });
        }

        toast(error.message);
      });
  }

  /** Finish an add that was interrupted by the sign-in round trip. */
  function resumePending() {
    // Still not signed in: keep it for the next time they come back.
    if (state.authMethods.length > 0) return Promise.resolve();

    var pending = peekPending();
    if (!pending) return Promise.resolve();
    clearPending();

    return Tebex.addPackage(state.basket.ident, {
      package_id: Number(pending.packageId),
      quantity: pending.quantity || 1,
    })
      .then(loadBasket)
      .then(function () { renderCart(); openCart(); })
      .catch(function () { /* the package may no longer be available */ });
  }

  /** Every basket mutation refreshes and re-renders through one path. */
  function mutate(run) {
    if (!state.basket) return Promise.resolve();

    return run(state.basket.ident)
      .then(function () { return loadBasket(); })
      .then(refreshAuth)
      .then(renderCart)
      .catch(function (error) { toast(error.message); });
  }

  /* ------------------------------------------------------------- checkout */

  function checkout() {
    if (!state.basket || !state.basket.packages || state.basket.packages.length === 0) {
      toast("Your cart is empty.");
      return;
    }

    if (state.authMethods.length > 0) {
      startAuth(null, 0);
      return;
    }

    // Tebex.js keeps the customer on this site. If the script did not load,
    // the hosted checkout link does the same job one navigation away.
    if (window.Tebex && window.Tebex.checkout) {
      try {
        window.Tebex.checkout.init({
          ident: state.basket.ident,
          theme: DOC.checkoutTheme || "auto",
          colors: DOC.accent ? [{ name: "primary", color: DOC.accent }] : [],
        });
        window.Tebex.checkout.on("payment:complete", function () {
          forgetBasket();
          window.location.hash = "#thanks";
          renderCart();
        });
        window.Tebex.checkout.launch();
        return;
      } catch (e) {
        // fall through to the hosted checkout
      }
    }

    var link = state.basket.links && (state.basket.links.checkout || state.basket.links.payment);
    if (!link) { toast("Checkout is not available for this basket."); return; }
    window.location.href = link;
  }

  var toastTimer = null;
  function toast(message) {
    var existing = document.querySelector(".bldr-toast");
    if (existing) existing.remove();

    var bar = el('<div class="bldr-toast">' + esc(message) + "</div>");
    document.body.appendChild(bar);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { bar.remove(); }, 4500);
  }

  /* --------------------------------------------------------------- routing */

  function parseRoute() {
    var hash = window.location.hash.replace(/^#/, "");
    if (hash.indexOf("category/") === 0) return { name: "category", slug: hash.slice("category/".length) };
    if (hash.indexOf("package/") === 0) return { name: "package", id: hash.slice("package/".length) };
    if (hash.indexOf("page/") === 0) return { name: "cms", slug: hash.slice("page/".length) };
    if (hash === "thanks") return { name: "thanks" };
    return { name: "home" };
  }

  /* ------------------------------------------------------------- rendering */

  function routedPackage() {
    if (state.route.name !== "package") return null;
    return state.packages.filter(function (p) {
      return String(p.id) === String(state.route.id) || p.slug === state.route.id;
    })[0] || null;
  }

  function moduleOfType(type) {
    return state.modules.filter(function (m) { return m.type === type; })[0] || null;
  }

  /** Others from the same category \u2014 what a product page's second grid is for. */
  function relatedTo(pkg) {
    var group = state.categories.filter(function (c) {
      return c.packages.some(function (p) { return String(p.id) === String(pkg.id); });
    })[0];

    var pool = group ? group.packages : state.packages;
    return pool.filter(function (p) { return String(p.id) !== String(pkg.id); });
  }

  function packagesFor(section) {
    // On a product route the product itself is rendered once, by whichever
    // section gets there first; any later grid is "more from this store".
    var routed = routedPackage();
    if (routed) return relatedTo(routed);

    var picked = section.packageIds || [];
    if (picked.length > 0) {
      return state.packages.filter(function (p) { return picked.indexOf(String(p.id)) !== -1; });
    }

    if (state.route.name === "category") {
      var current = state.categories.filter(function (c) { return c.slug === state.route.slug; })[0];
      return current ? current.packages : [];
    }

    if (section.source) {
      var bound = state.categories.filter(function (c) { return String(c.id) === String(section.source); })[0];
      if (bound) return bound.packages;
    }

    return state.packages;
  }

  function inBasket(pkg) {
    if (!state.basket || !state.basket.packages) return null;
    return state.basket.packages.filter(function (i) { return String(i.id) === String(pkg.id); })[0] || null;
  }

  function ctaLabelFor(pkg, section) {
    if (inBasket(pkg)) return "In cart";
    if (section && section.ctaLabel) return section.ctaLabel;
    return pkg.type === "subscription" ? "Subscribe" : "Add to Cart";
  }

  function cardHtml(pkg, section) {
    var style = section.cardStyle || "classic";
    var fields = section.fields || ["image", "title", "desc", "price", "cta"];
    var hidden = section.hidden || [];
    function show(f) { return fields.indexOf(f) !== -1 && hidden.indexOf(f) === -1; }

    var image = pkg.image || (pkg.media && pkg.media.length ? pkg.media[0].url : "") || "";
    var media = show("image")
      ? '<a class="bldr-card-link" href="#package/' + esc(pkg.id) + '">' +
        (image ? '<img class="bldr-card-media" src="' + esc(image) + '" alt="' + esc(pkg.name) + '" loading="lazy">' : '<div class="bldr-card-media"></div>') +
        "</a>"
      : "";
    var title = show("title")
      ? '<a class="bldr-card-link bldr-h bldr-h-md" href="#package/' + esc(pkg.id) + '">' + esc(pkg.name) + "</a>"
      : "";
    var teased = teaser(pkg.description, 180);
    var desc = show("desc") && teased ? '<div class="bldr-sub">' + esc(teased) + "</div>" : "";

    var full = pkg.base_price != null ? pkg.base_price : pkg.total_price;
    var now = pkg.total_price != null ? pkg.total_price : pkg.base_price;
    var discounted = Number(pkg.discount || 0) > 0;
    var price = show("price")
      ? '<div class="bldr-price">' +
        (discounted ? '<span class="bldr-price-was">' + esc(currency()) + amount(full) + "</span>" : "") +
        money(discounted ? Number(full) - Number(pkg.discount) : now) +
        (pkg.type === "subscription" ? '<span class="bldr-price-term">/mo</span>' : "") +
        "</div>"
      : "";

    // Tebex can mark a package unbuyable for this customer; say so rather than
    // offering a button that will be refused.
    var cta = show("cta")
      ? '<div class="bldr-btn-row">' +
        (pkg.purchasable === false
          ? '<span class="bldr-btn bldr-btn-disabled">Unavailable</span>'
          : '<button type="button" class="bldr-btn" data-add="' + esc(pkg.id) + '">' + esc(ctaLabelFor(pkg, section)) + "</button>") +
        "</div>"
      : "";

    var body = '<div class="bldr-card-body">' + [title, desc, price, cta].filter(Boolean).join("") + "</div>";
    if (style === "frame") return '<div class="bldr-card bldr-card-frame"><div class="bldr-frame-art">' + media + "</div>" + body + "</div>";
    if (style === "row") return '<div class="bldr-card bldr-card-row">' + media + '<div class="bldr-card-body"><div class="bldr-card-text">' + title + desc + "</div>" + price + cta + "</div></div>";
    return '<div class="bldr-card bldr-card-' + esc(style) + '">' + media + body + "</div>";
  }

  /** Full product view: media gallery, long description, quantity, options. */
  function productHtml(pkg) {
    var media = (pkg.media && pkg.media.length ? pkg.media : pkg.image ? [{ url: pkg.image }] : []);
    var gallery = media.length
      ? '<div class="bldr-product-media"><img class="bldr-card-media" data-gallery-main src="' + esc(media[0].url) + '" alt="' + esc(pkg.name) + '">' +
        (media.length > 1
          ? '<div class="bldr-thumbs">' + media.map(function (m, i) {
              return '<button type="button" class="bldr-thumb' + (i === 0 ? " is-active" : "") + '" data-gallery="' + esc(m.url) + '"><img src="' + esc(m.url) + '" alt=""></button>';
            }).join("") + "</div>"
          : "") +
        "</div>"
      : "";

    var full = pkg.base_price != null ? pkg.base_price : pkg.total_price;
    var discounted = Number(pkg.discount || 0) > 0;
    var quantity = pkg.disable_quantity
      ? ""
      : '<div class="bldr-qty"><button type="button" data-pdp-qty="-1">\u2212</button><span data-pdp-qty-value>1</span><button type="button" data-pdp-qty="1">+</button></div>';

    var limit = pkg.user_limit ? '<div class="bldr-note">Limit ' + esc(pkg.user_limit) + " per customer.</div>" : "";
    var expires = pkg.expiration_date ? '<div class="bldr-note">Available until ' + esc(new Date(pkg.expiration_date).toLocaleDateString()) + ".</div>" : "";

    return '<div class="bldr-product">' + gallery +
      '<div class="bldr-product-copy">' +
      '<h1 class="bldr-h bldr-h-xl">' + esc(pkg.name) + "</h1>" +
      '<div class="bldr-price">' +
      (discounted ? '<span class="bldr-price-was">' + esc(currency()) + amount(full) + "</span>" : "") +
      money(discounted ? Number(full) - Number(pkg.discount) : pkg.total_price != null ? pkg.total_price : full) +
      (pkg.type === "subscription" ? '<span class="bldr-price-term">/mo</span>' : "") +
      "</div>" +
      (pkg.description ? '<div class="bldr-sub bldr-rich">' + pkg.description + "</div>" : "") +
      limit + expires +
      '<div class="bldr-btn-row">' + quantity +
      '<button type="button" class="bldr-btn bldr-btn-accent" data-add="' + esc(pkg.id) + '" data-add-from-pdp>' +
      esc(pkg.type === "subscription" ? "Subscribe" : "Add to Cart") + "</button></div>" +
      "</div></div>";
  }

  /**
   * One package at hero scale, matching the Twig target's four layouts.
   * Reusing the grid card here made spotlight and banner identical and left
   * minimal with no artwork at all.
   */
  // Byte-identical to the template's tick, so both targets style it the same.
  var TICK = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">' +
    '<circle cx="12" cy="12" r="9" opacity=".35"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>';

  /** The tick list the Twig target renders from section.features. */
  function featuresHtml(features) {
    var list = (features || []).filter(function (f) { return f && f.trim(); });
    if (list.length === 0) return "";

    return '<div class="bldr-feats">' + list.map(function (f) {
      return '<div class="bldr-feat">' + TICK + "<span>" + esc(f) + "</span></div>";
    }).join("") + "</div>";
  }

  function chipsHtml(tags) {
    var list = (tags || []).filter(function (t) { return t && t.trim(); });
    if (list.length === 0) return "";

    return '<div class="bldr-chips">' + list.map(function (t) {
      return '<span class="bldr-chip">' + esc(t) + "</span>";
    }).join("") + "</div>";
  }

  function featuredHtml(pkg, section) {
    var style = section.featuredStyle || "spotlight";
    var href = "#package/" + esc(pkg.id);
    var image = pkg.image || (pkg.media && pkg.media.length ? pkg.media[0].url : "") || "";

    var art = '<a class="bldr-fx-media" href="' + href + '">' +
      (image
        ? '<img class="bldr-fx-art" src="' + esc(image) + '" alt="' + esc(pkg.name) + '" loading="lazy">'
        : '<div class="bldr-fx-art bldr-fx-art-empty"></div>') +
      "</a>";

    var label = section.eyebrow ? '<span class="bldr-eyebrow">' + esc(section.eyebrow) + "</span>" : "";
    var name = '<a class="bldr-card-link bldr-h bldr-h-lg" href="' + href + '">' + esc(pkg.name) + "</a>";
    var lead = teaser(pkg.description, 260);
    var blurb = lead ? '<div class="bldr-sub bldr-fx-desc">' + esc(lead) + "</div>" : "";

    var full = pkg.base_price != null ? pkg.base_price : pkg.total_price;
    var off = Number(pkg.discount || 0) > 0;
    var cost = '<div class="bldr-fx-price">' +
      (off ? '<span class="bldr-price-was">' + esc(currency()) + amount(full) + "</span>" : "") +
      money(off ? Number(full) - Number(pkg.discount) : pkg.total_price != null ? pkg.total_price : full) +
      "</div>";

    var buy = '<div class="bldr-btn-row"><button type="button" class="bldr-btn bldr-btn-accent" data-add="' +
      esc(pkg.id) + '">' + esc(ctaLabelFor(pkg, section)) + "</button>" +
      (section.secondaryCtaLabel
        ? '<a class="bldr-btn bldr-btn-ghost" href="' + esc(section.secondaryCtaHref || "#") + '">' + esc(section.secondaryCtaLabel) + "</a>"
        : "") +
      "</div>";

    // A checklist earns its place over a description on a featured card, which
    // is what the editor shows \u2014 so the live site shows it too.
    var perks = featuresHtml(section.features);
    var chips = chipsHtml(section.tags);
    var body = label + name + chips + cost + (perks || blurb) + buy;

    if (style === "banner") {
      return '<div class="bldr-fx bldr-fx-banner">' + art + '<div class="bldr-fx-overlay">' + body + "</div></div>";
    }
    if (style === "stack") {
      return '<div class="bldr-fx bldr-fx-stack">' + art + '<div class="bldr-fx-body">' + body + "</div></div>";
    }
    if (style === "minimal") {
      return '<div class="bldr-fx bldr-fx-minimal"><a class="bldr-fx-thumb" href="' + href + '">' +
        (image ? '<img class="bldr-fx-art" src="' + esc(image) + '" alt="" loading="lazy">' : '<div class="bldr-fx-art bldr-fx-art-empty"></div>') +
        '</a><div class="bldr-fx-body">' + label + name + blurb + '</div><div class="bldr-fx-tail">' + cost + buy + "</div></div>";
    }

    return '<div class="bldr-fx bldr-fx-spotlight' + (section.mediaPosition === "right" ? " media-right" : "") + '">' +
      art + '<div class="bldr-fx-body">' + body + "</div></div>";
  }

  function sectionHtml(section) {
    if (section.visible === false) return "";
    var inner = "";

    switch (section.type) {
      case "announce":
        if (!section.bodyText) return "";
        return '<div class="bldr-announce"><span>' + esc(section.bodyText) + "</span>" +
          (section.dismissible
            ? '<button type="button" class="bldr-announce-x" data-dismiss aria-label="Dismiss">&times;</button>'
            : "") +
          "</div>";

      case "nav": {
        var items = (section.navItems || []).length
          ? section.navItems
          : state.categories.map(function (c) { return { label: c.name, href: "#category/" + c.slug }; });
        var links = items
          .map(function (i) {
            var href = i.href.indexOf("/category/") === 0 ? "#category/" + i.href.split("/category/")[1] : i.href;
            return '<a class="bldr-pill" href="' + esc(href) + '">' + esc(i.label) + "</a>";
          })
          .join("");
        var cms = state.cmsPages.map(function (p) {
          return '<a class="bldr-pill" href="#page/' + esc(p.slug) + '">' + esc(p.title) + "</a>";
        }).join("");
        var mark = DOC.logoUrl && section.logoMode !== "text"
          ? '<img class="bldr-nav-logo" src="' + esc(DOC.logoUrl) + '" alt="" style="height:' + (section.logoHeight || 26) + 'px">'
          : "";
        var name = section.logoShowText === false && mark ? "" : '<span class="bldr-nav-name">' + esc(section.brand || DOC.storeName) + "</span>";
        return '<header class="bldr-nav bldr-nav-' + esc(section.navStyle || "pill") +
          (section.sticky === false ? "" : " bldr-nav-sticky") + '">' +
          '<a class="bldr-nav-brand" href="#">' + mark + name + "</a>" +
          '<nav class="bldr-pill-row">' + links + cms + "</nav>" +
          (section.showCart === false ? "" : '<button type="button" class="bldr-btn" data-cart-open>Cart \u00B7 <span data-cart-count>0</span></button>') +
          "</header>";
      }

      case "hero": {
        var blocks = section.blocks || ["eyebrow", "heading", "sub", "ctas"];
        var parts = blocks.map(function (b) {
          if (b === "eyebrow" && section.eyebrow) return '<span class="bldr-eyebrow">' + esc(section.eyebrow) + "</span>";
          if (b === "heading") return '<h1 class="bldr-h bldr-h-xl">' + esc(section.heading || DOC.storeName) + "</h1>";
          if (b === "sub" && section.sub) return '<p class="bldr-sub">' + esc(section.sub) + "</p>";
          if (b === "ctas") {
            return '<div class="bldr-btn-row">' + (section.buttons || []).map(function (btn) {
              var href = btn.href === "/checkout" ? "#" : btn.href.indexOf("/category/") === 0 ? "#category/" + btn.href.split("/category/")[1] : btn.href;
              var cls = btn.style === "ghost" ? "bldr-btn bldr-btn-ghost" : btn.style === "accent" ? "bldr-btn bldr-btn-accent" : "bldr-btn";
              var cart = btn.href === "/checkout" ? " data-cart-open" : "";
              return '<a class="' + cls + '" href="' + esc(href) + '"' + cart + ">" + esc(btn.label) + "</a>";
            }).join("") + "</div>";
          }
          if (b === "stats" && (section.stats || []).length) {
            return '<div class="bldr-stats">' + section.stats.map(function (s) {
              return '<div><div class="bldr-stat-value">' + esc(s.value) + '</div><div class="bldr-stat-label">' + esc(s.label) + "</div></div>";
            }).join("") + "</div>";
          }
          return "";
        }).join("");

        var art = section.imageUrl ? '<img class="bldr-hero-art" src="' + esc(section.imageUrl) + '" alt="">' : "";
        var style = section.heroStyle || "classic";
        var aura = DOC.glow > 0 ? " bldr-hero-aura" : "";

        // Split, but selling a package instead of showing artwork.
        if (style === "product") {
          var heroPick = section.packageId
            ? state.packages.filter(function (p) { return String(p.id) === String(section.packageId); })[0]
            : state.packages[0];

          return '<section class="bldr-section"><div class="bldr-section-inner bldr-hero-split bldr-hero-product">' +
            '<div class="bldr-hero-copy">' + parts + "</div>" +
            '<div class="bldr-hero-product-slot">' +
            (heroPick
              ? featuredHtml(heroPick, Object.assign({}, section, { featuredStyle: "stack" }))
              : '<div class="bldr-empty">Pick a package for the hero in the inspector.</div>') +
            "</div></div></section>";
        }

        if (style === "split") {
          return '<section class="bldr-section' + aura + '"><div class="bldr-section-inner bldr-hero-split"><div class="bldr-hero-copy">' + parts + "</div>" + art + "</div></section>";
        }
        return '<section class="bldr-section' + aura + '"><div class="bldr-section-inner bldr-hero-' + esc(style) + '">' + parts + "</div></section>";
      }

      case "cats":
        inner = state.categories.map(function (c) {
          return '<a class="bldr-pill" href="#category/' + esc(c.slug) + '">' + esc(c.name) +
            (section.showCounts ? ' <span style="opacity:.55">(' + c.packages.length + ")</span>" : "") + "</a>";
        }).join("");
        return sectionShell(section, '<div class="bldr-pill-row">' + inner + "</div>");

      case "grid": {
        // A product route replaces the first package block with the product
        // itself. Rendering it in every such block showed it twice.
        var routed = routedPackage();
        if (routed && !state.productShown) {
          state.productShown = true;
          return sectionShell({}, productHtml(routed));
        }

        var list = packagesFor(section);
        if (!section.showAll) list = list.slice(0, section.limit || 6);
        if (list.length === 0) return sectionShell(section, '<div class="bldr-empty">No packages here yet.</div>');
        inner = '<div class="bldr-grid" style="grid-template-columns:repeat(' + (section.cols || 3) + ',1fr);gap:' + (section.gap || 14) + 'px">' +
          list.map(function (p) { return cardHtml(p, section); }).join("") + "</div>";
        return sectionShell(section, inner);
      }

      case "featured": {
        // Prefer the store's own featured module when the owner set one.
        var featuredModule = moduleOfType("featured_package");
        var pick = routedPackage() ||
          (section.packageId
            ? state.packages.filter(function (p) { return String(p.id) === String(section.packageId); })[0]
            : (featuredModule && featuredModule.data && featuredModule.data.package) || state.packages[0]);
        if (!pick) return "";

        if (routedPackage()) {
          if (state.productShown) return "";
          state.productShown = true;
          return sectionShell({}, productHtml(pick));
        }

        return sectionShell(section, featuredHtml(pick, section));
      }

      case "cart":
        return sectionShell(section, '<div class="bldr-card" data-cart-panel style="padding:var(--bldr-space-4)"></div>');

      case "faq":
        inner = (section.faqItems || []).map(function (i) {
          return '<div class="bldr-faq-row"><div class="bldr-h bldr-h-md">' + esc(i.q) + '</div><div class="bldr-sub">' + esc(i.a) + "</div></div>";
        }).join("");
        return sectionShell(section, inner);

      case "cta":
        return sectionShell(section, '<div class="bldr-band"><div class="bldr-h bldr-h-lg">' + esc(section.ctaHeading || "") + '</div><span style="flex:1"></span>' +
          (section.buttons || []).map(function (b) { return '<a class="bldr-btn" href="#">' + esc(b.label) + "</a>"; }).join("") + "</div>");

      case "text":
        return sectionShell(section, '<p class="bldr-sub" style="max-width:70ch">' + esc(section.bodyText || "") + "</p>");

      case "discord":
        return sectionShell(section, '<div class="bldr-band"><div><div class="bldr-h bldr-h-lg">' +
          esc(section.title || "Join the community") + "</div></div><span style=\"flex:1\"></span>" +
          '<a class="bldr-btn" href="' + esc(section.inviteUrl || "#") + '">Open Discord</a></div>');

      case "socials":
        inner = (section.socials || []).filter(function (s) { return s.href; }).map(function (s) {
          return '<a class="bldr-social" href="' + esc(s.href) + '">' + esc(s.network.slice(0, 2)) + "</a>";
        }).join("");
        return inner ? sectionShell(section, '<div style="display:flex;gap:10px">' + inner + "</div>") : "";

      case "countdown": {
        var ends = section.endsAt ? new Date(section.endsAt) : null;
        var label = ends && !isNaN(ends.getTime()) ? ends.toLocaleString() : "Limited time";
        return sectionShell(section, '<div class="bldr-band"><span class="bldr-eyebrow">' +
          esc(section.title || "Sale ends soon") + "</span>" +
          (section.intro ? '<div class="bldr-sub">' + esc(section.intro) + "</div>" : "") +
          '<span style="flex:1"></span><span class="bldr-stat-value" data-countdown="' + esc(section.endsAt || "") + '">' +
          esc(label) + "</span></div>");
      }

      case "status": {
        // Live server status from the store's own module beats authored copy.
        var statusModule = moduleOfType("server_status");
        var live = statusModule && statusModule.data;
        var stats = live
          ? [
              { value: live.online ? "Online" : "Offline", label: live.header || "Server" },
              { value: live.players ? String(live.players.online) : "0", label: "Players" },
              { value: live.players ? String(live.players.max) : "0", label: "Slots" },
            ]
          : (section.stats || []);
        return sectionShell(section, '<div class="bldr-stats">' +
          stats.map(function (s2) {
            return '<div><div class="bldr-stat-value">' + esc(s2.value) + '</div><div class="bldr-stat-label">' + esc(s2.label) + "</div></div>";
          }).join("") +
          '<div><div class="bldr-stat-value">' + esc(DOC.storeName) + '</div><div class="bldr-stat-label">Store</div></div></div>');
      }

      case "serverinfo": {
        var address = section.connectAddress || "";
        return sectionShell(section, '<div class="bldr-info-card">' +
          '<div class="bldr-info-head">' + esc(section.title || "Test Server") + "</div>" +
          (section.intro ? '<div class="bldr-sub" style="margin:0">' + esc(section.intro) + "</div>" : "") +
          (address
            ? '<div class="bldr-connect">connect ' + esc(address) + '</div><a class="bldr-btn" href="fivem://connect/' + esc(address) + '">' + esc(section.ctaLabel || "Play") + "</a>"
            : '<div class="bldr-empty">Add a connect address in the editor.</div>') +
          "</div>");
      }

      case "topcustomer":
      case "donators": {
        var top = moduleOfType("top_customer");
        var topBody = top && top.data && top.data.username
          ? infoRow(
              top.data.username,
              'Spent <span class="bldr-money">' + amount(top.data.total) + " " + esc(currency()) + "</span>",
              "",
              top.data.avatar_url,
            )
          : '<div class="bldr-empty" style="padding:var(--bldr-space-4)">No payment data yet.</div>';

        return infoCard(section, section.title || (top && top.data && top.data.header) || "Top Customer", topBody);
      }

      case "payments": {
        var recent = moduleOfType("recent_payments");
        var rows = (recent && recent.data && recent.data.payments ? recent.data.payments : []).slice(0, section.limit || 5);

        var feed = rows.length > 0
          ? rows.map(function (p) {
              // The Headless API returns a username and an avatar for recent
              // payments; package and price are Plugin-API only, so they are
              // shown when present rather than filled in with a placeholder.
              return infoRow(
                p.username,
                p.package && p.package.name ? esc(p.package.name) : "",
                p.price != null
                  ? '<span class="bldr-money">' + amount(p.price) + " " + esc(p.currency || currency()) + "</span>"
                  : "",
                p.avatar_url,
              );
            }).join("")
          : '<div class="bldr-empty" style="padding:var(--bldr-space-4)">No payments to show yet.</div>';

        return infoCard(section, section.title || "Recent Payments", feed);
      }

      case "marquee": {
        var phrases = (section.marqueeItems || []).filter(function (t) { return t && t.trim(); });
        if (phrases.length === 0) return "";

        var seconds = { slow: 44, normal: 28, fast: 16 }[section.marqueeSpeed || "normal"] || 28;
        var run = phrases.concat(phrases).map(function (t) {
          return '<span class="bldr-marquee-item">' + esc(t) + "</span>";
        }).join("");

        var marqueeAttrs = shellAttrs(section);
        return '<section class="bldr-section' + marqueeAttrs.tone + '" style="padding-block:var(--bldr-space-6)">' +
          '<div class="bldr-marquee" aria-hidden="true" style="--bldr-marquee-duration:' + seconds + 's">' +
          '<div class="bldr-marquee-track">' + run + "</div></div></section>";
      }

      case "reviews": {
        // Imported into the document rather than fetched \u2014 a static site
        // cannot hold a Discord bot token.
        var reviews = (section.reviewItems || []).filter(function (r) { return r.text; });
        if (reviews.length === 0) return "";

        var reviewStyle = section.reviewsStyle || "cards";
        var reviewCols = reviewStyle === "quotes" ? 1 : section.cols || 3;

        return sectionShell(section, '<div class="bldr-reviews bldr-reviews-' + esc(reviewStyle) +
          '" style="grid-template-columns:repeat(' + reviewCols + ',1fr)">' +
          reviews.map(function (r) {
            var face = r.avatarUrl
              ? '<img class="bldr-review-avatar" src="' + esc(r.avatarUrl) + '" alt="" loading="lazy">'
              : '<span class="bldr-review-avatar bldr-review-initial">' + esc(r.author.slice(0, 1).toUpperCase()) + "</span>";
            var stamp = r.date
              ? '<span class="bldr-review-date">' + esc(new Date(r.date).toLocaleDateString(undefined, { month: "short", year: "numeric" })) + "</span>"
              : "";
            var stars = r.rating
              ? '<div class="bldr-review-stars" aria-label="' + r.rating + ' out of 5">' +
                new Array(r.rating + 1).join("\u2605") +
                '<span class="bldr-review-stars-off">' + new Array(Math.max(0, 5 - r.rating) + 1).join("\u2605") + "</span></div>"
              : "";
            var bought = r.product ? '<span class="bldr-review-product">' + esc(r.product) + "</span>" : "";
            return '<figure class="bldr-review">' + stars + '<blockquote class="bldr-review-text">' + esc(r.text) + "</blockquote>" +
              '<figcaption class="bldr-review-by">' + face + '<span class="bldr-review-name">' + esc(r.author) + "</span>" + bought + stamp +
              "</figcaption></figure>";
          }).join("") + "</div>");
      }

      case "goal": {
        var goal = moduleOfType("payment_goal") || moduleOfType("community_goal");
        if (!goal || !goal.data) return "";
        var pct = Math.max(0, Math.min(100, Number(goal.data.percentage || 0)));
        return sectionShell(section, '<div class="bldr-info-card">' +
          '<div class="bldr-info-head">' + esc(section.title || goal.data.header || "Goal") + "</div>" +
          '<div class="bldr-goal"><div class="bldr-goal-fill" style="width:' + pct + '%"></div></div>' +
          '<div class="bldr-stat-label">' + pct.toFixed(0) + "% funded</div></div>");
      }

      case "footer":
        return '<footer class="bldr-section" style="border-top:1px solid rgba(255,255,255,.08);margin-top:var(--bldr-space-8)">' +
          '<div class="bldr-section-inner"><span class="bldr-nav-brand">' + esc(DOC.storeName) + "</span>" +
          '<div class="bldr-sub" style="font-size:.75rem">&copy; ' + esc(DOC.storeName) + ". All Rights Reserved. " +
          esc(section.legalText || "Payments processed securely by Tebex.") + "</div></div></footer>";

      default:
        return "";
    }
  }

  /** Surface and reveal, shared with the Twig target's markup. */
  function shellAttrs(section) {
    var tone = section.tone && section.tone !== "none" ? " bldr-tone-" + esc(section.tone) : "";
    var reveal = section.reveal && section.reveal !== "none" ? ' data-reveal="' + esc(section.reveal) + '"' : "";
    return { tone: tone, reveal: reveal };
  }

  /**
   * The info-card row the Twig target uses for top customer and payments.
   * Both renderers have to agree \u2014 the editor previews Twig and the live site
   * runs this, so any divergence is something the owner sees only after
   * publishing.
   */
  function infoRow(name, sub, trailing, avatarUrl) {
    var face = avatarUrl
      ? '<img class="bldr-avatar" src="' + esc(avatarUrl) + '" alt="" loading="lazy">'
      : '<span class="bldr-avatar">' + esc(String(name || "?").slice(0, 1).toUpperCase()) + "</span>";

    return '<div class="bldr-info-row">' + face +
      '<span style="flex:1;min-width:0">' +
      '<span style="display:block;font-weight:600">' + esc(name) + "</span>" +
      (sub ? '<span class="bldr-sub" style="margin:0;font-size:.78rem">' + sub + "</span>" : "") +
      "</span>" +
      (trailing || "") +
      "</div>";
  }

  function infoCard(section, title, body) {
    var attrs = shellAttrs(section);
    return '<section class="bldr-section' + attrs.tone + '"' + attrs.reveal + '><div class="bldr-section-inner">' +
      '<div class="bldr-info-card"><div class="bldr-info-head">' + esc(title) + "</div>" + body + "</div></div></section>";
  }

  function sectionShell(section, inner) {
    var head = section.title
      ? '<div style="margin-bottom:var(--bldr-space-4)"><div class="bldr-h bldr-h-lg">' + esc(section.title) + "</div>" +
        (section.intro ? '<p class="bldr-sub">' + esc(section.intro) + "</p>" : "") + "</div>"
      : "";
    var attrs = shellAttrs(section);
    return '<section class="bldr-section' + attrs.tone + '"' + attrs.reveal + '><div class="bldr-section-inner">' +
      head + inner + "</div></section>";
  }

  /* ------------------------------------------------------------------ page */

  function pageForRoute() {
    var key = state.route.name === "home" ? "home" : state.route.name;
    var bound = DOC.pages.filter(function (p) { return p.key === "category" && p.categorySlug === state.route.slug; })[0];
    if (state.route.name === "category" && bound) return bound;
    return DOC.pages.filter(function (p) { return p.key === key; })[0] || DOC.pages[0];
  }

  /** CMS pages and the post-payment screen render inside the store chrome. */
  function interstitialHtml() {
    if (state.route.name === "cms") {
      var page = state.cmsPages.filter(function (p) { return p.slug === state.route.slug; })[0];
      if (!page) return sectionShell({}, '<div class="bldr-empty">That page does not exist.</div>');
      return sectionShell({ title: page.title }, '<div class="bldr-rich">' + page.content + "</div>");
    }

    if (state.route.name === "thanks") {
      return sectionShell({ title: "Thank you" },
        '<p class="bldr-sub">Your payment is confirmed and your purchase is on its way in-game. ' +
        'A receipt is on its way to your email.</p><a class="bldr-btn" href="#">Back to the store</a>');
    }

    return null;
  }

  function render() {
    state.route = parseRoute();
    state.productShown = false;
    var page = pageForRoute();
    var chrome = DOC.pages[0].sections;

    var nav = chrome.filter(function (s) { return s.type === "nav"; })[0];
    var announce = chrome.filter(function (s) { return s.type === "announce"; })[0];
    var footer = chrome.filter(function (s) { return s.type === "footer"; })[0];

    var interstitial = interstitialHtml();
    var main = interstitial !== null
      ? interstitial
      : page.sections
          .filter(function (s) { return ["nav", "footer", "announce"].indexOf(s.type) === -1; })
          .map(sectionHtml)
          .join("");

    document.body.innerHTML =
      (announce ? sectionHtml(announce) : "") +
      (nav ? sectionHtml(nav) : "") +
      '<main class="bldr-main">' + main + "</main>" +
      (footer ? sectionHtml(footer) : "");

    document.body.appendChild(cartDrawer());
    renderCart();
    window.scrollTo(0, 0);
    observeReveals();
    countUp();

    // The hero is above the fold, so it plays its own sequence immediately.
    playHero(document.querySelector(".bldr-main .bldr-section") || document.querySelector(".bldr-section"));
    bindScroll();
  }

  /* ------------------------------------------------------------------ cart */

  function cartDrawer() {
    var node = el(
      '<aside class="bldr-drawer" data-drawer aria-hidden="true">' +
        '<div class="bldr-drawer-scrim" data-cart-close></div>' +
        '<div class="bldr-drawer-panel" role="dialog" aria-label="Your cart">' +
          '<div class="bldr-drawer-head"><span class="bldr-h bldr-h-md">Your cart</span>' +
          '<button type="button" class="bldr-drawer-close" data-cart-close aria-label="Close cart">&times;</button></div>' +
          '<div class="bldr-drawer-body" data-cart-body></div>' +
        "</div>" +
      "</aside>"
    );
    if (state.cartOpen) { node.setAttribute("aria-hidden", "false"); node.classList.add("is-open"); }
    return node;
  }

  function openCart() {
    state.cartOpen = true;
    var drawer = document.querySelector("[data-drawer]");
    if (!drawer) return;
    drawer.setAttribute("aria-hidden", "false");
    drawer.classList.add("is-open");
  }

  function closeCart() {
    state.cartOpen = false;
    var drawer = document.querySelector("[data-drawer]");
    if (!drawer) return;
    drawer.setAttribute("aria-hidden", "true");
    drawer.classList.remove("is-open");
  }

  function lineHtml(item) {
    var line = item.in_basket || {};
    var quantity = line.quantity || 1;
    return '<div class="bldr-line">' +
      (item.image ? '<img class="bldr-line-art" src="' + esc(item.image) + '" alt="">' : '<div class="bldr-line-art"></div>') +
      '<div class="bldr-line-copy"><div class="bldr-line-name">' + esc(item.name) + "</div>" +
      '<div class="bldr-qty"><button type="button" data-qty-down="' + esc(item.id) + '" aria-label="Decrease quantity">\u2212</button>' +
      "<span>" + quantity + "</span>" +
      '<button type="button" data-qty-up="' + esc(item.id) + '" aria-label="Increase quantity">+</button>' +
      '<button type="button" class="bldr-line-remove" data-remove="' + esc(item.id) + '">Remove</button></div></div>' +
      '<div class="bldr-line-price">' + money(line.price) + "</div></div>";
  }

  function discountHtml() {
    var basket = state.basket;
    var chips = []
      .concat((basket.coupons || []).map(function (c) {
        return '<span class="bldr-chip">' + esc(c.code) + '<button type="button" data-remove-coupon="' + esc(c.code) + '" aria-label="Remove coupon">&times;</button></span>';
      }))
      .concat((basket.giftcards || []).map(function (g) {
        return '<span class="bldr-chip">Gift card ' + esc(g.card_number) + '<button type="button" data-remove-giftcard="' + esc(g.card_number) + '" aria-label="Remove gift card">&times;</button></span>';
      }))
      .concat(basket.creator_code
        ? ['<span class="bldr-chip">Creator ' + esc(basket.creator_code) + '<button type="button" data-remove-creator aria-label="Remove creator code">&times;</button></span>']
        : []);

    return '<div class="bldr-codes">' +
      (chips.length ? '<div class="bldr-chips">' + chips.join("") + "</div>" : "") +
      '<form class="bldr-code-row" data-code-form>' +
        '<select data-code-kind aria-label="Code type">' +
          '<option value="coupon">Coupon</option>' +
          '<option value="giftcard">Gift card</option>' +
          '<option value="creator">Creator code</option>' +
        "</select>" +
        '<input data-code-input placeholder="Enter code" aria-label="Code">' +
        '<button type="submit" class="bldr-btn bldr-btn-ghost">Apply</button>' +
      "</form></div>";
  }

  function authHtml() {
    if (state.authMethods.length === 0) return "";
    return '<div class="bldr-auth"><div class="bldr-note">Sign in so we know which account to deliver to.</div>' +
      '<div class="bldr-btn-row">' + state.authMethods.map(function (m) {
        return '<a class="bldr-btn bldr-btn-ghost" href="' + esc(m.url) + '">' + esc(m.name) + "</a>";
      }).join("") + "</div></div>";
  }

  function cartHtml() {
    var basket = state.basket;
    var items = basket && basket.packages ? basket.packages : [];
    if (items.length === 0) return '<div class="bldr-empty">Your cart is empty.</div>';

    var tax = Number(basket.sales_tax || 0);
    return items.map(lineHtml).join("") +
      discountHtml() +
      '<div class="bldr-totals">' +
        '<div><span>Subtotal</span><span>' + esc(currency()) + amount(basket.base_price) + "</span></div>" +
        (tax > 0 ? "<div><span>Tax</span><span>" + esc(currency()) + amount(tax) + "</span></div>" : "") +
        '<div class="bldr-total"><span>Total</span><span>' + esc(currency()) + amount(basket.total_price) + "</span></div>" +
      "</div>" +
      authHtml() +
      '<button type="button" class="bldr-btn bldr-btn-accent bldr-checkout" data-cart' +
      (state.authMethods.length > 0 ? " disabled" : "") + ">Checkout</button>";
  }

  function renderCart() {
    var count = state.basket && state.basket.packages
      ? state.basket.packages.reduce(function (sum, i) { return sum + ((i.in_basket && i.in_basket.quantity) || 1); }, 0)
      : 0;
    Array.prototype.forEach.call(document.querySelectorAll("[data-cart-count]"), function (n) { n.textContent = count; });

    var html = cartHtml();
    Array.prototype.forEach.call(document.querySelectorAll("[data-cart-body], [data-cart-panel]"), function (n) { n.innerHTML = html; });
  }

  /* --------------------------------------------------------------- motion */

  // anime.js when the page loaded it, the Web Animations API when it did not.
  // Either way the site never depends on the CDN being reachable.
  var anime = window.anime || null;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // How insistent the motion is, chosen by the design.
  var MOTION = { calm: 0.75, lively: 1, cinematic: 1.35 }[DOC.motion || "lively"] || 1;

  /**
   * Reveal vocabulary. Each entry is the state a node animates *from*; the
   * design picks one per section, so a long page does not arrive the same way
   * seven times running.
   */
  var REVEALS = {
    fade: { opacity: [0, 1], duration: 700 },
    rise: { opacity: [0, 1], translateY: [26, 0], duration: 760 },
    stagger: { opacity: [0, 1], translateY: [22, 0], duration: 640, stagger: 80 },
    scale: { opacity: [0, 1], scale: [0.94, 1], duration: 700 },
    blur: { opacity: [0, 1], filter: ["blur(14px)", "blur(0px)"], duration: 820 },
    wipe: { opacity: [0, 1], clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"], duration: 900 },
  };

  function playAnime(nodes, spec, delayBase) {
    var config = {
      targets: nodes,
      easing: "cubicBezier(.22,.7,.3,1)",
      duration: spec.duration * (2 - MOTION),
      delay: spec.stagger ? anime.stagger(spec.stagger, { start: delayBase || 0 }) : delayBase || 0,
    };

    ["opacity", "translateY", "scale", "filter", "clipPath"].forEach(function (key) {
      if (spec[key]) config[key] = spec[key];
    });

    anime(config);
  }

  function playWaapi(nodes, spec, delayBase) {
    var from = {};
    var to = {};

    if (spec.opacity) { from.opacity = spec.opacity[0]; to.opacity = spec.opacity[1]; }
    if (spec.translateY) { from.transform = "translateY(" + spec.translateY[0] + "px)"; to.transform = "none"; }
    if (spec.scale) { from.transform = "scale(" + spec.scale[0] + ")"; to.transform = "none"; }
    if (spec.filter) { from.filter = spec.filter[0]; to.filter = spec.filter[1]; }
    if (spec.clipPath) { from.clipPath = spec.clipPath[0]; to.clipPath = spec.clipPath[1]; }

    nodes.forEach(function (node, index) {
      node.animate([from, to], {
        duration: spec.duration * (2 - MOTION),
        delay: (delayBase || 0) + index * (spec.stagger || 0),
        easing: "cubic-bezier(.22,.7,.3,1)",
        fill: "both",
      });
    });
  }

  function play(nodes, name, delayBase) {
    var spec = REVEALS[name] || REVEALS.rise;
    if (reduced || nodes.length === 0) return;

    if (anime) playAnime(nodes, spec, delayBase);
    else playWaapi(nodes, spec, delayBase);
  }

  /** Kept for the boot path, which reveals the hero before anything scrolls. */
  function animateIn(nodes) {
    play(nodes, "rise", 0);
  }

  /**
   * The hero arrives as a sequence rather than all at once \u2014 eyebrow, then
   * heading, then the sub, then the buttons. It is the single clearest
   * difference between a page that feels designed and one that just appears.
   */
  function playHero(section) {
    if (reduced || !section) return;

    var parts = section.querySelectorAll(".bldr-eyebrow, .bldr-h, .bldr-sub, .bldr-btn-row, .bldr-stats, .bldr-fx");
    Array.prototype.forEach.call(parts, function (node, index) {
      play([node], index === 0 ? "fade" : "rise", 80 + index * 110);
    });
  }

  /** Sections fade up as they scroll into view, cards stagger within them. */
  function observeReveals() {
    if (reduced || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);

          var named = entry.target.getAttribute("data-reveal");
          var cards = entry.target.querySelectorAll(".bldr-card, .bldr-pill, .bldr-info-card, .bldr-feed-row, .bldr-review, .bldr-fx");

          if (cards.length > 0) {
            play(Array.prototype.slice.call(cards), named || "stagger", 0);
            return;
          }

          play([entry.target], named || "rise", 0);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    Array.prototype.forEach.call(document.querySelectorAll(".bldr-section"), function (section, index) {
      // The hero is above the fold and runs its own sequence.
      if (index === 0) return;
      section.style.opacity = "";
      io.observe(section);
    });
  }

  /** Numbers count up rather than snapping into place. */
  function countUp() {
    if (reduced) return;

    // Not [data-countdown] \u2014 that one is driven by its own ticker and counting
    // it up would mangle "1d 0h 59m" into a single number.
    Array.prototype.forEach.call(document.querySelectorAll(".bldr-stat-value:not([data-countdown])"), function (node) {
      var raw = node.textContent.replace(/[^0-9.]/g, "");
      var target = parseFloat(raw);
      if (!raw || isNaN(target) || target <= 0) return;

      var suffix = node.textContent.replace(/[0-9.,]/g, "");
      var decimals = (raw.split(".")[1] || "").length;
      var start = performance.now();
      var duration = 900;

      function tick(now) {
        var progress = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  /**
   * Scroll behaviours: the nav condenses once the hero is behind it, and the
   * hero art drifts slower than the page. Both run off one listener.
   */
  function bindScroll() {
    var nav = document.querySelector(".bldr-nav");
    var art = document.querySelector(".bldr-hero-art, .bldr-hero-bg");
    var ticking = false;

    function frame() {
      var y = window.scrollY || window.pageYOffset;

      if (nav) nav.classList.toggle("is-condensed", y > 24);
      if (art && !reduced) art.style.transform = "translate3d(0," + (y * 0.12).toFixed(1) + "px,0)";

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(frame);
      },
      { passive: true },
    );

    frame();
  }

  /* --------------------------------------------------------------- wiring */

  document.addEventListener("pointermove", function (event) {
    var card = event.target.closest ? event.target.closest(".bldr-card") : null;
    if (!card || reduced) return;

    var box = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((event.clientX - box.left) / box.width).toFixed(3));
    card.style.setProperty("--my", ((event.clientY - box.top) / box.height).toFixed(3));
  });

  function lineQuantity(packageId) {
    var item = state.basket && state.basket.packages
      ? state.basket.packages.filter(function (i) { return String(i.id) === String(packageId); })[0]
      : null;
    return item && item.in_basket ? item.in_basket.quantity || 1 : 1;
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    function hit(selector) { return target.closest ? target.closest(selector) : null; }

    var add = hit("[data-add]");
    if (add) {
      event.preventDefault();
      var pdpQty = add.hasAttribute("data-add-from-pdp") ? document.querySelector("[data-pdp-qty-value]") : null;
      addPackage(add.getAttribute("data-add"), add, { quantity: pdpQty ? Number(pdpQty.textContent) : 1 });
      return;
    }

    var step = hit("[data-pdp-qty]");
    if (step) {
      event.preventDefault();
      var readout = document.querySelector("[data-pdp-qty-value]");
      if (readout) readout.textContent = String(Math.max(1, Number(readout.textContent) + Number(step.getAttribute("data-pdp-qty"))));
      return;
    }

    var thumb = hit("[data-gallery]");
    if (thumb) {
      event.preventDefault();
      var main = document.querySelector("[data-gallery-main]");
      if (main) main.src = thumb.getAttribute("data-gallery");
      Array.prototype.forEach.call(document.querySelectorAll(".bldr-thumb"), function (t) { t.classList.remove("is-active"); });
      thumb.classList.add("is-active");
      return;
    }

    var dismiss = hit("[data-dismiss]");
    if (dismiss) { event.preventDefault(); dismiss.parentElement.remove(); return; }

    if (hit("[data-cart-open]")) { event.preventDefault(); openCart(); return; }
    if (hit("[data-cart-close]")) { event.preventDefault(); closeCart(); return; }

    var up = hit("[data-qty-up]");
    if (up) {
      event.preventDefault();
      var idUp = up.getAttribute("data-qty-up");
      mutate(function (ident) { return Tebex.setQuantity(ident, idUp, lineQuantity(idUp) + 1); });
      return;
    }

    var down = hit("[data-qty-down]");
    if (down) {
      event.preventDefault();
      var idDown = down.getAttribute("data-qty-down");
      var next = lineQuantity(idDown) - 1;
      mutate(function (ident) {
        return next <= 0 ? Tebex.removePackage(ident, idDown) : Tebex.setQuantity(ident, idDown, next);
      });
      return;
    }

    var remove = hit("[data-remove]");
    if (remove) {
      event.preventDefault();
      var idRemove = remove.getAttribute("data-remove");
      mutate(function (ident) { return Tebex.removePackage(ident, idRemove); });
      return;
    }

    var dropCoupon = hit("[data-remove-coupon]");
    if (dropCoupon) {
      event.preventDefault();
      var code = dropCoupon.getAttribute("data-remove-coupon");
      mutate(function (ident) { return Tebex.removeCoupon(ident, code); });
      return;
    }

    var dropCard = hit("[data-remove-giftcard]");
    if (dropCard) {
      event.preventDefault();
      var number = dropCard.getAttribute("data-remove-giftcard");
      mutate(function (ident) { return Tebex.removeGiftCard(ident, number); });
      return;
    }

    if (hit("[data-remove-creator]")) {
      event.preventDefault();
      mutate(function (ident) { return Tebex.removeCreatorCode(ident); });
      return;
    }

    if (hit("[data-cart]")) { event.preventDefault(); checkout(); }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target.closest ? event.target.closest("[data-code-form]") : null;
    if (!form) return;
    event.preventDefault();

    var kind = form.querySelector("[data-code-kind]").value;
    var input = form.querySelector("[data-code-input]");
    var value = input.value.trim();
    if (!value) return;

    ensureBasket().then(function () {
      return mutate(function (ident) {
        if (kind === "giftcard") return Tebex.applyGiftCard(ident, value);
        if (kind === "creator") return Tebex.applyCreatorCode(ident, value);
        return Tebex.applyCoupon(ident, value);
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && state.cartOpen) closeCart();
  });

  window.addEventListener("hashchange", render);

  setInterval(function () {
    Array.prototype.forEach.call(document.querySelectorAll("[data-countdown]"), function (node) {
      var target = new Date(node.getAttribute("data-countdown"));
      if (isNaN(target.getTime())) return;

      var ms = target.getTime() - Date.now();
      if (ms <= 0) { node.textContent = "Ended"; return; }

      var d = Math.floor(ms / 86400000);
      var h = Math.floor((ms % 86400000) / 3600000);
      var m = Math.floor((ms % 3600000) / 60000);
      var s2 = Math.floor((ms % 60000) / 1000);
      node.textContent = (d > 0 ? d + "d " : "") + h + "h " + m + "m " + s2 + "s";
    });
  }, 1000);

  /* ----------------------------------------------------------------- boot */

  /** Optional feeds must never take the store down with them. */
  function optional(promise, fallback) {
    return promise.catch(function () { return fallback; });
  }

  /**
   * Paint the store before Tebex answers.
   *
   * The document is inlined in the page, so the nav, hero and copy are known
   * at load. Only prices and package names need the network, and holding the
   * whole page for them showed a bare "Loading the store\u2026" for as long as the
   * round trip took. Package blocks stand in as skeletons and are replaced in
   * place when the catalogue lands.
   */
  function renderSkeleton() {
    var page = DOC.pages[0];
    var chrome = page.sections;
    var nav = chrome.filter(function (s) { return s.type === "nav"; })[0];
    var announce = chrome.filter(function (s) { return s.type === "announce"; })[0];
    var footer = chrome.filter(function (s) { return s.type === "footer"; })[0];

    var NEEDS_DATA = ["grid", "featured", "cats", "cart", "reviews", "topcustomer", "payments", "goal", "status"];

    var body = page.sections
      .filter(function (s) { return ["nav", "footer", "announce"].indexOf(s.type) === -1; })
      .map(function (section) {
        if (NEEDS_DATA.indexOf(section.type) === -1) return sectionHtml(section);

        var count = section.type === "grid" ? Math.min(section.limit || 6, 6) : 1;
        var cols = section.type === "grid" ? section.cols || 3 : 1;
        var cells = "";
        for (var i = 0; i < count; i++) cells += '<div class="bldr-skeleton-card"></div>';

        return sectionShell({ title: section.title, intro: section.intro },
          '<div class="bldr-grid" style="grid-template-columns:repeat(' + cols + ',1fr);gap:' + (section.gap || 14) + 'px">' + cells + "</div>");
      })
      .join("");

    document.body.innerHTML =
      (announce ? sectionHtml(announce) : "") +
      (nav ? sectionHtml(nav) : "") +
      '<main class="bldr-main bldr-loading">' + body + "</main>" +
      (footer ? sectionHtml(footer) : "");
  }

  // Nav and copy are known from the document, so show them straight away.
  try { renderSkeleton(); } catch (e) {}

  Promise.all([
    Tebex.categories("?includePackages=1").then(function (body) {
      state.categories = (body.data || []).map(function (c) {
        return {
          id: c.id,
          name: c.name,
          slug: c.slug || String(c.id),
          description: c.description || "",
          order: c.order,
          packages: c.packages || [],
        };
      });
    }),
    // Packages outside every category would otherwise be unreachable.
    optional(Tebex.allPackages(), { data: [] }).then(function (body) { return body && body.data ? body.data : []; }),
    optional(Tebex.webstore(), null),
    optional(Tebex.pages(), { data: [] }),
    optional(Tebex.sidebar(), { data: [] }),
    loadBasket(),
  ])
    .then(function (results) {
      var flat = results[1] || [];
      var fromCategories = state.categories.reduce(function (all, c) { return all.concat(c.packages); }, []);
      var seen = {};

      state.packages = fromCategories.concat(flat).filter(function (p) {
        if (!p || seen[p.id]) return false;
        seen[p.id] = true;
        return true;
      });

      state.webstore = results[2] && results[2].data ? results[2].data : null;
      state.cmsPages = ((results[3] && results[3].data) || []).filter(function (p) { return !p.hidden && !p.disabled && !p.private; });
      state.modules = (results[4] && results[4].data) || [];

      return refreshAuth();
    })
    .then(function () {
      // Returning from the auth provider lands here with an authorised basket.
      return state.basket ? resumePending() : null;
    })
    .then(render)
    .catch(function (error) {
      document.body.innerHTML =
        '<div class="bldr-section"><div class="bldr-section-inner"><div class="bldr-empty">' +
        "Could not load the store. " + esc(error.message) + "</div></div></div>";
    });
})();
