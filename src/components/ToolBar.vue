<template>
    <v-toolbar id="core-toolbar" flat prominent style="background: #eee; height:80px!important">
        <div class="v-toolbar-title">
            <v-toolbar-title class="tertiary--text font-weight-light" style="line-height:80px!important;">
                {{ title }}
            </v-toolbar-title>
        </div>

        <v-spacer />
    </v-toolbar>
</template>

<script>
    export default {
        name: "ToolBar",
          data: () => ({
            title: null,
        }),

        watch: {
            '$route' (val) {
            this.title = val.name
            }
        },
    }
</script>