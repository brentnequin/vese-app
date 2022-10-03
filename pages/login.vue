<template>    
    <b-container class="my-5" slot="content">
        <h1 style="text-align: center;">VESE Log In</h1>
        <b-card bg-variant="light">
            <b-form @submit="OnSubmit" @reset="OnReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Email Address:"
                    label-for="input-1"
                    description="We will share your email with everyone we know :)"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Password:"
                    label-for="input-2"
                    description="We will share your password with everyone we know :)"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.password"
                        type="password"
                        placeholder="Enter Password"
                        required
                ></b-form-input>
                </b-form-group>
            <b-button type="submit" variant="secondary">Log In</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
        <section class="section">
            <b-button icon="google">
             Sign in with Google
            </b-button>
        </section>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      OnSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      OnReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
    

  }
</script>