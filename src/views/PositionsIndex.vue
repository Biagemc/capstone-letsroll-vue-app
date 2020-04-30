<template>
  <div class="positions-index">
    <section class="colored-section" id="content">
      <div class="container-fluid">
        <div id="top-header">
          <h3>{{ message }}</h3>
        </div>
        <div id="listing" v-bind:key="position.id" v-for="position in positions">
          <div class="card mb-8" style="max-width: 1000px; max-height: 650px">
            <div class="row no-gutters">
              <div class="col-md-5">
                <youtube
                  v-bind:video-id="getVideoId(position.url)"
                  ref="youtube"
                  @playing="playing"
                ></youtube>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">{{ position.name }}</h5>
                  <p class="card-text">{{ position.description }}</p>
                  <p class="card-text">
                    <small
                      class="text-muted"
                      v-bind:key="tag.id"
                      v-for="tag in position.tags"
                    >{{ tag.name }}</small>
                  </p>
                  <a v-bind:href="`/positions/${position.id}`" class="btn btn-primary">More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div v-bind:key="position.id" v-for="position in positions">
          <h3>{{ position.name }}</h3>
          <div class="embed-responsive embed-responsive-16by9">
            <youtube v-bind:video-id="getVideoId(position.url)" ref="youtube" @playing="playing"></youtube>
          </div>

          <h5>{{ position.type }}</h5>

          <h5>{{ position.description }}</h5>

          <div v-bind:key="tag.id" v-for="tag in position.tags">
            <p>{{ tag.name }}</p>
          </div>
          <b-button v-bind:href="`/positions/${position.id}`">Show position</b-button>
          <hr />
        </div>-->
      </div>
    </section>
  </div>
</template>

<style>
iframe {
  width: 100%;
  max-height: 250px; /* Also helpful. Optional. */
  resize: horizontal;
}

#top-header {
  text-align: center;
  font-size: 1.2rem;
  font-family: "Montserrat-Light";
}

#listing {
  padding: 3%;
}

#content .container-fluid {
  padding: 3% 10% 5%;
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
