<template>
  <div class="positions-show">
    <section class="section" id="content">
      <div class="container">
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

        <div id="comments">
          <div class="media-body">
            <h4 class="media-heading">
              Tina Andrew
              <small>· 7 minutes ago</small>
            </h4>
            <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
            <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>
            <div class="media-footer">
              <a
                href="#pablo"
                class="btn btn-primary btn-link float-right"
                rel="tooltip"
                title
                data-original-title="Reply to Comment"
              >
                <i class="material-icons">reply</i> Reply
              </a>
              <a href="#pablo" class="btn btn-danger btn-link float-right">
                <i class="material-icons">favorite</i> 243
              </a>
            </div>
            <div class="media media-post">
              <a class="author float-left" href="#pablo">
                <div class="avatar">
                  <!-- <img class="media-object" alt="64x64" src="./public/assets/img/faces/kendall.jpg" /> -->
                </div>
              </a>
              <div class="media-body">
                <span class="bmd-form-group">
                  <textarea
                    class="form-control"
                    placeholder="Write a nice reply or go home..."
                    rows="4"
                  ></textarea>
                </span>
                <div class="media-footer">
                  <a href="#pablo" class="btn btn-primary float-right">
                    <i class="material-icons">reply</i> Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="title">
              <h3>Comments</h3>
          </div>-->
          <!-- <div class="row"> -->
          <!-- <div class="col-md-8 ml-auto mr-auto">
                <div class="media-area">
                  <h3 class="title text-center">10 Comments</h3>
                  <div class="media">
                    <a class="float-left" href="#pablo">
                      <div class="avatar">
                        <img class="media-object" src="./assets/img/faces/avatar.jpg" alt="..." />
                      </div>
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading">
                        Tina Andrew
                        <small>· 7 minutes ago</small>
                      </h4>
                      <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                      <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>
                      <div class="media-footer">
                        <a
                          href="#pablo"
                          class="btn btn-primary btn-link float-right"
                          rel="tooltip"
                          title
                          data-original-title="Reply to Comment"
                        >
                          <i class="material-icons">reply</i> Reply
                        </a>
                        <a href="#pablo" class="btn btn-danger btn-link float-right">
                          <i class="material-icons">favorite</i> 243
                        </a>
                      </div>
                      <div class="media media-post">
                        <a class="author float-left" href="#pablo">
                          <div class="avatar">
                            <img
                              class="media-object"
                              alt="64x64"
                              src="./assets/img/faces/kendall.jpg"
                            />
                          </div>
                        </a>
                        <div class="media-body">
                          <span class="bmd-form-group">
                            <textarea
                              class="form-control"
                              placeholder="Write a nice reply or go home..."
                              rows="4"
                            ></textarea>
                          </span>
                          <div class="media-footer">
                            <a href="#pablo" class="btn btn-primary float-right">
                              <i class="material-icons">reply</i> Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media">
                    <a class="float-left" href="#pablo">
                      <div class="avatar">
                        <img
                          class="media-object"
                          alt="Tim Picture"
                          src="./assets/img/faces/marc.jpg"
                        />
                      </div>
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading">
                        John Camber
                        <small>· Yesterday</small>
                      </h4>
                      <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                      <p>Don't forget, You're Awesome!</p>
                      <div class="media-footer">
                        <a
                          href="#pablo"
                          class="btn btn-primary btn-link float-right"
                          rel="tooltip"
                          title
                          data-original-title="Reply to Comment"
                        >
                          <i class="material-icons">reply</i> Reply
                        </a>
                        <a href="#pablo" class="btn btn-link btn-secondary float-right">
                          <i class="material-icons">favorite</i> 25
                        </a>
                      </div>
                      <div class="media">
                        <a class="float-left" href="#pablo">
                          <div class="avatar">
                            <img
                              class="media-object"
                              alt="64x64"
                              src="./assets/img/faces/avatar.jpg"
                            />
                          </div>
                        </a>
                        <div class="media-body">
                          <h4 class="media-heading">
                            Tina Andrew
                            <small>· 2 Days Ago</small>
                          </h4>
                          <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                          <p>Don't forget, You're Awesome!</p>
                          <div class="media-footer">
                            <a
                              href="#pablo"
                              class="btn btn-primary btn-link float-right"
                              rel="tooltip"
                              title
                              data-original-title="Reply to Comment"
                            >
                              <i class="material-icons">reply</i> Reply
                            </a>
                            <a href="#pablo" class="btn btn-danger btn-link float-right">
                              <i class="material-icons">favorite</i> 243
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media">
                    <a class="float-left" href="#pablo">
                      <div class="avatar">
                        <img class="media-object" alt="64x64" src="./assets/img/faces/kendall.jpg" />
                      </div>
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading">
                        Rosa Thompson
                        <small>· 2 Days Ago</small>
                      </h4>
                      <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
          <p>Don't forget, You're Awesome!</p>-->
          <!-- <div class="media-footer">
                        <a
                          href="#pablo"
                          class="btn btn-primary btn-link float-right"
                          rel="tooltip"
                          title
                          data-original-title="Reply to Comment"
                        >
                          <i class="material-icons">reply</i> Reply
                        </a>
                        <a href="#pablo" class="btn btn-danger btn-link float-right">
                          <i class="material-icons">favorite</i> 243
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="pagination-area">
                    <ul class="pagination justify-content-center text-center">
                      <li class="page-item">
                        <a href="#pablo" class="page-link">«</a>
                      </li>
                      <li class="page-item">
                        <a href="#pablo" class="page-link">1</a>
                      </li>
                      <li class="page-item">
                        <a href="#pablo" class="page-link">2</a>
                      </li>
                      <li class="active page-item">
                        <a href="#pablo" class="page-link">3</a>
                      </li>
                      <li class="page-item">
                        <a href="#pablo" class="page-link">4</a>
                      </li>
                      <li class="page-item">
                        <a href="#pablo" class="page-link">5</a>
                      </li>
                      <li class="page-item">
                        <a href="#pablo" class="page-link">»</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 class="text-center">
                  Post your comment
                  <br />
                  <small>- Logged In User -</small>
                </h3>
                <div class="media media-post">
                  <a class="author float-left" href="#pablo">
                    <div class="avatar">
                      <img class="media-object" alt="64x64" src="./assets/img/faces/avatar.jpg" />
                    </div>
                  </a>
                  <div class="media-body">
                    <span class="bmd-form-group">
                      <grammarly-extension
                        class="_1KJtL"
                        style="position: absolute; top: 0px; left: 0px; pointer-events: none;"
                      >
                        <div
                          data-grammarly-part="highlights"
                          class="u_fNK"
                          style="position: absolute; top: 0px; left: 0px;"
                        >
                          <div
                            style="box-sizing: content-box; top: 0px; left: 0px; width: 621px; height: 128px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"
                          >
                            <div style="position: absolute; top: 0px; left: 0px;">
                              <div style="height: 1185px; width: 2541px;">
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-grammarly-part="button"
                          class="u_fNK"
                          style="position: absolute; top: 0px; left: 0px;"
                        >
                          <div
                            style="box-sizing: content-box; top: 0px; left: 0px; width: 621px; height: 128px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"
                          >
                            <div
                              style="position: absolute; transform: translate(-100%, -100%); top: 120px; left: 613px; width: auto; height: auto; pointer-events: all;"
                            >
                              <div
                                style="flex-direction: row; display: flex; pointer-events: auto;"
                              >
                                <div style="position: relative;"></div>
                                <div>
                                  <div class="_5WizN _1QzSN">
                                    <div class="_3YmQx">
                                      <div title="Protected by Grammarly" class="_3QdKe">&nbsp;</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </grammarly-extension>
                      <textarea
                        class="form-control"
                        placeholder="Write some nice stuff or nothing..."
                        rows="6"
                        spellcheck="false"
                      ></textarea>
                    </span>
                    <div class="media-footer">
                      <a href="#pablo" class="btn btn-primary btn-wd float-right">Post Comment</a>
                    </div>
                  </div>
          </div>-->
          <!-- end media-post -->
          <!-- <h3 class="text-center">
                  Post your comment
                  <br />
                  <small>- Not Logged In User -</small>
                </h3>
                <div class="media media-post">
                  <a class="author float-left" href="#pablo">
                    <div class="avatar">
                      <img class="media-object" alt="64x64" src="./assets/img/placeholder.jpg" />
                    </div>
                  </a>
                  <div class="media-body">
                    <form class="form">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group bmd-form-group">
                            <input type="text" class="form-control" placeholder="Your Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group bmd-form-group">
                            <input type="email" class="form-control" placeholder="Your email" />
                          </div>
          </div>-->
          <!-- </div>
                      <span class="bmd-form-group">
                        <textarea
                          class="form-control"
                          placeholder="Write some nice stuff or nothing..."
                          rows="6"
                        ></textarea>
          </span>-->
          <!-- <div class="media-footer">
                        <h6>Sign in with</h6>
                        <a href class="btn btn-just-icon btn-round btn-twitter">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href class="btn btn-just-icon btn-round btn-facebook">
                          <i class="fa fa-facebook-square"></i>
                        </a>
                        <a href class="btn btn-just-icon btn-round btn-google">
                          <i class="fa fa-google-plus-square"></i>
                        </a>
                        <a href="#pablo" class="btn btn-primary float-right">Post Comment</a>
          </div>-->
          <!-- </form>
          </div>-->
          <!-- end media-body -->
          <!-- </div> -->
          <!-- end media-post -->
          <!-- </div>
          </div>-->

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
