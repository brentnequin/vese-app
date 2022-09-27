<template>
  <div>
    <TheHeader />
    <UserBar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  mounted() {
        console.log(this.$auth.user)
    }
}
</script>