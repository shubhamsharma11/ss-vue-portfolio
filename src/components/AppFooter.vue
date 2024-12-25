<template>
  <v-footer app class="d-flex flex-column">
    <v-row justify="center" no-gutters>
      <h2 class="white--text">You can find me at</h2>
    </v-row>
    <SocialMedia :isDownload="false" class="pb-4" />
    <v-row justify="center" no-gutters>
      <strong>Made with ❤️ by Shubham Sharma</strong>
    </v-row>
  </v-footer>
</template>
<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'AppFooter',

  components: {
    SocialMedia,
  },
}
</script>
