<template>
  <v-container>
    <v-row align="center" justify="center" class="mb-n16">
      <h1 class="text-h2 font-weight-bold">About Me</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-col md="5" cols="12">
        <AboutMeTask :theme="theme" width="100%" />
      </v-col>
      <v-col md="6" offset-md="1" cols="12">
        <p class="text-body-1 font-weight-bold">WHO AM I ?</p>
        <p class="text-body-1 font-weight-regular">
          {{ greeting.description }}
        </p>

        <VCodeBlock
          :code="items"
          highlightjs
          label="Hello World"
          lang="javascript"
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
  },

  data: () => ({
    items: `{
      {
        icon: 'mdi-phone-outline',
        title: 'Phone',
        value: '+91 9098727192',
      },
      {
        icon: 'mdi-email-outline',
        title: 'Email',
        value: 'ssharma0834@gmail.com',
      },
      {
        icon: 'mdi-map-marker-outline',
        title: 'Location',
        value: 'Madhya Pradesh, India',
      },
    }`,
  }),
}
</script>
