<template>
      <v-data-table
      :headers="headers"
      :items="campaigns"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      :sort-by="['name']"
      :sort-desc="[false]"
      multi-sort
      class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>List Campaigns</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length">
            <a href="/campaign/edit">Edit</a> - 
            <a href="#" @click.prevent="">Delete</a>
          </td>
        </template>
      </v-data-table>
</template>

<script>
  export default {
      name: "campaign",
    data () {
      return {
        expanded: [],
        singleExpand: false,
        headers: [
          {
            text: 'Name Campaign',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Title', value: 'title'},
          { text: 'Date Create', value: 'dateCreate' },
          { text: 'Date', value: 'date' },
          { text: 'Status', value: 'status'}
        ],
        campaigns: [
          {
            name: 'Campaign 2',
            title: 'Campaign',
            dateCreate: '11/11/2019',
            date: '11/11/2019',
            status: 'Sent'
          },
          {
            name: 'Campaign 3',
            title: 'Campaign',
            dateCreate: '12/11/2019',
            date: '12/12/2019',
            status: 'Unsend'
          },
          {
            name: 'Campaign 1',
            dateCreate: '15/11/2019',
            title: 'Campaign',
            date: '20/11/2019',
            status: 'Unsend'
          },
          {
            name: 'Campaign 4',
            title: 'Campaign',
            dateCreate: '20/11/2019',
            date: '21/11/2019',
            status: 'Unsend'
          },
          {
            name: 'Campaign 5',
            title: 'Campaign',
            dateCreate: '30/11/2019',
            date: '11/11/2020',
            status: 'Unsend'
          },
          {
            name: 'Campaign 6',
            title: 'Campaign',
            dateCreate: '1/11/2019',
            date: '11/11/2020',
            status: 'Unsend'
          }
        ],
      }
    },

    methods: {
      // delete (id) {
      // //if (confirm('Are you sure you want to delete this campaign?')) {
      //   // if we are editing a post we deleted, remove it from the form
      //     if (this.campaigns.name === id) {
      //       this.campaigns = {}
      //     }
      // //}
      // }
    },
  }
</script>