<template>
  <v-theme-provider root>
    <splash-screen v-if="loading && settings.isSplash" />
    <v-app app>
      <app-bar :isTheme="settings.isTheme" />
      <v-main>
        <router-view />
        <v-fab-transition>
          <v-btn
            v-if="settings.isGoTop"
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-main>
      <app-footer />
    </v-app>
  </v-theme-provider>
</template>

<script>
import SplashScreen from './components/SplashScreen.vue'
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
import { settings } from './shared/portfolio'

export default {
  name: 'App',

  components: {
    SplashScreen,
    AppBar,
    AppFooter,
  },

  data: () => ({
    loading: true,
    fab: false,
    settings: settings,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 4000)
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
