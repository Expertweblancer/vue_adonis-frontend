<template>
    <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense dark color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ProjectVizion</v-toolbar-title>
      <v-item-group>
        <v-item>
            <v-btn text>
                <v-icon class="pr-2">mdi-file-tree</v-icon>
                    Projects
            </v-btn>
        </v-item>
      </v-item-group>
      <v-spacer></v-spacer>

      <v-btn to="/login" text>
        <v-icon class="pr-2">mdi-fingerprint</v-icon>
        Login

      </v-btn>

      <v-btn text>
        <v-icon class="pr-2">mdi-location-exit</v-icon>
        Sign Out
      </v-btn>

      <v-btn text>
        <v-icon class="pr-2">mdi-account</v-icon>
        My Account
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
    data(){
        return{
            login: '/login'
        }
    }
}
</script>
<style>
    button{
        margin-left: 5px;
    }
</style>
