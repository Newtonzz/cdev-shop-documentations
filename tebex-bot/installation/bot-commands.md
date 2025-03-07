# Bot Commands

{% hint style="info" %}
## Slash Commands
{% endhint %}

## coupon create percentage

Create a coupon based on %, example 10% discount

* **percent**:INTEGER — A discount percentage
* **uses**:INTEGER — Amount of uses before expires, 0 for unlimited uses
* **minimum**:INTEGER — Minimum basket value for use, 0 for free use

## coupon create fixed

Example 10$ discount

* **amount**:INTEGER — A discount amount
* **uses**:INTEGER — Amount of uses before expires, 0 for unlimited uses
* **minimum**:INTEGER — Minimum basket value for use, 0 for free use

## coupon list

Get a list of coupons

## coupon get

Retrieve a specific coupon

## coupon delete

Delete a specific coupon

## giftcard list

* **type**:OPTIONS — Active Gift Cards & Voided Gift Cards

## giftcard create

* **expires\_at:**&#x53;TRING - yyyy-mm-dd hh:mm:ss
* **note:**&#x53;TRING - Leave a gift card note
* **amount:**&#x49;NTEGER - Gift card amount

## giftcard get

Retrieve a specific gift card

## giftcard topup

* **id:**&#x53;TRING - ID of gift card
* **amount:**&#x49;NTEGER - Amount to top up with

## listing

Get the categories & packages

## lookup player

Player name / UUID

## lookup transaction

Transaction ID (TID)

## payments

Retrieve the latest payments (up to 25 per embed)&#x20;

* **page:**&#x4F;PTION - Return the page number
