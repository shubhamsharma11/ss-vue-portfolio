<template>
  <div>
    <v-container>      
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          md="5"
          cols="12"
        >
          <AboutMeTask
            :theme="theme"
            width="100%"
          />
        </v-col>
        <v-col
          md="6"
          offset-md="1"
          cols="12"
        >
          <v-row
            align="center"
            justify="center"
          >
            <h1 class="text-h2 font-weight-bold">
              {{ experience.title }}
            </h1> 
            <h2>
              {{ experience.subtitle }}
            </h2>
            <p class="text-body-1 font-weight-regular">
              {{ experience.description }}
            </p>
          </v-row>
        </v-col>
      </v-row>
      <v-expansion-panels
        v-for="(expSection, index) in experience.sections"
        :key="index"
      >
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            <template v-slot:default="{ open }">
              {{ expSection.title }}
              <div class="d-flex flex-row-reverse">                  
                <template v-if="open">
                  <v-icon color="error">
                    mdi-minus
                  </v-icon>
                </template>
                <template v-else>
                  <v-icon color="success">
                    mdi-plus
                  </v-icon>
                </template>
              </div>
            </template>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-card
              class="ma-2"
              outlined
              v-for="(exp, i) in expSection.experiences"
              :key="i"
            >
              <v-row>
                <v-col md="4" cols="7">
                  <v-card-title>
                    {{ exp.title }}
                  </v-card-title>
                </v-col>
                <v-col md="2" cols="5" offset-md="6" class="pt-4">
                  <v-card-subtitle>
                    {{ exp.duration }}
                  </v-card-subtitle>
                </v-col>
              </v-row>

              <v-row class="pa-0">
                <v-col class="pt-0" md="4" cols="7">
                  <v-card-subtitle>
                    <a :href="exp.company_url" style="text-decoration: none;">{{ exp.company }}</a>
                  </v-card-subtitle>
                </v-col>
                <v-col class="pt-0" md="2" cols="5" offset-md="6">
                  <v-card-subtitle>
                    {{ exp.location }}
                  </v-card-subtitle>
                </v-col>
              </v-row>

              <v-card-text>
                {{ exp.description }}
              </v-card-text>
            </v-card>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { experience } from "../shared/portfolio";
import AboutMeTask from "@/svg/AboutMeTask.vue";
import { chosenTheme } from "@/shared/theme";

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

<style>

</style>