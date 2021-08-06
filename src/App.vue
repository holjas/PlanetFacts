<template>
  <Navbar :planets="planets" />
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
  mounted() {
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