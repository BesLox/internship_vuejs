<template>
  <v-app>
    <v-content>
      <ToolBar></ToolBar>
      <Drawer></Drawer>
      <Views></Views>
    </v-content>
  </v-app>  
</template>

<script>
import Drawer from './components/drawers';
import ToolBar from './components/ToolBar';
import Views from './components/Views';

export default {
  name: 'App',
  components: {
    Drawer,
    ToolBar,
    Views
  },
  data: () => ({
    //
  }),
};
</script>
