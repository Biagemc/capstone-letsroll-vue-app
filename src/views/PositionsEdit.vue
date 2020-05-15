<template>
  <div class="positions-edit">
    <div class="main main-raised" id="section-edit">
      <div class="section">
        <div class="row">
          <div class="col-lg-8 ml-auto">
            <form v-on:submit.prevent="submit()">
              <h1>Edit Position</h1>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="row">
                <div class="form-group col-xl-6">
                  <label>Name:</label>
                  <input type="text" class="form-control" v-model="position.name" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-xl-6">
                  <label>Url:</label>
                  <input type="text" class="form-control" v-model="position.url" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-xl-6">
                  <label>Description:</label>
                  <textarea type="text" class="form-control" v-model="position.description"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-10">
                  <label for="inputState">Type:</label>

                  <select
                    role="tab"
                    id="inputState"
                    class="form-control mb-0"
                    data-style="btn btn-link"
                    v-model="position.type"
                  >
                    <option disabled>{{position.type}}</option>
                    <option></option>
                    <option>drills</option>
                    <option>sweeping</option>
                    <option>takedown</option>
                    <option>mounting</option>
                    <option>passing</option>
                    <option>submission</option>
                  </select>
                </div>
              </div>
              <div class="button">
                <button type="submit" class="btn btn-primary" value="Submit">Save</button>
              </div>
            </form>
            <div class="button">
              <a v-on:click="deletePosition()" class="btn btn-danger">Delete Position</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.positions-edit {
  align-content: center;
  padding: 10rem 3rem 0rem;
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
        situation: this.position.type,
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
