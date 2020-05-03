<template>
  <div class="positions-index">
    <section class="section" id="content">
      <div class="container-fluid">
        <div id="top-header">
          <h3>{{ message }}</h3>

          <div id="top-container">
            <form class="justify-content-center">
              <div class="form-row">
                <div class="col-4">
                  <input type="text" class="form-control" v-model="nameFilter" list="names" placeholder="Search" />
                  <datalist id="names">
                    <option v-for="position in positions">{{ position.name }}</option>
                  </datalist>
                  <button class="btn btn-primary btn-sm" v-on:click="setSortAttribute('name')">by Name</button>
                  <button class="btn btn-primary btn-sm" v-on:click="setSortAttribute('Type')">by Type</button>
                </div>
                <div class="col-auto">
                  <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect"></label>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Type...</option>
                    <option v-for="position in positions">{{ position.type }}</option>
                  </select>
                </div>
                <div class="col-2">
                  <input type="text" class="form-control" placeholder="Tags" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div class="row">
            <div
              id="listing"
              class="card col-4 ml-4"
              v-bind:key="position.id"
              v-for="position in orderBy(filterBy(positions, nameFilter, 'name', 'type'), sortAttribute, 1)"
              v-on:click="currentPosition === position"
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
                <a class="card-title" v-bind:href="`/positions/${position.id}`">{{ position.name }}</a>
                <p class="card-text">{{ position.description }}</p>
                <p class="card-text">{{ position.type }}</p>
                <a href="#" class="badge badge-light" v-bind:key="tag.id" v-for="tag in position.tags">
                  #{{ tag.name }}
                </a>
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Positions",
      positions: [],
      currentPosition: {},
      nameFilter: "",
      sortAttribute: "name",
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
    setSortAttribute: function(attribute) {
      console.log(attribute);
      this.sortAttribute = attribute;
    },
  },
};
</script>
