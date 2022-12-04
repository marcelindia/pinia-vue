<template>
  <div class="task">
    <h3>
      {{ task.title }}
      <div class="icons">
        <i class="material-icons">delete</i>
        <i class="material-icons">favorite</i>
      </div>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>
