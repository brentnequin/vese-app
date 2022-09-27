<template>
    <div v-if="$auth.loggedIn">
        <p>Logged In As: {{ $auth.user.email }}</p>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
}
</script>