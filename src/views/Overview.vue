<template>
  <div>
    <p>Overview</p>
    <p>Active name:: {{ activePlanet.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    activePlanet: Object,
  },
  updated() {
    console.log("activeplanet component", this.activePlanet);
  },
};
</script>
