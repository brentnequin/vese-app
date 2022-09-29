<template>
    <section class="section">
        {{ $auth.user }}
    </section>
</template>

<script>
export default {
    middleware: 'auth',
    mounted() {
        console.log(this.$route)
    }
}
</script>