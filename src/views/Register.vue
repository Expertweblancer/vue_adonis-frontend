<template>
    <v-layout class="register" text-right>
        <v-flex class="md6 sm-10 offset-md3 offset-sm-2" wrap>
            <v-text-field label="Email" type="email" placeholder="Email" prepend-icon="mdi-account-box">                
            </v-text-field>
            <v-text-field label="Password" type="password" placeholder="Password" prepend-icon="mdi-lock-question">                
            </v-text-field>
            <v-text-field label="Conform Password" type="password" placeholder="Confirm password" prepend-icon="mdi-account-box">                
            </v-text-field>
            <v-btn depressed color="primary" class="register_btn">
                <v-icon class="pr-2">mdi-account-plus</v-icon>
                Register
            </v-btn>
            <v-btn depressed color="primary" to="/login">
                <v-icon class="pr-2">mdi-account</v-icon>
                I have already account
            </v-btn>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: 'Register',
}
</script>
<style>
    .register{
        margin-top: 5%;
    }
    .register_btn{
        margin-right:10px;
    }
</style>