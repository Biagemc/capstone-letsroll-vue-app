<template>
  <div class="user-profile">
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div id="top-profile" class="col-md-3 ml-auto mr-auto">
              <div class="profile text-center">
                <h3 class="h3">{{ message }}</h3>
                <div class="avatar">
                  <img
                    v-bind:src="userData.avatar"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                    width="150px"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ userData.name }}</h3>
                  <h6>{{ userData.city }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>{{ userData.gym }}</p>
            <p>{{ userData.afiliation }}</p>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile-tabs">
                <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" href="#personal" role="tab" data-toggle="tab">
                      <i class="material-icons">face</i>
                      Personal
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#positions" role="tab" data-toggle="tab">
                      <i class="material-icons">palette</i>
                      My Positions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#favourites" role="tab" data-toggle="tab">
                      <i class="material-icons">palette</i>
                      My Favourites
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content tab-space">
            <div class="tab-pane active text-center gallery" id="personal">
              <!-- Insert content related to personal section -->
              <div v-if="editMode === false" class="row">
                <div class="col-md-3 ml-auto">
                  <div class="col-md-1">
                    <h4 class="h4">
                      <button
                        v-on:click="editMode = true"
                        class="btn btn-default btn-fab btn-fab-mini btn-link pull-right"
                        rel="tooltip"
                        title
                        data-original-title="Update Info"
                      >
                        <i class="material-icons">settings</i>
                      </button>
                    </h4>
                  </div>
                  <span class="description">Name:</span>
                  <h6>{{ userData.name }}</h6>

                  <span class="description">Email:</span>
                  <h6>{{ userData.email }}</h6>
                </div>
                <div class="col-md-3 mr-auto">
                  <span class="description">Gym:</span>
                  <h6>{{ userData.gym }}</h6>
                  <span class="description">Afiliation:</span>
                  <h6>{{ userData.afiliation }}</h6>
                  <span class="description">Current Belt:</span>
                  <h6>{{ userData.belt }}</h6>
                </div>
              </div>
              <div v-if="editMode === true" class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <!-- <form v-on:submit.prevent="upload()"> -->
                  <!-- <div class="row">
                    <input multiple type="file" label="Add your avatar picture" chips @change="onAddFiles" />
                    <button type="submit">Upload test</button>
                    <button id="upload_widget" class="cloudinary-button">Upload files</button> -->
                  <!-- <div class="form-group form-file-upload form-file-simple col-md-6 ml-auto mr-auto">
                        <input
                          type="file"
                          class="inputFileHidden"
                          accept="image/png, image/jpeg"
                          @change="handleFileChange($event)"
                        />
                        <div class="input-group">
                          <input type="text" class="form-control inputFileVisible" placeholder="Single File" />
                          <span class="input-group-btn">
                            <button type="button" class="btn btn-fab btn-round btn-primary">
                              <i class="material-icons">attach_file</i>
                            </button>
                          </span>
                        </div>
                      </div> -->
                  <!-- </div> -->
                  <!-- </form> -->
                  <form v-on:submit.prevent="submit()">
                    <h4 class="h4">Update My Info</h4>
                    <ul>
                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                    <div class="row">
                      <div class="col-md-8 ml-auto mr-auto">
                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>Name:</label>
                            <input type="text" class="form-control" v-model="userData.name" />
                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>Email:</label>
                            <input type="text" class="form-control" v-model="userData.email" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>Gym:</label>
                            <input type="text" class="form-control " v-model="userData.gym" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>Afiliation:</label>
                            <input type="text" class="form-control" v-model="userData.afiliation" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>Belt:</label>
                            <input type="text" class="form-control" v-model="userData.belt" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-10 ml-auto mr-auto">
                            <label>City:</label>
                            <input type="text" class="form-control" v-model="userData.city" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                  </form>
                </div>
              </div>
            </div>
            <!-- end of personal section -->
            <div class="tab-pane text-center gallery" id="positions">
              <!-- begin content positions section -->
              <div class="container">
                <div class="row">
                  <div
                    id="listing"
                    class="card card-profile ml-auto mr-auto"
                    style="max-heigth: 100px;max-width: 280px;"
                    v-bind:key="position.id"
                    v-for="position in userData.positions"
                    v-on:click="currentPosition === position"
                  >
                    <div class="card-header card-header-image">
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
                        <div class="row">
                          <div class="col-12" v-bind:key="tag.id" v-for="tag in position.tags">
                            <div class="bootstrap-tagsinput warning-badge col-1">
                              <span href="#" class="tag badge">#{{ tag.name }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end of positions section -->
            <div class="tab-pane text-center gallery" id="favourites">
              <!-- begin content favourites section -->
              <div class="container">
                <div class="row">
                  <div
                    id="listing"
                    class="card card-profile ml-auto mr-auto"
                    style="max-heigth: 100px;max-width: 280px;"
                    v-bind:key="favouritePosition.id"
                    v-for="favouritePosition in userData.favourites"
                    v-on:click="currentPosition === favouritePosition.position"
                  >
                    <div class="card-header card-header-image">
                      <div class="iframe-container embed-responsive embed-responsive-16by9">
                        <youtube
                          class="embed-responsive-item"
                          style="max-width: 280px;"
                          gesture="media"
                          allow="encrypted-media"
                          allowfullscreen
                          v-bind:video-id="getVideoId(favouritePosition.position.url)"
                          ref="youtube"
                          @playing="playing"
                        ></youtube>
                      </div>
                    </div>
                    <div class="card-body">
                      <a class="card-title" v-bind:href="`/positions/${favouritePosition.position.id}`">
                        {{ favouritePosition.position.name }}
                      </a>
                      <p class="card-text">{{ favouritePosition.position.description }}</p>
                      <p class="card-category text-gray">{{ favouritePosition.position.type }}</p>

                      <div class="card-footer justify-content-center">
                        <div class="row">
                          <div class="col-12" v-bind:key="tag.id" v-for="tag in favouritePosition.position.tags">
                            <div class="bootstrap-tagsinput warning-badge col-1">
                              <span href="#" class="tag badge">#{{ tag.name }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        v-on:click="removeFromFavourites(favouritePosition.favourite_id)"
                        class="btn btn-primary btn-fab btn-fab-mini btn-round"
                      >
                        <i class="material-icons">remove_circle_outline</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end of favourites section -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.user-profile {
  padding: 10rem 3rem 0rem;
}
#top-profile {
  align-content: center;
  justify-content: center;
}
</style>

