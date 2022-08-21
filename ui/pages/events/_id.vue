<template>
    <page>
        <b-container class="my-5" slot="content">
            <b-row>
                <b-col md="auto" lg="5" class="d-flex justify-content-center mb-5">
                    <b-img
                        src="https://cdn.vox-cdn.com/thumbor/jW1i6Uqp0JwSMvDFHmF2xWmJU6g=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9186447/lou_malnati_s.0.jpg"
                        alt="placeholder" class="mr-3" fluid>
                    </b-img>
                </b-col>
                <b-col>
                    <h1>{{ event.title }}</h1>
                    <p class="text-muted">{{ datetimeFormatted(event.time_start) }}</p>
                    <p>{{ event.description}}</p>
                    <div class="d-flex justify-content-center mt-5">
                        <b-button v-for="(link, index) in event.links" v-bind:key="index" :to="link.to" class="mx-3">{{ link.name }}</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </page>
</template>

<script>
export default {

    data() {
        return {
            event: {}
        }
    },

    mounted() {
        this.getEvent(this.$route.params.id)
        console.log(this.$route.params.id)
    },
    
    methods: {
        async getEvent(id) {
            let res = await this.$store.dispatch("getEvent", {id: id});
            this.event = res.data;
        },
        datetimeFormatted(datetimeString) {
            if (!datetimeString) return ""
            const datetime = new Date(datetimeString)
            let time = datetime.toLocaleTimeString('en-us', { hour: '2-digit', minute:'2-digit' })
            let date = datetime.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
            return [time, " - ", date].join('')
        }
    }
}
</script>