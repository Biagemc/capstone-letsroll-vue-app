<template>
  <div class="positions-index">
    <div class="container">
      <div class="col-lg-12 ml-auto mr-auto text-center">
        <div id="top-header" class="row">
          <h3>{{ message }}</h3>

          <!-- <div class="col-lg-5 col-md-6 col-sm-3">
            <div class="dropdown bootstrap-select show-tick show">
              <select
                class="selectpicker"
                data-style="select-with-transition"
                multiple
                title="Choose City"
                data-size="7"
                tabindex="-98"
              >
                <option disabled>Choose city</option>
                <option value="2">Paris</option>
                <option value="3">Bucharest</option>
                <option value="4">Rome</option>
                <option value="5">New York</option>
                <option value="6">Miami</option>
                <option value="7">Piatra Neamt</option>
                <option value="8">Paris</option>
                <option value="9">Bucharest</option>
                <option value="10">Rome</option>
                <option value="11">New York</option>
                <option value="12">Miami</option>
                <option value="13">Piatra Neamt</option>
                <option value="14">Paris</option>
                <option value="15">Bucharest</option>
                <option value="16">Rome</option>
                <option value="17">New York</option>
                <option value="18">Miami</option>
                <option value="19">Piatra Neamt</option>
              </select>
              <button
                type="button"
                class="btn dropdown-toggle select-with-transition bs-placeholder"
                data-toggle="dropdown"
                role="combobox"
                aria-owns="bs-select-2"
                aria-haspopup="listbox"
                aria-expanded="true"
                title="Choose City"
              >
                <div class="filter-option">
                  <div class="filter-option-inner">
                    <div class="filter-option-inner-inner">Choose City</div>
                  </div>
                </div>
              </button>
              <div
                class="dropdown-menu show"
                x-placement="bottom-start"
                style="max-height: 276px; overflow: hidden; position: absolute; top: 46px; left: 1px; will-change: top, left;"
              >
                <div
                  class="inner show"
                  role="listbox"
                  id="bs-select-2"
                  tabindex="-1"
                  aria-multiselectable="true"
                  style="max-height: 266px; overflow-y: auto;"
                >
                  <ul
                    class="dropdown-menu inner show"
                    role="presentation"
                    style="margin-top: 0px; margin-bottom: 0px;"
                  >
                    <li class="disabled">
                      <a
                        role="option"
                        class="dropdown-item disabled"
                        id="bs-select-2-0"
                        aria-disabled="true"
                        tabindex="-1"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Choose city</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-1"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="1"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Paris</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-2"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="2"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Bucharest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-3"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="3"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Rome</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-4"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="4"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">New York</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-5"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Miami</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-6"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Piatra Neamt</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-7"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="7"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Paris</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-8"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="8"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Bucharest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-9"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Rome</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-10"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="10"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">New York</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-11"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Miami</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-12"
                        tabindex="0"
                        aria-selected="false"
                        aria-setsize="18"
                        aria-posinset="12"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Piatra Neamt</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-13"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Paris</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-14"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Bucharest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-15"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Rome</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-16"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">New York</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-17"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Miami</span>
                      </a>
                    </li>
                    <li>
                      <a
                        role="option"
                        class="dropdown-item"
                        id="bs-select-2-18"
                        tabindex="0"
                        aria-selected="false"
                      >
                        <span class="material-icons check-mark">done</span>
                        <span class="text">Piatra Neamt</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>-->

          <div id="top-container" class>
            <form class="justify-content-center">
              <div class="form-row">
                <div class="col-4">
                  <input
                    type="text"
                    class="form-control"
                    v-model="nameFilter"
                    list="names"
                    placeholder="Search"
                  />
                  <datalist id="names">
                    <option v-for="position in positions">{{ position.name }}</option>
                  </datalist>
                  <!-- <button
                    class="btn btn-primary btn-sm"
                    v-on:click="setSortAttribute('name')"
                  >by Name</button>-->
                  <button class="btn btn-primary btn-sm" v-on:click="getSearch()">Search</button>
                </div>
                <div class="col-auto">
                  <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect"></label>
                  <select
                    class="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    v-bind:on-change="updateSelected(theCurrentValue)"
                    v-model="theCurrentValue"
                  >
                    <option selected>Type</option>
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
        <div class="container">
          <div class="col-md-12">
            <div class="row">
              <div
                id="listing"
                class="card col-3"
                style="width: 20rem;"
                v-bind:key="position.id"
                v-for="position in orderBy(filterBy(positions, nameFilter, 'name'), sortAttribute, 1)"
                v-on:click="currentPosition === position"
              >
                <div class="embed-responsive embed-responsive-16by9">
                  <youtube
                    class="embed-responsive-item card-img-top"
                    v-bind:video-id="getVideoId(position.url)"
                    ref="youtube"
                    @playing="playing"
                  ></youtube>
                </div>
                <div class="card-body">
                  <a
                    class="card-title"
                    v-bind:href="`/positions/${position.id}`"
                  >{{ position.name }}</a>
                  <p class="card-text">{{ position.description }}</p>
                  <p class="card-text">{{ position.type }}</p>
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
