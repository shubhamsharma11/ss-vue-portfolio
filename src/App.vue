<template>
  <v-responsive>
    <v-app :theme="theme">
      <MainContent @set-theme="SetTheme" />
    </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'
import MainContent from './pages/MainContent.vue'

const theme = ref('light')

function SetTheme(newTheme) {
  theme.value = newTheme
}
</script>
