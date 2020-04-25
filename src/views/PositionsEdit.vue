<template>
  <div class="positions-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Position</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">
            {{ error }}
          </li>
        </ul>
        <div class="row">
          <div class="form-group col-xl-5">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="position.name" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-xl-5">
            <label>Url:</label>
            <input type="text" class="form-control" v-model="position.url" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-xl-5">
            <label>Description:</label>
            <input type="text" class="form-control" v-model="position.description" />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-xl-5">
            <label>Type:</label>
            <input type="text" class="form-control" v-model="position.type" />
          </div>
        </div>
        <input type="submit" class="btn btn-secondary" value="Submit" />
      </form>
      <b-button v-on:click="deletePosition()" class="btn btn-danger">Delete Position</b-button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      position: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/positions/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.position = response.data;
    });
  },
  methods: {
    submit: function() {
      let params = {
        name: this.position.name,
        url: this.position.url,
        description: this.position.description,
        situation: this.position.situation,
      };
      axios
        .patch(`/api/positions/${this.position.id}`, params)
        .then(response => {
          this.$router.push(`/positions/${this.position.id}`);
        })
        .cacth(error => {
          this.errors = error.response.data.errors;
        });
    },
    deletePosition: function() {
      console.log("Deleting position...");
      axios.delete(`api/positions/${this.position.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/positions");
      });
    },
  },
};
</script>
