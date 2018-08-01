<template>
<!-- Header -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container">
        <img class="img-fluid mb-5 d-block mx-auto" src="@/assets/logo.png" alt="">
        <h1 class="text-uppercase mb-0">Nos Juntamos</h1>
         <hr>
          <button @click="createEvent" class="btn btn-outline-light btn-xl mb-4">
            <i class=""></i>
            Crea tu evento gratis!
          </button>   
          <h5 class="font-weight-light mb-0">Nos Juntamos es una aplicación que nace de la necesidad de organizar un grupo grande de personas con distintas disponibilidades de tiempo. Nuestra aplicación te permite enviarle un enlace a tus amigos con hasta 4 opciones de días y lugares, para que puedan votar, y así decidir dónde y cuándo juntarse!
        Entonces... nos juntamos?</h5>
      </div>
    </header>


</template>

<script>
import Instructions from '@/components/Instructions'

export default {
  components: {
    Instructions
  },
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {
    createEvent() {
      this.$router.push('event')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: 'Montserrat';
}

header.masthead {
  padding-top: calc(6rem + 72px);
  padding-bottom: 6rem;
}

header.masthead h1 {
  font-size: 3rem;
  line-height: 3rem;
}

header.masthead h2 {
  font-size: 1.3rem;
  font-family: 'Lato';
}

@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(6rem + 106px);
    padding-bottom: 6rem;
  }
  header.masthead h1 {
    font-size: 4.75em;
    line-height: 4rem;
  }
  header.masthead h2 {
    font-size: 1.75em;
  }

}

.btn:focus, .btn:hover, .btn:active {
  color:black;
}
.btn-primary {
  background-color: #18BC9C;
  border-color: #18BC9C;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background-color: #128f76;
  border-color: #128f76;
}

.btn-secondary {
  background-color: #2C3E50;
  border-color: #2C3E50;
}

.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {
  background-color: #1a252f;
  border-color: #1a252f;
}

.btn-xl {
  padding: 1rem 1.75rem;
  font-size: 1.25rem;
}


</style>
