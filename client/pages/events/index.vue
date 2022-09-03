<template>
  <b-container class="my-5" slot="content">
    <h1>Events</h1>
    <b-row>
      <b-col md="auto" class="mt-5">
        <b-calendar class="d-flex justify-content-center" v-model="value" @context="onContext" locale="en-US"></b-calendar>
      </b-col>
      <b-col class="mt-5">
        <ul class="list-unstyled">
          <b-media class="mb-4" tag="li" v-for="(event, index) in eventsLoaded" v-bind:key="index">
            <template #aside>
              <b-link :to="'events/' + event.id">
                <b-img src="https://cdn.vox-cdn.com/thumbor/jW1i6Uqp0JwSMvDFHmF2xWmJU6g=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9186447/lou_malnati_s.0.jpg" width="150" alt="placeholder"></b-img>
              </b-link>
            </template>
            <b-link :to="'events/' + event.id">
              <h5 class="mt-0 mb-1">{{ event.title }}</h5>
            </b-link>
            <p class="text-muted">{{ event.starttime }} - {{ event.endtime }} | {{ event.date }}</p>
            <p class="mb-0">{{ event.description }}</p>
            <b-button class="mt-3" :to="'events/' + event.id">Read More</b-button>
          </b-media>
        </ul>
        <div class="d-flex justify-content-center">
          <b-button variant="primary" v-if="!allEventsLoaded" v-on:click="loadMoreEvents">View More</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    loadMoreEvents() {
      this.length = this.length + 3;
      if (this.length >= this.events.length) this.allEventsLoaded = true;
    },
  },
  computed: {
    eventsLoaded() {
      return this.events.slice(0, this.length);
    },
  },
  data() {
    return {
      length: 3,
      allEventsLoaded: false,
      events: [
        {
          "title": "It's Pizza Time",
          "date": "Sep 19, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-sep1902022"
        },
        {
          "title": "It's Pizza Time",
          "date": "Sep 26, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-sep2602022"
        },
        {
          "title": "It's Pizza Time",
          "date": "Oct 03, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-oct0302022"
        },
        {
          "title": "It's Pizza Time",
          "date": "Oct 10, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-oct1002022"
        },
        {
          "title": "It's Pizza Time",
          "date": "Oct 17, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-oct1702022"
        },
        {
          "title": "It's Pizza Time",
          "date": "Oct 24, 2022",
          "starttime": "5:00pm",
          "endtime": "6:00pm",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time",
          "id": "its-pizza-time-oct2402022"
        },
      ]
    }
  },
}
</script>