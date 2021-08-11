<template>
  <section :key="id">
    <div class="flex">
      <div>
        <!--v-if="somethingIsTrue/False"  -->
        <h1 class="font-bold">imagehere</h1>
      </div>
      <div class="flex flex-col">
        <h2>{{ filteredPlanet.name }}</h2>
        <p>{{ filteredPlanet.overview.content }}</p>
        <p>source sikipedia</p>
        <button class="buttonClass">overview</button>
        <button class="buttonClass">internal structure</button>
        <button class="buttonClass">surface geology</button>

        <div class="flex">
          <div class="flex-col">
            <p>rotation time</p>
            <p>{{ filteredPlanet.rotation }}</p>
          </div>
          <div class="flex-col">
            <p>revolution time</p>
            <p>{{ filteredPlanet.revolution }}</p>
          </div>
          <div class="flex-col">
            <p>radius</p>
            <p>{{ filteredPlanet.radius }}</p>
          </div>
          <div class="flex-col">
            <p>average temp</p>
            <p>{{ filteredPlanet.temperature }}</p>
          </div>
        </div>
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
