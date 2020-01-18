<script>
  import ProductItem from "./ProductItem.svelte";
  import { products, order } from "./store.js";

  let orderedProducts = [];

  products.subscribe(p => orderedProducts = p);
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-gap: 1.5rem;
  }
</style>

<div class="container">
  {#each orderedProducts as product}
  <ProductItem {...product}/>
  {/each}
</div>
