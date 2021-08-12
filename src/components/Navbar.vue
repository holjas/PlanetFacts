<template>
  <nav class="border-b border-gray-600">
    <div
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
      <!-- PLANETS NAME LOGO -->
      <div class="lg:w-1/4 xs:w-full xs:text-center xs:pb-3">
        <router-link :to="{ name: 'Home' }">
          <h2>the planets</h2>
        </router-link>
      </div>
      <!-- LIST OF PLANETS -->
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
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    planets: Array,
  },
};
</script>

<style scoped>
a.router-link-active {
  border-bottom: 4px var(--purple) solid;
}
</style>