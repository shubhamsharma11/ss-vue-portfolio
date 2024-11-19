<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span>&lt;{{ title }}/&gt;</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-for="(item, i) in menuItems" :key="i">
        <v-btn text plain :to="item.to" class="d-none d-md-flex px-5">
          {{ item.title }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list :lines="false" density="compact" nav>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :value="item" color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>
            <v-btn text plain :to="item.to" class="d-none d-md-flex px-5">
              {{ item.title }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
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
      //this.$vuetify.theme.dark = !this.$vuetify.theme.dark
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
