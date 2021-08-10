<template>
  <Navbar :planets="planets" @clicked="onClickChild" />
  <!-- <router-view :key="$route.path" :planets="planets" /> -->
  <router-view :key="$route.path" :filteredPlanet="filteredPlanet" />

  <!-- <Planet :planets="planets" /> -->
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
    onClickChild(value) {
      // console.log("onclickchildvalue=", value);
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