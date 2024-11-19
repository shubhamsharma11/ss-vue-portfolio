<template>
  <v-responsive>
    <splash-screen v-if="loading && settings.isSplash" />
    <v-app :theme="theme">
      <AppBar :theme="theme" @set-theme="SetTheme"></AppBar>

      <v-main>
        <RouterView />
      </v-main>

      <app-footer />
    </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import SplashScreen from './components/SplashScreen.vue'
import AppBar from './components/AppBar.vue'
import { settings } from './shared/portfolio'

const theme = ref('light')

function SetTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
