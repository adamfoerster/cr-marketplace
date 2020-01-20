<script>
  import { getStore } from "./store.js";
  import { brl } from "./helpers.js";

  export let id;
  export let name;
  export let price;
  export let image;
  export const score = 0;

  let hovering = 0;

  const hoverIn = () => (hovering = 1);
  const hoverOut = () => (hovering = 0);

  const removeFromCart = () => getStore().removeFromCart(id);

  $: brlPrice = brl(price);
</script>

<style>
  .container {
    width: 100%;
    margin: 1rem 0;
    display: flex;
  }
  .image {
    width: 3.5rem;
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image img {
    height: 3rem;
  }
  .name {
    flex: 1;
    text-align: left;
    color: var(--medium-gray);
    padding-left: 0.5rem;
  }
  span {
    color: var(--black);
    font-weight: 600;
  }
  .close {
    width: 1rem;
    height: 1rem;
    color: white;
    background-color: var(--blue);
    border-radius: 50%;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    opacity: 0;
    text-transform: uppercase;
  }
  .close:hover {
    cursor: pointer;
  }
</style>

<div class="container" on:mouseover={hoverIn} on:mouseout={hoverOut}>
  <div class="image">
    <img src={'/assets/' + image} alt={name} />
  </div>
  <div class="name">
    {name}
    <br />
    <span>R$ {brlPrice}</span>
  </div>
  <div on:click={removeFromCart} class="close" style="opacity: {hovering}">
    x
  </div>
</div>
