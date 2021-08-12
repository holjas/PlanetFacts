<template>
  <nav class="flex items-center p-5 uppercase border-b border-gray-600 wrapper">
    <div class="w-1/4">
      <router-link :to="{ name: 'Home' }">
        <h2>the planets</h2>
      </router-link>
    </div>

    <ul class="w-screen text-right">
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
h1,
li {
  display: inline;
}
h1 {
  font-family: var(--fontHeadline);
}
</style>