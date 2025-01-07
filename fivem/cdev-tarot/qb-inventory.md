# QB Inventory

## Step one

Add images to `qb-inventory/html/images`

Images are available in the `images` folder of this resource.

## Step two

Add items to `qb-core/shared/items.lua` like listed below&#x20;

<pre class="language-lua"><code class="lang-lua"><strong>['tarotminordeck'] = {
</strong>    ['name'] = 'tarotminordeck',
    ['label'] = 'Tarot Minor Deck',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'tarotminordeck.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Tarot Deck',
},

['tarotmajordeck'] = {
    ['name'] = 'tarotmajordeck',
    ['label'] = 'Tarot Major Deck',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'tarotmajordeck.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Tarot Deck',
},
</code></pre>
