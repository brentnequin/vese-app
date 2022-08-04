<template>
    <page>
        <b-container class="my-5" slot="content">
            <b-media>
                <template #aside>
                    <b-img
                        src="https://cdn.vox-cdn.com/thumbor/jW1i6Uqp0JwSMvDFHmF2xWmJU6g=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9186447/lou_malnati_s.0.jpg"
                        width="300" alt="placeholder" class="mr-3">
                    </b-img>
                </template>
                <h1>{{ event.title }}</h1>
                <p class="text-muted">{{ event.starttime }} - {{ event.endtime }} | {{ event.date }}</p>
                <p>{{ event.fulldescription}}</p>
            </b-media>
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
                date: "Aug 3, 2022",
                starttime: "8:00am",
                endtime: "9:00am",
                excerpt: "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
                fulldescription: "Lou Malnati's Pizzeria is an American Chicago-style pizza restaurant chain headquartered in Northbrook, Illinois. It was founded by the son of Rudy Malnati, who was instrumental in developing the recipe for Chicago-style pizza, and it has become one of the Chicago area's best-known local lines of pizza restaurants."
            }
        }
    }
}
</script>