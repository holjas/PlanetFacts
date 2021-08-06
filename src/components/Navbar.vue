<template>
  <nav>
    <h1>the planets</h1>
    <ul>
      <li v-for="planet in planets" :key="planet.name">
        <router-link :to="planet.name">{{ planet.name }}</router-link>
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
  mounted() {},
};
</script>

<style scoped>
h1,
li {
  display: inline;
  padding: 10px;
}
</style>