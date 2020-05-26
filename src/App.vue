<template>
  <div id="app">
    <nav
      v-bind:class="`navbar navbar-color-on-scroll bg${navClass} fixed-top navbar-expand-lg`"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a v-bind:id="`brand-name${white}`" class="navbar-brand" href="#">#letsRoll</a>
          <button
            v-bind:id="`colapse-button${white}`"
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/" v-bind:id="`home-tag${white}`">Home</router-link>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/positions-index" v-bind:id="`positions-tag${white}`">Positions</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a v-if="!isLoggedIn()" class="nav-link">
                <router-link v-bind:id="`signup-tag${white}`" to="/signup">Signup</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a v-if="!isLoggedIn()" v-bind:id="`login-tag${white}`" class="nav-link">
                <router-link v-bind:id="`login-tag${white}`" to="/login">Login</router-link>
              </a>
            </li>
            <li v-if="isLoggedIn()" class="dropdown nav-item">
              <a
                v-if="isLoggedIn()"
                v-bind:id="`user-tag${white}`"
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i class="material-icons">view_day</i>
                User
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a v-if="isLoggedIn()" class="dropdown-item">
                  <i class="material-icons">face</i>
                  <router-link v-bind:id="`profile-tag${white}`" v-bind:to="`/user-profile/${getUserId()}`">
                    My Profile
                  </router-link>
                </a>

                <a class="dropdown-item">
                  <i class="material-icons">create</i>
                  <router-link v-bind:id="`new-tag${white}`" to="/positions/new">Add New Position</router-link>
                </a>
                <a v-if="isLoggedIn()" class="dropdown-item">
                  <i class="material-icons">exit_to_app</i>
                  <router-link v-bind:id="`logout-tag${white}`" to="/logout">
                    Logout
                  </router-link>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
    <footer class="footer footer-default">
      <div class="container">
        <div class="copyright float-center">
          &copy;2020 by
          <a>Moreno Biage</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Text Styles:
font-family: 'Permanent Marker', cursive;
font-family: 'Prompt', sans-serif; */

#brand-name {
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;

  color: black;
}

#brand-name-white {
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;

  color: #ffffff;
}

#home-tag-white,
#positions-tag-white,
#nav-cat-white,
#signup-tag-white,
#login-tag-white,
#user-tag-white,
#colapse-button-white,
#navbarDropdownMenuLink-white {
  color: #ffffff;
  font-family: "Prompt", sans-serif;
  font-size: 1.25rem;
}

#home-tag,
#positions-tag,
#nav-cat,
#signup-tag,
#login-tag,
#user-tag,
#colapse-button,
#navbarDropdownMenuLink {
  color: black;
  font-size: 1.25rem;
}
#home-tag,
#positions-tag,
#nav-cat,
#user-tag,
#signup-tag,
#login-tag {
  font-family: "Prompt", sans-serif;
}

#navbarDropdownMenuLink,
#logout-tag,
#profile-tag,
#new-tag {
  font-family: "Prompt", sans-serif;
  color: black;
}

.nav-item {
  padding: 0 18px;
}

.nav-link {
  font-size: 1.5rem;
  font-family: "Montserrat-Light";
}

#title {
  background-color: #323232;
  color: #fff;
  text-align: left;
}

#title .container-fluid {
  padding: 1% 12%;
}
</style>

<script>
export default {
  data: function() {
    return {
      white: "",
      navClass: "-white",
      userName: "",
    };
  },
  watch: {
    $route(Home) {
      this.white = "";
      this.navClass = "-white";
    },
  },
  created: function() {
    if (this.$route.path === "/") {
      this.white = "-white";
      this.navClass = "-dark";
    } else {
      this.white = "";
      this.navClass = "-white";
    }
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        this.userName = localStorage.getItem("name");

        return true;
      } else {
        return false;
      }
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
