<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-secondary navbar-static-top text-uppercase" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#">Nos Juntamos</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menus
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a @click="home" class="nav-link py-3 px-0 px-lg-3 rounded">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a @click="vota" class="nav-link py-3 px-0 px-lg-3 rounded" >Vota</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a @click="createEvent" class="nav-link py-3 px-0 px-lg-3 rounded">Crear Evento</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    createEvent () {
      this.$router.push('event')
    },
    home () {
      this.$router.push('/')
    },
    vota () {
      this.$router.push('vota')
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

section h2 {
  font-size: 2.25rem;
  line-height: 2rem;
}

@media (min-width: 992px) {
  section h2 {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}

.btn-xl {
  padding: 1rem 1.75rem;
  font-size: 1.25rem;
}

#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  font-family: 'Montserrat';
}

#mainNav .navbar-brand {
  color: #fff;
}

#mainNav .navbar-nav {
  margin-top: 1rem;
  letter-spacing: 0.0625rem;
}

#mainNav .navbar-nav li.nav-item a.nav-link {
  color: #fff;
}

#mainNav .navbar-nav li.nav-item a.nav-link:hover {
  background-color: lightskyblue;
}

#mainNav .navbar-nav li.nav-item a.nav-link:active, #mainNav .navbar-nav li.nav-item a.nav-link:focus {
  color: #fff;
}

#mainNav .navbar-nav li.nav-item a.nav-link.active {
  color: #18BC9C;
}

#mainNav .navbar-toggler {
  font-size: 80%;
  padding: 0.8rem;
}

@media (min-width: 992px) {
  #mainNav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;
  }
  #mainNav .navbar-brand {
    font-size: 2em;
    -webkit-transition: font-size 0.3s;
    -moz-transition: font-size 0.3s;
    transition: font-size 0.3s;
  }
  #mainNav .navbar-nav {
    margin-top: 0;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link.active {
    color: #fff;
    background: #18BC9C;
  }
  #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus, #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
    color: #fff;
    background: #18BC9C;
  }
  #mainNav.navbar-shrink {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  #mainNav.navbar-shrink .navbar-brand {
    font-size: 1.5em;
  }
}

</style>
