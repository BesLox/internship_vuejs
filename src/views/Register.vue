<template>
  <div id="Register">
    <form>

      <v-text-field
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

       <v-text-field
        v-model="cfpassword"
        type="password"
        :error-messages="cfpasswordErrors"
        :counter="10"
        label="Confirm Password"
        required
        @input="$v.cfpassword.$touch()"
        @blur="$v.cfpassword.$touch()"
      ></v-text-field>

      <v-btn 
      class="mr-4 btn-submit" 
      @click.prevent="submit"
      color="success"
      >
      Register
      </v-btn>


    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators'

  export default {
    name: 'Register',
    mixins: [validationMixin],

    validations: {
      password: { required, maxLength: maxLength(10) },
      cfpassword:  { required, maxLength: maxLength(10), sameAsPassword: sameAs('password') },
      email: { required, email },
    },

    data: () => ({
      password: '',
      email: '',
      cfpassword: ''
    }),

    computed: {
        cfpasswordErrors () {
            const errors = []
            if (!this.$v.cfpassword.$dirty) return errors
            !this.$v.cfpassword.maxLength && errors.push('Confirm password must be at most 10 characters long')
            !this.$v.cfpassword.required && errors.push('Confirm password is required.')
            !this.$v.cfpassword.sameAsPassword && errors.push('Passwords must be identical.')
            return errors
        },
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

      },
    }
  }
</script>

<style scoped>
  #Register {
    position: absolute;
    top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		width:400px;
		padding:40px;
  }
  .btn-submit {
    margin: 10px 0;
  }
</style>