<template>
  <div id="Login">
    <v-alert
      border="right"
      colored-border
      type="error"
      elevation="2"
      v-if="errors"
    >
     {{errors}}
    </v-alert>
    <form>

      <v-text-field
        autocomplete="off"
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        :error-messages="passwordErrors"
        :counter="10"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-btn 
      class="mr-4 btn-submit" 
      @click.prevent="submit"
      color="success"
      >
        Login
      </v-btn>


    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  // import {HTTP} from '../Services/Api'
  // import axios from 'axios'

  export default {
    name: 'Login',
    mixins: [validationMixin],

    validations: {
      password: { required, maxLength: maxLength(10) },
      email: { required, email },
    },

    data: () => ({
      password: '',
      email: '',
      errors: false
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('Password must be at most 10 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch();
        this.$router.push({
          name: 'Home'
        })
        // HTTP.post('/login', {
        //   user_email: this.email,
        //   password  : this.password
        // }).then(res => {
        //   localStorage.setItem("token", res.data);
        //   this.$router.push({
        //     name: 'Home'
        //   })
        //   // console.log(res);
          
        // })
        // .catch(err => {
        //   if(err.response.status === 404) {
        //     this.errors="Wrong email or password";
        //   }
        // })
      },
    }
  }
</script>

<style scoped>
  #Login {
    position: absolute;
    top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		width:400px;
		padding:40px;
  }
  .btn-submit {
    margin: 10px 0;
    text-transform: uppercase;
  }
</style>