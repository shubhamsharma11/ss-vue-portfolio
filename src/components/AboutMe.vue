<template>
  <v-container>
    <v-row align="center" justify="center" class="mb-n8">
      <h1 class="text-h2 font-weight-bold">About Me</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-col md="5" cols="12">
        <AboutMeTask :theme="theme" width="100%" />
      </v-col>
      <v-col md="6" offset-md="1" cols="12">
        <p class="text-body-1 font-weight-bold">WHO AM I ?</p>
        <p class="text-body-1 font-weight-regular mb-4">
          {{ greeting.description }}
        </p>

        <VCodeBlock
          :code="aboutItems"
          highlightjs
          :browser-window="true"
          lang="javascript"
          :copy-button="false"
          theme="neon-bunny"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutMeTask from '@/svg/AboutMeTask.vue'
import VCodeBlock from '@wdns/vue-code-block'

export default {
  name: 'AboutMe',

  components: {
    AboutMeTask,
    VCodeBlock,
  },

  props: {
    greeting: {
      type: Object,
    },
    theme: {
      type: Object,
    },
    aboutItems: {
      type: String,
    },
  },
}
</script>
