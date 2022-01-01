Skip to content Search or jump to… Pull requests Issues Marketplace Explore
@holjas holjas / PlanetFacts Public Code Issues Pull requests Actions Projects
Wiki Security Insights Settings PlanetFacts/src/views/PlanetDetails.vue @holjas
holjas side bar buttons removed on small, box details responsive Latest commit
da08285 on Aug 15 History 1 contributor 208 lines (201 sloc) 5.85 KB

<template>
  <section :key="id + activeClass" class="wrapper">
    <div class="flex h-auto xs:flex-wrap xl:flex-nowrap">
      <div class="pt-6 w-full flex justify-center items-center xs:mb-6">
        <!-- <img :src="require(`../assets/${filteredPlanet.images.planet}`)" /> -->
        <img :src="require(`../assets/${planetImage}`)" />
        <img
          :src="require(`../assets/${planetImageGeology}`)"
          v-show="activeClass === 'geology'"
          class="w-40 transform -rotate-45 translate-y-36 -translate-x-16"
        />
      </div>

      <!-- side bar details -->
      <div
        class="flex xs:flex-col-reverse xs:p-6 xs:mt-6 md:flex-row xl:flex-col xl:w-6/12 xl:p-3"
      >
        <div class="xs:w-full md:w-8/12 xl:w-full">
          <h1 class="mb-6">
            {{ filteredPlanet.name }}
          </h1>
          <p class="xs:mt-6">{{ planetOverview }}</p>
          <p class="mt-5 mb-7">
            <span class="text-gray-600 pr-2">Source </span>
            <span class="text-gray-500 underline font-bold">
              <a :href="filteredPlanet.overview.source" target="_blank">
                Wikipedia

                <i class="fas fa-external-link-square-alt pl-2"></i>
              </a>
            </span>
          </p>
        </div>

        <div
          class="
       
            xs:grid xs:grid-cols-3 xs:gap-2 xs:place-content-evenly
                 
            md:w-4/12
            md:ml-6
            md:xs:place-content-start
            xl:w-full
            xl:mx-0
            md:flex-col
            md:flex
            
          "
        >
          <button
            @click="toggleDetailView"
            name="overview"
            :class="[activeClass === 'overview' ? 'btn-active' : '']"
          >
            <span class="xs:hidden md:inline">01</span>overview
          </button>
          <button
            @click="toggleDetailView"
            name="structure"
            :class="[activeClass === 'structure' ? 'btn-active' : '']"
          >
            <span class="xs:hidden md:inline">02</span>internal structure
          </button>
          <button
            @click="toggleDetailView"
            name="geology"
            :class="[activeClass === 'geology' ? 'btn-active' : '']"
          >
            <span class="xs:hidden md:inline">03</span>surface geology
          </button>
        </div>
      </div>
    </div>
    <!-- box details start -->
    <div class="flex flex-col w-full md:flex-row justify-between mt-5">
      <div class="overviewContainer">
        <h4 class="overviewText">rotation time</h4>
        <h2 class="overviewText">
          {{ filteredPlanet.rotation }}
        </h2>
      </div>
      <div class="overviewContainer">
        <h4 class="overviewText">revolution time</h4>
        <h2 class="overviewText">{{ filteredPlanet.revolution }}</h2>
      </div>
      <div class="overviewContainer">
        <h4 class="overviewText">radius</h4>
        <h2 class="overviewText">{{ filteredPlanet.radius }}</h2>
      </div>
      <div class="overviewContainer">
        <h4 class="overviewText">average temp</h4>
        <h2 class="overviewText">{{ filteredPlanet.temperature }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      activeClass: "overview"
    }
  },
  props: {
    planets: Array
  },
  computed: {
    filteredPlanet() {
      const activePlanet = this.planets.find(
        x => x.name === this.$route.params.id
      )
      return activePlanet
    }
  },
  methods: {
    toggleDetailView(e) {
      const planetInfo = e.target.name
      this.activeClass = planetInfo
      this.whatClassAmI(planetInfo)
    },
    whatClassAmI(e) {
      if (e === "overview") {
        this.planetOverview = this.filteredPlanet.overview.content
        this.planetImage = this.filteredPlanet.images.planet
        this.planetURL = this.filteredPlanet.overview.source
      }
      if (e === "structure") {
        this.planetOverview = this.filteredPlanet.structure.content
        this.planetImage = this.filteredPlanet.images.internal
        this.planetURL = this.filteredPlanet.structure.source
      }
      if (e === "geology") {
        this.planetOverview = this.filteredPlanet.geology.content
        this.planetImage = this.filteredPlanet.images.planet
        this.planetImageGeology = this.filteredPlanet.images.geology
        this.planetURL = this.filteredPlanet.geology.source
      }
    }
  },
  created() {
    this.planetOverview = this.filteredPlanet.overview.content
    this.planetImage = this.filteredPlanet.images.planet
    this.planetImageGeology = this.filteredPlanet.images.geology
    this.planetURL = this.filteredPlanet.overview.source
  }
}
</script>

<style scoped>
.overviewContainer {
  @apply flex justify-between items-center w-full text-center
  border border-gray-600 py-5 pl-5 m-2 pr-12
  uppercase text-xs font-bold
  md:w-3/12 md:text-left md:flex-col md:justify-start;
}
button {
  @apply text-white uppercase text-xs  font-bold leading-7 py-3 px-4 my-2 border border-gray-600 rounded-sm
  hover:bg-purple-700 transition duration-300
  xs:text-center
  md:text-left;
  background: transparent;
  font-family: var(--fontBody);
}
.btn-active {
  background-color: var(--purple);
}
button span {
  @apply text-gray-400 font-normal pl-3 pr-6;
}
</style>
© 2021 GitHub, Inc. Terms Privacy Security Status Docs Contact GitHub Pricing
API Training Blog About
