<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="mt-5"
    >
      <h1 class="text-h2 font-weight-bold">
        {{ contact.contactSection.title }}
      </h1>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        md="6"
        cols="12"
      >
        <v-img
          src="../../public/images/contact.svg"
        ></v-img>
      </v-col>
      <v-col
        md="5"
        offset-md="1"
        cols="12"
      >
        <p class="text-body-1 font-weight-regular">
          {{ contact.contactSection.description }}
        </p>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="name"
            outlined
            :counter="20"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            outlined
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="message"
            outlined
            label="Message"
            placeholder="Type your message here..."
            required
          ></v-textarea>

          <p class="text-caption font-weight-light font-italic"> {{  contact.contactSection.note }} </p>

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="submitForm"
          >
            Send Message
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { contactPageData } from "../shared/portfolio";

export default {
  data() {
    return {
      contact: contactPageData,
      name: '',
      email: '',
      message: '',
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    submitForm() {
      if(this.validate())
      {
        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdWEMAnahCcSj08FVyfk4pv3eSsNxaYGmwRnDqOvk6JI9d2qg/formResponse';
        const formData = new FormData();
        formData.append('entry.2005620554', this.name); // entry.2005620554: Name
        formData.append('entry.1045781291', this.email); // entry.1045781291: Email
        formData.append('entry.839337160', this.message); // entry.839337160: Comments

        fetch(formUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Required to avoid CORS issue
        })
          .then(() => {
            alert('Form submitted successfully!');
            this.reset();
          })
          .catch(error => {
            console.error(error);
            alert('Failed to submit form');
          });
      }
      else
      {
        alert('Validation Failed !!!');
        this.reset();
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    validate () {
      return this.$refs.form.validate()
    }
  },
};
</script>
