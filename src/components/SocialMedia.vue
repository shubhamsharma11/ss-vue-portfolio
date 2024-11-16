<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12" class="mt-5">
      <v-btn
        v-for="(s, i) in social"
        :key="i"
        fab
        small
        class="mr-3"
        :color="s.color"
        dark
        :href="s.to"
      >
        <v-icon v-text="s.icon" />
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn x-large class="mt-5" color="primary">
        <v-icon> mdi-download </v-icon>
        Download Resume
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SocialMedia",

  data: () => ({
    social: [
      {
        color: "#0976B4",
        to: "https://www.linkedin.com/in/shubhamsharma17/",
        icon: "mdi-linkedin",
      },
      {
        color: "#333333",
        to: "https://github.com/shubhamsharma11",
        icon: "mdi-github",
      },
    ],
  }),
};
</script>

<style></style>
