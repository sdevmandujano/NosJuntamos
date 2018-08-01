<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#">Nos Juntamos</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menus
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded " href="#">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded " href="#">Vota</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded " href="#">Crear Evento</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

hr.star-light,
hr.star-dark {
  max-width: 15rem;
  padding: 0;
  text-align: center;
  border: none;
  border-top: solid 0.25rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
}

hr.star-light:after,
hr.star-dark:after {
  position: relative;
  top: -.8em;
  display: inline-block;
  padding: 0 0.25em;
  content: '\f005';
  font-family: FontAwesome;
  font-size: 2em;
}

hr.star-light {
  border-color: #fff;
}

hr.star-light:after {
  color: #fff;
  background-color: #18BC9C;
}

hr.star-dark {
  border-color: #2C3E50;
}

hr.star-dark:after {
  color: #2C3E50;
  background-color: white;
}

section {
  padding: 6rem 0;
}

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

.btn-social {
  width: 3.25rem;
  height: 3.25rem;
  font-size: 1.25rem;
  line-height: 2rem;
}

.scroll-to-top {
  z-index: 1042;
  right: 1rem;
  bottom: 1rem;
  display: none;
}

.scroll-to-top a {
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(33, 37, 41, 0.5);
  line-height: 3.1rem;
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
  color: #18BC9C;
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
