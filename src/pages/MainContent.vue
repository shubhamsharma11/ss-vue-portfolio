<template>
  <slide-y-transition>
    <splash-screen v-if="loading && settings.isSplash" :is-loading="loading" />
  </slide-y-transition>
  <slide-y-reverse-transition>
    <div v-show="!loading">
      <AppBar :theme="theme" @set-theme="setTheme"></AppBar>

      <v-main id="scroll-target">
        <v-layout>
          <RouterView />
        </v-layout>
      </v-main>

      <app-footer />
      <v-fab
        v-if="settings.isGoTop"
        v-scroll="onScroll"
        v-show="fab"
        icon="mdi-arrow-up"
        size="x-large"
        class="position-fixed me-2"
        location="bottom end"
        app
        appear
        color="primary"
        @click="toTop"
      ></v-fab>
    </div>
  </slide-y-reverse-transition>
</template>

<script>
import { RouterView } from 'vue-router'
import { settings } from '../shared/portfolio'
import AppFooter from '../components/AppFooter.vue'
import SplashScreen from '../components/SplashScreen.vue'
import AppBar from '../components/AppBar.vue'

export default {
  name: 'MainContent',

  components: {
    AppBar,
    SplashScreen,
    RouterView,
    AppFooter,
  },

  data: () => ({
    loading: true,
    fab: false,
    settings: settings,
    theme: 'light',
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.scrollY || e.target.scrollTop || 0
      console.log(top)
      this.fab = top >= 20
    },
    toTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    setTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.$emit('set-theme', this.theme)
    },
  },
}
</script>
