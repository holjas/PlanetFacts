<template>
  <Navbar :planets="planets" />

  <router-view v-slot="{ Component }">
    <!-- using animate.css transitions. cdn added to index.html -->
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="out-in"
    >
      <component :is="Component" :planets="planets" :key="$route.path" />
    </transition>
  </router-view>
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

<style>
/* FOR WHEN USING <transition name="fade" mode="out-in">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>