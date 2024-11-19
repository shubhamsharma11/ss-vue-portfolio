<template>
  <div>
    <v-app-bar :elevation="0" scroll-behavior="elevate" scroll-threshold="200">
      <v-app-bar-title>
        <span>&lt;{{ title }}/&gt;</span>
      </v-app-bar-title>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = true" class="d-xs-flex d-md-none"></v-app-bar-nav-icon>
      </template>

      <v-spacer></v-spacer>

      <template v-for="(item, i) in menuItems" :key="i">
        <v-btn variant="outlined" :to="item.to" class="d-none d-md-flex px-5 mx-1">
          {{ item.title }}
        </v-btn>
      </template>

      <template v-slot:append>
        <v-btn
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="darkMode"
        ></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list :lines="false" nav>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="item"
          color="primary"
          variant="outlined"
          :to="item.to"
          class="ma-2"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title class="px-5">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { greeting, menuItems } from '../shared/portfolio'

export default {
  name: 'AppBar',
  props: {
    isTheme: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      title: greeting.logo_name,
      drawer: false,
      tab: null,
      menuItems: menuItems,
    }
  },
  methods: {
    darkMode() {
      this.$emit('set-theme')
    },
  },
}
</script>
<style scoped>
span {
  font-family: Agustina, 'Babylonica', cursive;
  font-weight: 500;
  font-size: 25px;
}
</style>
