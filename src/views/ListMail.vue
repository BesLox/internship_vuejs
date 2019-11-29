<template>
    <v-container>
    <v-row>
        <v-col cols="6">
            <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
            ></v-data-table>
        </v-col>
        <v-col cols="6">
            <v-form>

                    <v-row>
                        <v-col cols="12">
                            Add New Email
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Email"
                            v-model="email"
                            :rules="emailRules"
                            outlined
                            clearable
                            ></v-text-field>
                        </v-col>
    
                        <v-col>
                            <v-file-input
                            v-model="files"
                            color="deep-purple accent-4"
                            counter
                            label="File input"
                            multiple
                            placeholder="Select your files"
                            prepend-icon="mdi-paperclip"
                            outlined
                            :show-size="1000"
                            >
                            <template v-slot:selection="{ index, text }">
                            <v-chip
                                v-if="index < 2"
                                color="deep-purple accent-4"
                                dark
                                label
                                small
                            >
                                {{ text }}
                            </v-chip>

                            <span
                                v-else-if="index === 2"
                                class="overline grey--text text--darken-3 mx-2"
                            >
                                +{{ files.length - 2 }} File(s)
                            </span>
                            </template>
                        </v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-btn  color="error">Add New</v-btn>
                        </v-col>
                    </v-row>
            </v-form>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
  export default {
    name: "ListEmail",
    data () {
      return {
        headers: [
        {
            text: 'STT',
            align: 'left',
            sortable: false,
            value: 'STT',
        },
          { text: 'Email', value: 'Email' },
        ],
        desserts: [
          {
            STT: '1',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '2',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '3',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '4',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '5',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '6',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '7',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '1',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '8',
            Email: "phongdo@gmail.com"
          },
          {
            STT: '9',
            Email: "phongdo@gmail.com"
          },
        ],
        email:"",
        files: [],
        emailRules:[
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
  }
</script>