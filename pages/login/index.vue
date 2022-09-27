<template>
    <b-container class="my-5">
        <h1>Login</h1>
        <div class="d-flex justify-content-center">
            <b-button @click="loginWithGoogle()">Log In With Google</b-button>
        </div>
    </b-container>
</template>

<script>
export default {
    methods: {
        loginWithGoogle() {
            this.$auth.loginWith("google")
        }
    },
    mounted() {
        console.log(this.$auth.user)
    }
}
</script>