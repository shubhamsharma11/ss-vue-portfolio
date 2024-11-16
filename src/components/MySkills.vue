<template>
  <v-container>
    <v-card outlined>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2">
          Skills
        </h1>
      </v-card-title>
    
      <skill-section :theme="theme"></skill-section>
    </v-card>
  </v-container>
</template>

<script>
  import { skills } from "../shared/portfolio";
  import SkillSection from './SkillSection.vue';

  export default {
    name: 'MySkill',

    components: {
      SkillSection,
    },

    props:
    {
      greeting: {
        type: Object,
      },
      theme: {
        type: Object,
      },
    },

    data: () => ({
      skills: skills.data, //.data[0].tools
    }),
  }
</script>
