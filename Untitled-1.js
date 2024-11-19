<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar title="App bar">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>





// ================= app bar =================


<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span>&lt;{{ title }}/&gt;</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-for="(item, i) in menuItems" :key="i">
        <v-btn text plain :to="item.to" class="d-none d-md-flex px-5">
          {{ item.title }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list :lines="false" density="compact" nav>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :value="item" color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>
            <v-btn text plain :to="item.to" class="d-none d-md-flex px-5">
              {{ item.title }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { greeting, menuItems } from '../shared/portfolio'

export default {
  name: 'AppBar',
  props: {
    isTheme: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      title: greeting.logo_name,
      drawer: false,
      tab: null,
      menuItems: menuItems,
    }
  },
  methods: {
    darkMode() {
      //this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style scoped>
span {
  font-family: Agustina, 'Babylonica', cursive;
  font-weight: 500;
  font-size: 25px;
}
</style>






// tabs ======================


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
