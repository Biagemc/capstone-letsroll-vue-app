<template>
  <div class="positions-index">
    <section class="section" id="content">
      <div class="container-fluid">
        <div id="top-header">
          <h3>{{ message }}</h3>
        </div>
        <div class="d-flex justify-content-around">
          <div class="row">
            <div
              id="listing"
              class="card col-4 ml-4"
              v-bind:key="position.id"
              v-for="position in positions"
            >
              <div class="embed-responsive embed-responsive-16by9">
                <youtube
                  class="embed-responsive-item"
                  v-bind:video-id="getVideoId(position.url)"
                  ref="youtube"
                  @playing="playing"
                ></youtube>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ position.name }}</h5>
                <p class="card-text">{{ position.description }}</p>
                <a
                  href="#"
                  class="badge badge-light"
                  v-bind:key="tag.id"
                  v-for="tag in position.tags"
                >#{{ tag.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#video-card {
  width: 300px;
  height: auto;
  resize: vertical;
}

#top-header {
  text-align: center;
  font-size: 1.2rem;
  font-family: "Montserrat-Light";
}

#listing {
  padding: 0;
}

#content .container-fluid {
  padding: 3% 5%;
  align-content: center;
}

.card-title {
  padding-bottom: 1rem;
}
</style>

<script>
import axios from "axios";
import { getIdFromUrl } from "vue-youtube";

export default {
  data: function() {
    return {
      message: "Positions",
      positions: [],

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
      console.log("o/ we are watching!!!");
    },
    getVideoId(url) {
      let videoId = getIdFromUrl(url);
      // console.log(this.videoId);
      return videoId;
    },
  },
};
</script>
