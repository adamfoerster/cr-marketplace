<script>
  export let id;
  export let name;
  export let price;
  export let image;
  export let score;
</script>

<style>
  .container {
    width: 100%;
    min-height: 100px;
    text-align: center;
  }
  .img-bg {
    background-color: var(--light-gray);
    width: 100%;
    padding: 1rem 0;
    margin: 0 0 .5rem;
  }
</style>

<div class="container">
  <div class="img-bg">
  <img src={'/assets/' + image} alt={name} />
  </div>
  <h3>{name}</h3>
  <span>{price}</span>
</div>
