<template>
  <form>   
    <template>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Name Campain"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </template>

    <template>
      <v-text-field
        v-model="title"
        :error-messages="titleErrors"
        label="Title"
        required
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
      ></v-text-field>
    </template>

    <template>
      <v-text-field
        v-model="content"
        :error-messages="contentErrors"
        label="Content"
        required
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
      ></v-text-field>
    </template>

      <!-- <v-text-field
      v-model="mail"
      :error-messages="mailErrors"
      label="Mail"
      required
      @input="$v.mail.$touch()"
      @blur="$v.mail.$touch()"
    ></v-text-field> -->

    <template>
      <v-container fluid>
        <v-select
          v-model="selectedListMails"
          :items="listMails"
          label="List Mails"
          multiple
        >

          <template v-slot:prepend-item>
            <v-list-item
              ripple
              @click="toggle"
            >
              <v-list-item-action>
                <v-icon :color="selectedListMails.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
              </v-list-item-action>
                  
              <v-list-item-content>
                <v-list-item-title>Select All</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="mt-2"></v-divider>
          </template>
          
          <template v-slot:append-item>
            <v-divider class="mb-2">
            </v-divider>
            <v-list-item disabled>
              <v-list-item-avatar color="grey lighten-3">
                <!-- <v-icon>mdi-food-apple</v-icon> -->
              </v-list-item-avatar>

              <v-list-item-content v-if="all">
                <v-list-item-title>All list selected</v-list-item-title>
              </v-list-item-content>

              <v-list-item-content v-else-if="some">
                <v-list-item-title>Selected</v-list-item-title>
                <v-list-item-subtitle>{{ selectedListMails.length }} list mails / {{ listMails.length }} list mails</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content v-else>  
                <v-list-item-title>
                  Choose list emails for your campaign
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>           
          </template>
        </v-select>
      </v-container>
    </template>

    <template>
      <p>Pick time and date to start Campain</p>
      <date-picker 
        name="date" 
        v-model="date" 
        :config="options"
        ></date-picker>
      <!-- <p>
        v-model: {{date}}
      </p> -->
    </template>

    <template>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>
    </template>

    <div style="text-align: center">
      <v-btn  @click="create">Create</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </div>
      
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import Vue from 'vue'
  import $ from 'jquery'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
  import VueBootstrapDatetimePicker from 'vue-bootstrap-datetimepicker'
  import '@fortawesome/fontawesome-free/css/fontawesome.css'
  import '@fortawesome/fontawesome-free/css/regular.css'
  import '@fortawesome/fontawesome-free/css/solid.css'

  Vue.component('date-picker', VueBootstrapDatetimePicker)
  $.extend(true, $.fn.datetimepicker.defaults, {
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    }
  })

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      title: { required },
      content: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      content: '',
      title: '',
      date: null,
      options: {
        format: 'YYYY/MM/DD HH:mm',
        useCurrent: false,
        showClear: true,
        showClose: true,
      },
      listMails: [
        'List mails 1',
        'List mails 2',
        'List mails 3',
        'List mails 4',
        'List mails 5',
        
      ],
      selectedListMails: [],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must check and agree to continue!')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name can not empty')
        return errors
      },
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.required && errors.push('Title can not empty')
        return errors
      },
      contentErrors () {
        const errors = []
        if (!this.$v.content.$dirty) return errors
        !this.$v.content.required && errors.push('Content can not empty')
        return errors
      },
      all () { 
        return this.selectedListMails.length === this.listMails.length
      },
      some () {
        return this.selectedListMails.length > 0 && !this.all
      },
      icon () {
        if (this.all) return 'mdi-close-box'
        if (this.some) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },

    methods: {
       toggle () {
        this.$nextTick(() => {
          if (this.all) {
            this.selectedListMails = []
          } else {
            this.selectedListMails = this.listMails.slice()
            }
          })
        },
      create () {
        this.$v.$touch()
        
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.content = ''
        this.selectedListMails= ''
        this.checkbox = false
      },
    },
  }
</script>