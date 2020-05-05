<template>
  <div class="positions-show">
    <section class="section" id="content">
      <div class="container-fluid">
        <div class="position-content">
          <h2 class="name-title">
            <span>{{ position.name }}</span>
          </h2>
          <div class="video-container">
            <youtube :video-id="getVideoId(position.url)" ref="youtube" @playing="playing"></youtube>
          </div>
          <div class="pos-description">
            <div class="row">
              <div v-bind:key="tag.id" v-for="tag in position.tags">
                <div class="col-xl-3">
                  <small>#{{ tag.name }}</small>
                </div>
              </div>
            </div>
            <h4>Description:</h4>
            <h5>{{ position.description }}</h5>
          </div>
          <div id="button-edit">
            <a v-bind:href="`/positions/${position.id}/edit`" class="btn btn-primary">Edit Info</a>
          </div>
          <div v-bind:key="comment.id" v-for="comment in position.discussion">
            <p>{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
h5 {
  padding-bottom: 4rem;
}

.name-title {
  padding-bottom: 4rem;
}
.pos-description {
  padding: 4rem 0rem 0rem;
  text-align: left;
}

#button-edit {
  align-content: left;
}

#content .container-fluid {
  padding: 12% 15% 5%;
}

.position-content {
  text-align: center;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
import axios from "axios";
import { getIdFromUrl } from "vue-youtube";

export default {
  data: function() {
    return {
      message: "List of Positions",
      position: {},

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
