<template>
  <div class="positions-show">
    <h1>{{ message }}</h1>

    <h3>{{ position.name }}</h3>
    <youtube :video-id="getVideoId(position.url)" ref="youtube" @playing="playing"></youtube>

    <h5>{{ position.type }}</h5>

    <h5>{{ position.description }}</h5>

    <div v-bind:key="tag.id" v-for="tag in position.tags">
      <p>{{ tag.name }}</p>
    </div>
    <b-button v-bind:href="`/positions/${position.id}/edit`">Edit</b-button>
    <p>{{ position.discussion.post }}</p>
    <hr />
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
      position: {},
      videoId: "",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  created: function() {
    axios.get("/api/positions/" + this.$route.params.id).then(response => {
      console.log("Success", response.data);
      this.position = response.data;
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
