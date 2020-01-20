<script>
  import { getStore } from "./store.js";
  const store = getStore();
  let sorting = "score";

  $: setSorting = store.setSorting(sorting);
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  h1 {
    text-align: left;
    flex: 1;
  }
  label {
    font-size: 0.1rem;
    opacity: 0.1;
  }
</style>

<div>
  <h1>Games</h1>
  <label for="sorting">Ordenação</label>
  <select bind:value={sorting} id="sorting" on:change>
    <option value="score">Mais Populares</option>
    <option value="price">Menor Preço</option>
    <option value="alpha">Ordem Alfabética</option>
  </select>
</div>
