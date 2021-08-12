<template>
  <Navbar :planets="planets" />

  <router-view :key="$route.path" :planets="planets" />
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
    };
  },
  created() {
    this.fetchLocalData();
  },
  methods: {
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