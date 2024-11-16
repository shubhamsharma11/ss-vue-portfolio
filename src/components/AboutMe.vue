<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="mb-n16"
    >
      <h1 class="text-h2 font-weight-bold">
        About Me
      </h1>
    </v-row>
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
        <p class="text-body-1 font-weight-bold">
          WHO AM I ?
        </p>
        <p class="text-body-1 font-weight-regular">
          {{ greeting.description }}
        </p>

        <v-card flat>
          <v-list
            disabled            
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.value"></v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AboutMeTask from "@/svg/AboutMeTask.vue";

  export default {
    name: 'AboutMe',

    components: {
      AboutMeTask,
    },

    props: {
      greeting: {
        type: Object,
      },
      theme: {
        type: Object,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-phone-outline',
          title: 'Phone',
          value: '+91 9098727192',
        },
        {
          icon: 'mdi-email-outline',
          title: 'Email',
          value: 'ssharma0834@gmail.com',
        },
        {
          icon: 'mdi-map-marker-outline',
          title: 'Location',
          value: 'Madhya Pradesh, India',
        },
      ],
    }),
  }
</script>
