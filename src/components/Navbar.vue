<template>
  <!-- <nav class="border-b border-gray-600"> -->
  <!-- <div
      class="
        flex
        xs:flex-wrap xs:flex-col
        lg:flex-nowrap lg:flex-row
        items-center
        p-5
        uppercase
        wrapper
      "
    >
      
      <div class="lg:w-1/4 xs:w-full xs:text-center xs:pb-3">
        <router-link :to="{ name: 'Home' }">
          <h2>the planets</h2>
        </router-link>
      </div>
      
      <div class="lg:w-screen">
        <ul class="text-right">
          <li
            v-for="planet in planets"
            :key="planet.name"
            class="text-xs font-bold px-5 text-gray-400"
          >
            <router-link
              :to="{
                name: 'PlanetDetails',
                params: { id: planet.name },
              }"
            >
              {{ planet.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div> 
    </nav>-->
  <!--  -->
  <!--  -->
  <nav
    class="
      flex
      xs:flex-wrap xs:flex-row
      xs:w-full
      xs:justify-between
      md:flex-col
      lg:flex-nowrap lg:flex-row
      items-center
      p-5
      border-b border-gray-600
    "
  >
    <div class="">
      <router-link :to="{ name: 'Home' }">
        <h2>the planets</h2>
      </router-link>
    </div>

    <div class="block md:hidden">
      <button @click="toggle">
        <img src="../assets/icon-hamburger.svg" alt="menu toggle" />
      </button>
    </div>
    <div
      :class="hamburgerOpen ? 'block' : 'hidden'"
      class="w-full md:flex md:items-center md:w-auto md:mt-3 lg:mt-0"
    >
      <div class="">
        <ul class="flex flex-col mt-3 md:flex-row md:items-end lg:mt-0">
          <li
            v-for="planet in planets"
            :key="planet.name"
            class="
              text-xs
              font-bold
              px-5
              text-gray-400
              xs:mt-4
              hover:text-gray-300
              transition
              duration-300
            "
          >
            <router-link
              :to="{
                name: 'PlanetDetails',
                params: { id: planet.name },
              }"
            >
              {{ planet.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  props: {
    planets: Array,
  },
  data() {
    return {
      hamburgerOpen: false,
    };
  },
  methods: {
    toggle() {
      this.hamburgerOpen = !this.hamburgerOpen;
    },
  },
};
</script>

<style scoped>
a.router-link-active {
  border-bottom: 2px var(--purple) solid;
}
</style>