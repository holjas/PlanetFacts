<template>
  <div :key="id">
    <h2>SELECTED PLANET: {{ id }}</h2>
  </div>
  <p>FilteredPlanet: {{ filteredPlanet.name }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: {
    filteredPlanet: Object,
  },
};
</script>
