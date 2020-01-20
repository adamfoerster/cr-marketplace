<script>
  import { getStore } from "./store.js";
  import { brl } from "./helpers.js";

  export let id;
  export let name;
  export let price;
  export let image;
  export let score;

  let hovering = false;

  const hoverIn = () => (hovering = true);
  const hoverOut = () => (hovering = false);

  const addToCart = () => {
    getStore().addToCart({
      id,
      name,
      price,
      image,
      score
    });
  };

  $: brlPrice = brl(price);
</script>

<style>
  .container {
    width: 100%;
    min-height: 100px;
    text-align: center;
    background-color: white;
  }
  .img-bg {
    background-color: var(--light-gray);
    width: 100%;
    padding: 1rem 0;
    margin: 0 0 0.5rem;
  }
  span {
    color: var(--blue);
    font-weight: 700;
  }
</style>

<div
  on:click={addToCart}
  on:mouseover={hoverIn}
  on:mouseout={hoverOut}
  class="container">
  <div class="img-bg">
    <img src={'/assets/' + image} alt={name} />
  </div>
  {#if hovering}
    <br />
    <span>adicionar ao carrinho</span>
  {:else}
    <h3>{name}</h3>
    <span>R$ {brlPrice}</span>
  {/if}
</div>
