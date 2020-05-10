<template>
  <div id="app">
    <nav
      class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a id="brand-name" class="navbar-brand" href="#">
            #letsRoll
          </a>
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
              <a id="home-tag" class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a id="positions-tag" class="nav-link" href="/positions">Browse Positions</a>
            </li>
            <li class="nav-item">
              <a id="signup-tag" class="nav-link" href="/signup">Signup</a>
            </li>
            <li class="dropdown nav-item">
              <a id="user-tag" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                <i class="material-icons">view_day</i>
                User
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a class="dropdown-item" href="/login">
                  <i class="material-icons">dns</i>
                  Login
                </a>
                <a class="dropdown-item" href="/logout">
                  <i class="material-icons">exit_to_app</i>
                  Logout
                </a>
                <a id="new-tag" class="dropdown-item" href="/positions/new">
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
#nav-bar,
.navbar {
  background-color: #323232;
}

#brand-name {
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
  color: #323232;
}

#home-tag,
#new-tag,
#positions-tag,
#nav-cat,
#signup-tag,
#user-tag,
#navbarDropdownMenuLink {
  color: #323232;
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

<script></script>
