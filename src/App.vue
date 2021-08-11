<template>
  <Navbar :planets="planets" @clicked="onSelection" />

  <router-view :key="$route.path" :filteredPlanet="filteredPlanet" />
</template>


<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      planets: [],
      filteredPlanet: {},
    };
  },
  mounted() {
    this.fetchLocalData();
  },
  methods: {
    onSelection(value) {
      this.filteredPlanet = value;
    },
    fetchLocalData() {
      fetch("./response.json")
        .then((res) => res.json())
        .then((data) => (this.planets = data))
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>