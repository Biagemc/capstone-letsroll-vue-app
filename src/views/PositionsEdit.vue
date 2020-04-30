<template>
  <div class="positions-edit">
    <section class="section" id="edit-section">
      <div class="container-fluid">
        <form v-on:submit.prevent="submit()">
          <h1>Edit Position</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
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
              <textarea type="text" class="form-control" v-model="position.description"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-xl-5">
              <label>Type:</label>
              <input type="text" class="form-control" v-model="position.type" />
            </div>
          </div>
          <div class="button">
            <a type="submit" class="btn btn-secondary" value="Submit">Save</a>
          </div>
        </form>
        <div class="button">
          <a v-on:click="deletePosition()" class="btn btn-danger">Delete Position</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#edit-section {
  align-content: left;
  padding: 5% 15% 5%;
}

.button {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.btn-secondary,
.btn-danger {
  width: 10rem;
}
</style>

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
