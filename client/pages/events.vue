<template>
  <b-container class="my-5" slot="content">
    <h1>Events</h1>
    <b-row>
      <b-col md="auto" class="mt-5">
        <b-calendar class="d-flex justify-content-center" v-model="value" @context="onContext" locale="en-US"></b-calendar>
      </b-col>
      <b-col class="mt-5">
        <ul class="list-unstyled">
          <b-media class="mb-2" tag="li" v-for="(event, index) in eventsLoaded" v-bind:key="index">
            <template #aside>
              <b-img blank blank-color="#abc" width="128" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-1">{{ event.title }}</h5>
            <p class="text-muted">{{ event.starttime }} - {{ event.endtime }} | {{ event.date }}</p>
            <p class="mb-0">{{ event.description }}</p>
          </b-media>
        </ul>
        <button v-if="!allEventsLoaded" v-on:click="loadMoreEvents">View More</button>
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
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
        {
          "title": "It's Pizza Time",
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
        {
          "title": "It's Pizza Time",
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
        {
          "title": "It's Pizza Time",
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
        {
          "title": "It's Pizza Time",
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
        {
          "title": "It's Pizza Time",
          "date": "Aug 3, 2022",
          "starttime": "8:00am",
          "endtime": "9:00am",
          "description": "It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time It's Pizza Time"
        },
      ]
    }
  },
}
</script>