<template>
  <div class="positions-new">
    <section class="section" id="new-section">
      <div class="container-fluid">
        <form v-on:submit.prevent="submit()">
          <h1>New Position</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="row">
            <div class="form-group col-xl-5">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="positionName" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xl-5">
              <label>Url:</label>
              <input type="text" class="form-control" v-model="positionUrl" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xl-5">
              <label>Description:</label>
              <textarea type="text" class="form-control" v-model="positionDescription" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xl-5">
              <label>Type:</label>
              <input type="text" class="form-control" v-model="positionSituation" />
            </div>
          </div>
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
    };
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
