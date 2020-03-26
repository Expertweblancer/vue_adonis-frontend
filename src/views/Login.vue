<template>
    <v-layout text-right class="login"> 
        <v-flex class="xs6 offset-xs3 login_form" wrap  >
            <v-text-field prepend-icon="mdi-account-box" label="Email" placeholder="Email">
                 
            </v-text-field>
            <v-text-field label="Password" prepend-icon="mdi-lock-question" placeholder="Password">
            </v-text-field>

            <v-btn depressed large color="primary" class="login_btn">
                <v-icon class="pr-2">mdi-account-circle</v-icon>
                Login
            </v-btn>
            <v-btn depressed large color="primary" to="register">
                <v-icon class="pr-2">mdi-account-plus</v-icon>
                Register
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
      name: 'Login',
}
</script>
<style >

.login{
    margin-top:5%;
}
.login_form{
    padding:3%;
    box-shadow: 2px 1px 2px 2px rgb(23, 23, 24);
    height: 100%;
}
.login_btn{
    margin-right:10px;
}
</style>