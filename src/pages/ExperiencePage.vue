<template>
  <div>
    <v-row align="center" justify="center" class="mx-8 my-2">
      <v-col md="5" cols="12">
        <AboutMeTask :theme="theme" width="100%" />
      </v-col>
      <v-col md="6" offset-md="1" cols="12">
        <h1 class="text-h2 font-weight-bold">
          {{ experience.title }}
        </h1>
        <h2>
          {{ experience.subtitle }}
        </h2>
        <p class="text-body-1 font-weight-regular">
          {{ experience.description }}
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mx-8 my-2">
      <v-expansion-panels variant="popout">
        <v-expansion-panel
          v-for="(expSection, index) in experience.sections"
          :key="index"
          class="my-1"
        >
          <v-expansion-panel-title>
            {{ expSection.title }}
            <template v-slot:actions="{ expanded }">
              <v-icon
                :color="!expanded ? 'error' : 'success'"
                :icon="expanded ? 'mdi-minus' : 'mdi-plus'"
              ></v-icon>
            </template>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-card
              class="ma-2"
              outlined
              v-for="(exp, i) in expSection.experiences"
              :key="i"
              variant="tonal"
            >
              <v-card-title>
                <v-row no-gutters>
                  {{ exp.title }}
                </v-row>
              </v-card-title>

              <v-card-subtitle>
                <v-row no-gutters>
                  <a :href="exp.company_url" style="text-decoration: none">{{ exp.company }}</a>
                  <v-divider class="mx-2" vertical></v-divider>
                  {{ exp.location }}
                  <v-divider class="mx-2" vertical></v-divider>
                  {{ exp.duration }}
                </v-row>
              </v-card-subtitle>

              <v-card-text>
                {{ exp.description }}
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import { experience } from '../shared/portfolio'
import AboutMeTask from '@/svg/AboutMeTask.vue'
import { chosenTheme } from '@/shared/theme'

export default {
  components: {
    AboutMeTask,
  },

  data: () => ({
    theme: chosenTheme,
    experience: experience,
  }),
}
</script>

<style></style>
