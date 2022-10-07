<template>
    <div v-if="$auth.loggedIn">
        <p>Logged In As: {{ $auth.user.email }}</p>
        <!-- using $event special variable -->
        <button @click="warn('An Error Ocurred.', $event)">
        Log Out
        </button>     
    </div>
</template>

<script>
export default {
    middleware: 'auth',


    methods: {
  warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}

}


</script>