<script>
  import { getStore } from "./store.js";
  import CartItem from "./CartItem.svelte";
  import CartEmpty from "./CartEmpty.svelte";
  import CartCosts from "./CartCosts.svelte";

  let cartItems = [];

  getStore().cart$(items => (cartItems = items));
</script>

<style>
  .container {
    border-radius: 0.3rem;
    border: 1px solid var(--light-gray);
    margin: 0.3rem 0;
    padding: 1.5rem;
  }

  h2 {
    text-align: left;
  }
</style>

<div class="container">
  <h2>Carrinho</h2>
  {#if !cartItems.length}
    <CartEmpty />
  {:else}
    {#each cartItems as item}
      <CartItem {...item} />
    {/each}
    <CartCosts />
    <button>finalizar compra</button>
  {/if}
</div>
