<template>    
    <b-container class="my-5" slot="content">
        <h1 style="text-align: center;">Contact Us</h1>
        <b-card bg-variant="light">
            <b-form @submit="OnSubmit" @reset="OnReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Name:"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.name"
                        type="name"
                        placeholder="Enter name"
                        required
                ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Email Address:"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter Email"
                        required
                ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-3"
                    label="Message"
                    label-for="textarea"
                >
                    <b-form-textarea
                        id="textarea-state"
                        v-model="form.text"
                        :state="form.text.length >= 10"
                        placeholder="Enter at least 10 characters"
                        rows="3"
                    ></b-form-textarea>
                </b-form-group>

            <b-button type="submit" variant="secondary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',

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
        this.form.name = ''
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
    

  }
</script>