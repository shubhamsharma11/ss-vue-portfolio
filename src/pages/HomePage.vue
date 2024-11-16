<template>
  <v-container fluid>
    <v-container class="mt-5">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          md="6"
          cols="12"
        >
          <h3 class="text-h1 font-weight-bold">
            Hi! I'm {{ greeting.nickname }}
          </h3>
          <h4 class="text-h6 font-weight-regular">
            {{ greeting.subTitle }}
          </h4>
          <SocialMedia />
        </v-col>
        <v-col
          md="6"
          cols="12"
        >
          <FeelingProud
            :theme="theme"
            width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
    <AboutMe
      id="about"
      :greeting="greeting"
      :theme="theme"
    />
    <MySkills
      id="skills"
      :greeting="greeting"
      :theme="theme"
    />
  </v-container>
</template>

<script>
  import "@/assets/css/Greeting.css";
  import FeelingProud from "@/svg/FeelingProud.vue";
  import SocialMedia from "@/components/SocialMedia.vue";
  import AboutMe from '@/components/AboutMe.vue';
  import MySkills from '@/components/MySkills.vue';
  import { chosenTheme } from "@/shared/theme";
  import { greeting } from "@/shared/portfolio";

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
