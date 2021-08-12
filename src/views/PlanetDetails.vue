<template>
  <section :key="id" class="wrapper">
    <div class="flex h-auto">
      <div class="w-7/12 pt-6">
        <!--v-if="somethingIsTrue/False"  -->
        <img :src="require(`../assets/${filteredPlanet.images.planet}`)" />
      </div>

      <div class="w-5/12 p-3 flex flex-col">
        <h1 class="mb-6">{{ filteredPlanet.name }}</h1>
        <p>{{ filteredPlanet.overview.content }}</p>
        <p class="mt-5 mb-7">
          <span class="text-gray-600 pr-2">Source </span>
          <span class="text-gray-500 underline font-bold">Wikipedia</span>
          <i class="fas fa-external-link-square-alt text-gray-500 pl-2"></i>
        </p>

        <button><span>01</span>overview</button>
        <button><span>02</span>internal structure</button>
        <button><span>03</span>surface geology</button>
      </div>
    </div>
    <div class="flex justify-evenly p-5">
      <div class="overviewContainer">
        <p class="overview">rotation time</p>
        <p class="overview">
          {{ filteredPlanet.rotation }}
        </p>
      </div>
      <div class="overviewContainer">
        <p>revolution time</p>
        <p>{{ filteredPlanet.revolution }}</p>
      </div>
      <div class="overviewContainer">
        <p>radius</p>
        <p>{{ filteredPlanet.radius }}</p>
      </div>
      <div class="overviewContainer">
        <p>average temp</p>
        <p>{{ filteredPlanet.temperature }}</p>
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
