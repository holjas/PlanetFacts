<template>
  <div :key="id">
    <h2>SELECTED PLANET: {{ id }}</h2>

    <p>FilteredPlanet: {{ filteredPlanet.name }}</p>
    <p>FilteredPlanet radius: {{ filteredPlanet.radius }}</p>
  </div>
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
