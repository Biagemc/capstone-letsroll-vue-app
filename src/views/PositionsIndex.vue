<template>
  <div class="positions-index">
    <div class="container">
      <div class="col-lg-12 ml-auto mr-auto text-center">
        <div id="top-container" class>
          <h3>{{ message }}</h3>
          <div id="top-header">
            <!-- form begin -->

            <form class="justify-content-center" v-on:submit.prevent="submit()">
              <div class="form-row">
                <div class=" col-lg-4">
                  <input type="text" class="form-control" v-model="nameFilter" list="names" placeholder="Search" />
                  <datalist id="names">
                    <option v-for="position in positions">{{ position.name }}</option>
                  </datalist>
                </div>

                <div class="form-group col-lg-3">
                  <select
                    id="inputState"
                    class="form-control"
                    v-bind:on-change="updateSelected(theCurrentValue)"
                    v-model="theCurrentValue"
                  >
                    <option v-model="theCurrentValue" selected></option>
                    <option v-for="position in positions">{{ position.type }}</option>
                  </select>
                </div>
                <div class="form-group col-lg-3">
                  <select id="inputState" class="form-control">
                    <option selected>Tags Type...</option>
                    <option v-for="position in positions">{{ position.tags }}</option>
                  </select>
                </div>
                <button class="btn btn-primary btn-sm" v-on:click="getSearch()">Search</button>
              </div>
            </form>
            <!-- End form -->
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              id="listing"
              class="card card-profile ml-auto mr-auto"
              style="max-heigth: 100px;max-width: 280px;"
              v-bind:key="position.id"
              v-for="position in orderBy(filterBy(positions, nameFilter, 'name'), sortAttribute, 1)"
              v-on:click="currentPosition === position"
            >
              <div class=" card-header card-header-image">
                <div class="iframe-container embed-responsive embed-responsive-16by9">
                  <youtube
                    class="embed-responsive-item"
                    style="max-width: 280px;"
                    gesture="media"
                    allow="encrypted-media"
                    allowfullscreen
                    v-bind:video-id="getVideoId(position.url)"
                    ref="youtube"
                    @playing="playing"
                  ></youtube>
                </div>
              </div>
              <div class="card-body">
                <a class="card-title" v-bind:href="`/positions/${position.id}`">{{ position.name }}</a>
                <p class="card-text">{{ position.description }}</p>
                <p class="card-category text-gray">{{ position.type }}</p>

                <div class="card-footer justify-content-center">
                  <div v-bind:key="tag.id" v-for="tag in position.tags">
                    <form class="justify-content-center">
                      <div class="form-row">
                        <div class="bootstrap-tagsinput warning-badge">
                          <span href="#" class="tag badge">#{{ tag.name }}</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

#card-list {
  padding: 2rem;
}

/* #content .container-fluid {
  padding: 3% 5%;
  align-content: center;
} */

.positions-index {
  padding-top: 10rem;
}
.card-title {
  padding: 1rem;
}
</style>

<script>
import axios from "axios";
import { getIdFromUrl } from "vue-youtube";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Positions",
      positions: [],
      tags: [],
      currentPosition: {},
      nameFilter: "",
      sortAttribute: "name",
      selected: "",
      theCurrentValue: "",
      searchParams: "",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  created: function() {
    axios.get("/api/positions").then(response => {
      console.log(response.data);
      this.positions = response.data;
      this.tags = this.positions.tags;
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
    getSearch: function() {
      axios.get("/api/positions?type=drills").then(response => {
        console.log(response.data);
        this.positions = response.data;
      });
    },
    updateSelected: function(valueSelected) {
      console.log(valueSelected);
      this.theCurrentValue = valueSelected;
    },
  },
};
</script>
