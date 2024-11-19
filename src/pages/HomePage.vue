<template>
  <div>
    <v-row align="center" justify="center" class="mx-8 my-2">
      <v-col md="6" cols="12">
        <h3 class="text-h4 text-md-h3 text-lg-h1 font-weight-bold">
          Hi! I'm {{ greeting.nickname }}
        </h3>
        <h4 class="text-md-subtitle-1 text-subtitle-2 font-weight-regular">
          {{ greeting.subTitle }}
        </h4>
        <SocialMedia />
      </v-col>
      <v-col md="6" cols="12">
        <FeelingProud :theme="theme" width="100%" />
      </v-col>
    </v-row>
    <AboutMe id="about" :greeting="greeting" :theme="theme" />
    <MySkills id="skills" :greeting="greeting" :theme="theme" />
  </div>
</template>

<script>
import '@/assets/css/Greeting.css'
import FeelingProud from '@/svg/FeelingProud.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import AboutMe from '@/components/AboutMe.vue'
import MySkills from '@/components/MySkills.vue'
import { chosenTheme } from '@/shared/theme'
import { greeting } from '@/shared/portfolio'

export default {
  name: 'HomePage',

  components: {
    FeelingProud,
    SocialMedia,
    AboutMe,
    MySkills,
  },

  data: () => ({
    theme: chosenTheme,
    greeting: greeting,
  }),
}
</script>
