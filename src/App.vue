<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg bg-dark">
      <div class="container">
        <a id="brand-name" class="navbar-brand" href="#">#letsRoll</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a id="home-tag" class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a id="positions-tag" class="nav-link" href="/positions">Browse Positions</a>
            </li>
            <li class="nav-item">
              <a id="new-tag" class="nav-link" href="/positions/new">New Position</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >User</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/login">Login</a>
                <a class="dropdown-item" href="/signup">Signup</a>
                <a class="dropdown-item" href="/logout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
/* .navbar {
  padding: 0 0 2rem;
} */

#nav-bar,
.navbar {
  background-color: #323232;
}

#brand-name {
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
  color: #ffc93c;
}

#home-tag,
#new-tag,
#positions-tag,
#nav-cat,
#navbarDropdownMenuLink {
  color: #ffc93c;
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
</script>
