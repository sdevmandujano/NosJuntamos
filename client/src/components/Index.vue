<template>
  <!-- Index for main info, login? and the createEvent button -->
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">Nos juntamos es una app que te permitirá organizarte con tus amigos</h1>
              <a @click="createEvent" class="btn btn-outline btn-xl js-scroll-trigger">Crea Un Evento (Gratis!)</a>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="">
                <div class="device">
                  <div class="screen ">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="@/assets/logo.png" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>


           <!--     <h5 class="mb-5">Nos Juntamos es una aplicación que nace de la necesidad de organizar un grupo grande de personas con distintas disponibilidades de tiempo. Nuestra aplicación te permite enviarle un enlace a tus amigos con hasta 4 opciones de días y lugares, para que puedan votar, y así decidir dónde y cuándo juntarse!
        Entonces... nos juntamos?</h5>
              <a href="" class="btn btn-outline btn-xl js-scroll-trigger" @click="createEvent">Crea un evento (gratis!)</a>-->
     
  
  
  
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

header.masthead {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  color: white;
  background: url("../assets/bg-pattern.png"), #594397;
  background: url("../assets/bg-pattern.png"), -webkit-linear-gradient(to left, #594397, #dc0030);
  background: url("../assets/bg-pattern.png"), linear-gradient(to left, #594397, #dc2430);
}

header.masthead .header-content {
  max-width: 500px;
  margin-bottom: 100px;
  text-align: center;
}

header.masthead .header-content h1 {
  font-size: 30px;
}

header.masthead .device-container {
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
}

header.masthead .device-container .screen img {
  border-radius: 3px;
  width: 320px;
}

@media (min-width: 992px) {
  header.masthead {
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
  }
  header.masthead .header-content {
    margin-bottom: 0;
    text-align: left;
  }
  header.masthead .header-content h1 {
    font-size: 50px;
  }
  header.masthead .device-container {
    max-width: 325px;
  }
}

.bg-primary {
  background: #fdcc52;
  background: -webkit-linear-gradient(#fdcc52, #fdc539);
  background: linear-gradient(#fdcc52, #fdc539);
}

.text-primary {
  color: #fdcc52;
}

.no-gutter > [class*='col-'] {
  padding-right: 0;
  padding-left: 0;
}

.btn-outline {
  color: white;
  border: 1px solid;
  border-color: white;
}

.btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {
  color: white;
  border-color: #fdcc52;
  background-color: #fdcc52;
}

.btn {
  border-radius: 300px;
  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
  letter-spacing: 2px;
  text-transform: uppercase;
}

.btn-xl {
  font-size: 11px;
  padding: 15px 45px;
}

</style>
