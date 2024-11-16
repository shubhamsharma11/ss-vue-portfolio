<template>
  <v-card>
    <v-tabs v-model="tab" dark centered>
      <v-tab v-for="skill in skills.data" :key="skill.title">
        {{ skill.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="skill in skills.data" :key="skill.title">
        <v-card flat>
          <v-card-text>
            <v-row align="center" justify="center" class="ma-5">
              <span v-for="(tool, i) in skill.tools" :key="i" class="pa-2">
                <font-icon :alt="tool.skillName" :icon="tool.icon" :style="tool.style" />
              </span>
            </v-row>
            <v-row class="ma-5">
              <div v-for="(skillSentence, i) in skill.skills" :key="i">
                <p
                  class="text-body-1 font-weight-regular"
                  style="
                     {
                      color: theme.secondaryText;
                    }
                  "
                >
                  {{ skillSentence }}
                </p>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { skills } from "../shared/portfolio";

export default {
  name: "SkillSection",

  props: {
    theme: {
      type: Object,
    },
  },

  data: () => ({
    skills: skills, //.data[0].tools
    tab: null,
  }),
};
</script>
