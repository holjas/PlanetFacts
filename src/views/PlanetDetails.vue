<template>
  <section :key="id">
    <div class="flex h-auto">
      <div class="w-8/12">
        <!--v-if="somethingIsTrue/False"  -->
        <h1 class="font-bold">imagehere</h1>
      </div>

      <div class="w-4/12 flex flex-col">
        <h1 class="mb-6">{{ filteredPlanet.name }}</h1>
        <p>{{ filteredPlanet.overview.content }}</p>
        <p class="mt-3">
          <span class="text-gray-600 pr-2">Source </span>
          <span class="text-gray-500 underline font-bold">Wikipedia</span>
        </p>
        <button>overview</button>
        <button>internal structure</button>
        <button>surface geology</button>
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
    filteredPlanet: Object,
  },
};
</script>
