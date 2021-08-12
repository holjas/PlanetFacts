<template>
  <section :key="id" class="wrapper">
    <div class="flex h-auto">
      <div class="w-full pt-6">
        <!--v-if="somethingIsTrue/False"  -->
        <img :src="require(`../assets/${filteredPlanet.images.planet}`)" />
      </div>
      <!-- side bar details -->
      <div class="sidebar p-3 flex flex-col">
        <h1 class="mb-6">{{ filteredPlanet.name }}</h1>
        <p>{{ filteredPlanet.overview.content }}</p>
        <p class="mt-5 mb-7">
          <span class="text-gray-600 pr-2">Source </span>
          <span class="text-gray-500 underline font-bold">
            <a :href="filteredPlanet.overview.source" target="_blank">
              Wikipedia

              <i class="fas fa-external-link-square-alt pl-2"></i>
            </a>
          </span>
        </p>

        <button><span>01</span>overview</button>
        <button><span>02</span>internal structure</button>
        <button><span>03</span>surface geology</button>
      </div>
    </div>
    <!-- box details start -->
    <div class="flex justify-between">
      <div class="overviewContainer">
        <h4>rotation time</h4>
        <h2>
          {{ filteredPlanet.rotation }}
        </h2>
      </div>
      <div class="overviewContainer">
        <h4>revolution time</h4>
        <h2>{{ filteredPlanet.revolution }}</h2>
      </div>
      <div class="overviewContainer">
        <h4>radius</h4>
        <h2>{{ filteredPlanet.radius }}</h2>
      </div>
      <div class="overviewContainer">
        <h4>average temp</h4>
        <h2>{{ filteredPlanet.temperature }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: {
    planets: Array,
  },
  computed: {
    filteredPlanet() {
      return this.planets.find((x) => x.name === this.$route.params.id);
    },
  },
  // updated() {
  //   console.log("XPLANET", this.filterePlanet);
  // },
};
</script>

<style scoped>
.sidebar {
  width: 720px;
}
.overviewContainer {
  @apply flex-col w-3/12 border border-gray-600 py-5 pl-5 m-2 pr-12 uppercase text-xs font-bold;
}
</style>