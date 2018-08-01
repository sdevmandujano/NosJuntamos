<template>
    <section id="Vota" class="bg-primary text-white text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <img class="img-fluid mb-5 d-block mx-auto" src="@/assets/logo.png" alt="">
            <h1 class="text-uppercase mb-0 masthead">Encuentra tu evento</h1>
             <hr>
          </div>
          <div class="col-md-10 col-lg-8 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input  class="form-control form-control-lg" placeholder="Introduce en numero del evento...">
                </div>
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-outline-light btn-xl">Votar!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Vota',
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

#Vota {
  padding-top: 3rem;
  padding-bottom: 14.5rem;
}
</style>
