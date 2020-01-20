<script>
  import { getStore } from "./store.js";
  import { brl } from "./helpers.js";

  let subtotal = 0;
  let shipping = 0;
  let total = 0;

  getStore().cart$(items => {
    subtotal = 0;
    shipping = 0;
    items.map(item => {
      subtotal = subtotal + item.price;
      shipping = shipping + 10;
    });
    if (subtotal > 250) {
      shipping = 0;
    }
    total = subtotal + shipping;
  });

  $: brlSubtotal = brl(subtotal);
  $: brlShipping = brl(shipping);
  $: brlTotal = brl(total);
</script>

<style>
  .costs {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }
  .costs div {
    text-align: left;
    margin: 0.5rem 0;
    color: var(--medium-gray);
  }
  .costs .amount {
    text-align: right;
    color: var(--black);
    font-weight: 700;
    font-size: 1.25rem;
  }
  .costs .total {
    font-size: 1.5rem;
  }
</style>

<div class="costs">
  <div>subtotal</div>
  <div class="amount">R$ {brlSubtotal}</div>
  <div>frete</div>
  <div class="amount">R$ {brlShipping}</div>
  <div>total</div>
  <div class="amount total">R$ {brlTotal}</div>
</div>
