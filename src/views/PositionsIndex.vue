<template>
  <div class="positions-index">
    <h1>{{ message }}</h1>
    <div v-bind:key="position.id" v-for="position in positions">
      <h3>{{ position.name }}</h3>
      <youtube :video-id="getVideoId(position.url)" ref="youtube" @playing="playing"></youtube>

      <h5>{{ position.type }}</h5>
      {{ position.url }}
      <h5>{{ position.description }}</h5>

      <div v-bind:key="tag.id" v-for="tag in position.tags">
        <p>{{ tag.name }}</p>
      </div>
      <b-button href="#">Show position</b-button>
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import { getIdFromUrl } from "vue-youtube";

export default {
  data: function() {
    return {
      message: "List of Positions",
      positions: [],
      videoId: "",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  created: function() {
    axios.get("/api/positions").then(response => {
      console.log(response.data);

      this.positions = response.data;
    });
  },
  methods: {
    playing() {
      console.log("\o/ we are watching!!!");
    },
    getVideoId(url) {
      this.videoId = getIdFromUrl(url);
      // console.log(this.videoId);
      return this.videoId;
    },
  },
};
</script>
