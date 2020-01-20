<script>
  import Header from "./Header.svelte";
  import Cart from "./Cart.svelte";
	import ProductList from "./ProductList.svelte";
	import { getStore } from "./store.js";

	getStore().fetchProducts();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 16.5rem;
    grid-template-rows: 3rem auto;
    grid-gap: 1.5rem;
  }
  header {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  section {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  aside {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
  }
</style>

<main>
  <header>
    <Header />
  </header>
  <section>
    <ProductList />
  </section>
  <aside>
    <Cart />
  </aside>
</main>
