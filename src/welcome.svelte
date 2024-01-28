<script>
  let inputValue = '';
  function handleInput(event) {
    inputValue = event.target.inputValue;
  }
</script>

<input type = "text" bind:value = {inputValue} on:input = {handleInput}>