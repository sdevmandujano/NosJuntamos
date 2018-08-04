<template>
    <section id="VotoExitoso" class="bg-warning text-white text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <img class="img-fluid mb-5 d-block mx-auto" src="@/assets/logo.png" alt="">
            <h1 class="text-uppercase mb-0 masthead">Gracias, Tu voto ha sido registrado!</h1>
             <hr>
          </div>
          <div class="col-md-10 col-lg-8 mx-auto">
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'votoexitoso',
  data () {
    return {

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

section.masthead h1 {
  font-size: 3rem;
  line-height: 3rem;
}

#VotoExitoso {
  padding-top: 3rem;
  padding-bottom: 20rem;
}
</style>
