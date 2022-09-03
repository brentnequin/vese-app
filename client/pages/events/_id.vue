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
                    <p class="text-muted">{{ event.starttime }} - {{ event.endtime }} | {{ event.date }}</p>
                    <p>{{ event.fulldescription}}</p>
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
    props: ['id'],
    data() {
        return {
            event: {
                title: "It's Pizza Time",
                date: "Sep 19, 2022",
                starttime: "5:00pm",
                endtime: "6:00pm",
                excerpt: "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
                fulldescription: "Lou Malnati's Pizzeria is an American Chicago-style pizza restaurant chain headquartered in Northbrook, Illinois. It was founded by the son of Rudy Malnati, who was instrumental in developing the recipe for Chicago-style pizza, and it has become one of the Chicago area's best-known local lines of pizza restaurants.",
                links: [
                    {
                        "name": "Sign Up",
                        "to": "#"
                    },
                    {
                        "name": "About It's Pizza Time",
                        "to": "#"
                    },
                ]
            }
        }
    }
}
</script>