<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center" center-active>
      <v-tab v-for="(skill, index) in skills.data" :key="skill.title" :value="index">
        {{ skill.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="(skill, index) in skills.data" :key="skill.title" :value="index">
        <v-card flat>
          <v-card-text>
            <v-row align="center" justify="center" class="ma-5">
              <span v-for="(tool, i) in skill.tools" :key="i" class="pa-2">
                <font-icon :alt="tool.skillName" :icon="tool.icon" :style="tool.style" />
              </span>
            </v-row>
            <v-row class="ma-5">
              <div v-for="(skillSentence, i) in skill.skills" :key="i">
                <p class="text-body-1 font-weight-regular">
                  {{ skillSentence }}
                </p>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
import { skills } from '../shared/portfolio'

export default {
  name: 'SkillSection',

  props: {
    theme: {
      type: Object,
    },
  },

  data: () => ({
    skills: skills, //.data[0].tools
    tab: null,
  }),
}
</script>
