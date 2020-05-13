<template>
  <div class="positions-new">
    <section class="section" id="new-section">
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>New Position</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="row">
            <div class="col-xl-5">
              <div class="row">
                <div class="form-group col-xl-10">
                  <label>Name:</label>
                  <input type="text" class="form-control" v-model="positionName" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-xl-10">
                  <label>Url:</label>
                  <input type="text" class="form-control" v-model="positionUrl" />
                </div>
              </div>
              <div class="row">
                <div class="form-group label-floating bmd-form-group col-xl-10">
                  <label
                    class="form-control-label bmd-label-floating"
                    for="exampleInputTextarea"
                  >You can write your description here...</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="exampleInputTextarea"
                    spellcheck="false"
                    v-model="positionDescription"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-xl-10">
                  <label>Type:</label>
                  <input type="text" class="form-control" v-model="positionSituation" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div v-for="tag in tags" class="form-check">
                <label class="form-check-label">
                  <input
                    v-bind:value="tag.id"
                    v-model="tagsSelected"
                    class="form-check-input"
                    type="checkbox"
                    value
                    checked
                  />
                  {{ tag.name }}
                  <span class="form-check-sign">
                    <span class="check"></span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <h4>{{ tagsSelected }}</h4>
          <button type="button" class="btn btn-primary">Primary</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style>
#new-section {
  align-content: left;
  padding: 5% 15% 5%;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      positionName: "",
      positionUrl: "",
      positionDescription: "",
      positionSituation: "",
      errors: [],
      tags: [],
      tagsSelected: [],
    };
  },
  created: function() {
    axios.get("/api/positions").then(response => {
      console.log(response.data);

      this.tags = response.data.tags;
    });
  },
  methods: {
    submit: function() {
      let params = {
        name: this.positionName,
        url: this.positionUrl,
        description: this.positionDescription,
        situation: this.positionSituation,
      };
      axios
        .post("/api/positions", params)
        .then(response => {
          this.$router.push("/positions");
        })
        .cacth(error => {
          this.errors = error.response.data.errors;
        });
    },
    deletePosition: function() {
      console.log("Deleting position...");
      axios.delete(`api/position/${this.position.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/positions");
      });
    },
  },
};
</script>
