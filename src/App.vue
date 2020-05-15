<template>
  <div id="app">
    <nav
      class="navbar navbar-color-on-scroll bg-white fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a v-bind:id="`brand-name${white}`" class="navbar-brand" href="#">#letsRoll</a>
          <button
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
              <a v-bind:id="`home-tag${white}`" class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a v-bind:id="`positions-tag${white}`" class="nav-link" href="/positions">Positions</a>
            </li>
            <li class="nav-item">
              <a
                v-if="!isLoggedIn()"
                v-bind:id="`signup-tag${white}`"
                class="nav-link"
                href="/signup"
              >Signup</a>
            </li>
            <li class="nav-item">
              <a
                v-if="!isLoggedIn()"
                v-bind:id="`signup-tag${white}`"
                class="nav-link"
                href="/login"
              >Login</a>
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
                <a
                  v-bind:id="`logout-tag${white}`"
                  v-if="isLoggedIn()"
                  class="dropdown-item"
                  href="/logout"
                >
                  <i class="material-icons">exit_to_app</i>
                  Logout
                </a>
                <a v-bind:id="`new-tag${white}`" class="dropdown-item" href="/positions/new">
                  <i class="material-icons">create</i>
                  New Position
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

#sectionsNav {
  background-color: #ededed;
}

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
#new-tag-white,
#positions-tag-white,
#nav-cat-white,
#signup-tag-white,
#user-tag-white,
#navbarDropdownMenuLink-white,
#logout-tag-white {
  color: #ffffff;
  font-family: "Prompt", sans-serif;
  font-size: 1.25rem;
}

#home-tag,
#new-tag,
#positions-tag,
#nav-cat,
#signup-tag,
#user-tag,
#navbarDropdownMenuLink,
#logout-tag {
  color: black;
  font-family: "Prompt", sans-serif;
  font-size: 1.25rem;
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
      userName: parseInt(localStorage.getItem("name")),
      white: "",
    };
  },
  created: function() {
    if (this.$route.path === "/") {
      this.white = "-white";
    }
  },
  methods: {
    isLoggedIn: function() {
      console.log(" i am checking if i'm logged in");
      if (localStorage.getItem("jwt")) {
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
