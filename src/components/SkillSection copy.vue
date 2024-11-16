<template>
  <div>
    <div
      v-for="(skill, i) in skills.data"
      :key="i"
    >
      <v-row
        align="center"
        justify="center"
        class="ma-5"
      >
        <h1 class="text-h4 font-weight-bold" style="{ color: theme.text }">
          {{ skill.title }}
        </h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="ma-5"
      >
        <span
          v-for="(tool, i) in skill.tools"
          :key="i"
          class="pa-2"
        >
          <font-icon
            :alt="tool.skillName"
            :icon="tool.icon"
            :style="tool.style"
          />
        </span>
      </v-row>
      <v-row
        class="ma-5"
      >
        <div
          v-for="(skillSentence, i) in skill.skills"
          :key="i"
        >
          <p
            class="text-body-1 font-weight-regular"
            style="{ color: theme.secondaryText }"
          >
            {{ skillSentence }}
          </p>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
  import { skills } from "../shared/portfolio";

  export default {
    name: 'SkillSection',

    props: {
      theme: {
        type: Object,
      },
    },

    data: () => ({    
        skills: skills, //.data[0].tools
      }),
    }
</script>