<script>
import axios from "axios";
import { getIdFromUrl } from "vue-youtube";

export default {
  data: function() {
    return {
      message: "My Profile",
      userData: {},
      errors: [],
      editMode: false,
      currentPosition: {},
      image: "",
      playerVars: {
        autoplay: 1,
      },
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$parent.getUserId()).then(response => {
      console.log(response.data);
      this.userData = response.data;
    });
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
    getVideoId(url) {
      let videoId = getIdFromUrl(url);

      return videoId;
    },
    submit: function() {
      let params = {
        name: this.userData.name,
        email: this.userData.email,
        city: this.userData.city,
        gym: this.userData.gym,
        afiliation: this.userData.afiliation,
        belt: this.userData.belt,
      };
      axios.patch("/api/users/" + this.$parent.getUserId(), params).then(response => {
        this.editMode = false;
      });
    },
    removeFromFavourites: function(theId) {
      console.log("Removing position from favourites...");

      axios.delete(`api/favourites/${theId}`).then(response => {
        console.log(response.data);
        let index = this.userData.favourites.indexOf(theId);
        this.userData.favourites.splice(index, 1);
      });
    },

    // prepareFormData: function() {
    //   this.formData = new FormData();
    //   this.formData.append("ud1eyem5", this.preset);
    //   this.formData.append("file", this.fileContents);
    // },
    // handleFileChange: function(event) {
    //   console.log(event);
    //   this.file = event.target.files[0];
    //   this.filesSelected = event.target.files.length;
    //   console.log("Console log 2...", this.file, this.filesSelected);
    // },
    // upload: function() {
    //   var myWidget = cloudinary.createUploadWidget(
    //     {
    //       cloudName: "biagemc",
    //       uploadPreset: "ud1eyem5",
    //     },
    //     (error, result) => {
    //       if (!error && result && result.event === "success") {
    //         console.log("Done! Here is the image info: ", result.info);
    //       }
    //     }
    //   );
    //   document.getElementById("upload_widget").addEventListener(
    //     "click",
    //     function() {
    //       myWidget.open();
    //     },
    //     false
    //   );
    // },
    // onAddFiles(files) {
    //   if (files.length > 0) {
    //     files.forEach(file => {
    //       window.console.log(file);
    //       this.uploadFileToCloudinary(file).then(fileResponse => {
    //         this.files.push(fileResponse);
    //       });
    //     });
    //   }
    // },
    // uploadFileToCloudinary(file) {
    //   return new Promise(function(resolve, reject) {
    //     //Ideally these to lines would be in a .env file
    //     const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/biagemc/upload";
    //     const CLOUDINARY_UPLOAD_PRESET = "ud1eyem5";
    //     let formData = new FormData();
    //     formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    //     formData.append("folder", "letsRoll App");
    //     formData.append("file", file);
    //     let request = new XMLHttpRequest();
    //     request.open("POST", CLOUDINARY_URL, true);
    //     request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    //     request.onreadystatechange = () => {
    //       // File uploaded successfully
    //       if (request.readyState === 4 && request.status === 200) {
    //         let response = JSON.parse(request.responseText);
    //         resolve(response);
    //       }
    //       // Not successfull, let find our what happened
    //       if (request.status !== 200) {
    //         let response = JSON.parse(request.responseText);
    //         let error = response.error.message;
    //         this.errorText = "error uploading files " + error;
    //         this.isError = true;
    //         reject(error);
    //       }
    //     };
    //     request.onerror = err => {
    //       alert("error: " + err);
    //       reject(err);
    //     };
    //     request.send(formData);
    //   });
    // },
  },
};
</script>
