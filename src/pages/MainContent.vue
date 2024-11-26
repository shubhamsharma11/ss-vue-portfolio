<template>
  <slide-y-transition>
    <splash-screen v-if="loading && settings.isSplash" :is-loading="loading" />
  </slide-y-transition>
  <slide-y-reverse-transition>
    <div v-show="!loading">
      <AppBar :theme="theme" @set-theme="setTheme"></AppBar>

      <v-main>
        <v-layout>
          <RouterView />
        </v-layout>
      </v-main>

      <app-footer />
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
      const top = e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    setTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.$emit('set-theme', this.theme)
    },
  },
}
</script>
