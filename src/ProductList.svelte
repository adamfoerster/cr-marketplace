<script>
  import { onMount } from "svelte";
  import ProductItem from "./ProductItem.svelte";
  import { getStore } from "./store.js";
  import { by } from "./helpers.js";

  let orderedProducts = [];
  let sorting = "price";

  onMount(() => {
    const store = getStore();
    store.sorting$(o => {
      sorting = o;
      orderedProducts = orderedProducts.sort(by[sorting]);
    });
    store.products$(p => (orderedProducts = p.sort(by[sorting])));
  });
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: calc(33.33% - 1rem) calc(33.33% - 1rem) calc(
        33.33% - 1rem
      );
    grid-template-rows: auto;
    grid-gap: 1.5rem;
  }
  .container:hover {
    cursor: pointer;
  }
</style>

<div class="container">
  {#each orderedProducts as product}
    <ProductItem {...product} />
  {/each}
</div>
