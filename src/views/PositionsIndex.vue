<template>
  <div class="positions-index">
    <h1>{{ message }}</h1>
    <div v-bind:key="position.id" v-for="position in positions">
      <youtube player-width:="450" :video-id="position.url"></youtube>

      <h3>{{ position.name }}</h3>
      <div v-bind:key="tag.id" v-for="tag in position.tags">
        <p>{{ tag.name }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

export default {
  data: function() {
    return {
      message: "List of Positions",
      positions: [],
    };
  },
  created: function() {
    axios.get("/api/positions").then(response => {
      console.log(response.data);

      this.positions = response.data;
    });
  },
  methods: {},
};
</script>
