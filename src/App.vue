<template>
  <div id="app">
    <section class="colored-section" id="title">
      <div class="container-fluid">
        <div id="nav">
          <nav class="navbar navbar-expand-xl navbar-light">
            <a class="navbar-brand" id="brand-name" href="#">#letsRoll</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/positions">Browse Positions</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/positions/new">New Position</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/login">Login</a>
                    <a class="dropdown-item" href="/signup">Signup</a>
                    <a class="dropdown-item" href="/logout">Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <router-view />
  </div>
</template>

<style>
body {
  background: black;
}
.navbar {
  padding: 0 0 2rem;
}

#brand-name {
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
}

.nav-item {
  padding: 0 18px;
}

.nav-link {
  font-size: 1.2rem;
  font-family: "Montserrat-Light";
}

#title {
  background-color: #323232;
  color: #fff;
  text-align: left;
}

#title .container-fluid {
  padding: 1% 15%;
}
</style>
