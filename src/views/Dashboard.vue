<template>
<v-app>
  <v-app-bar dense color="#35A1F4" dark>
    <template v-slot:extension>
      <h1>pulpo.cl</h1>
      <v-tabs>
        
        <v-tab to="/dashboard">Dashboard</v-tab>
        <v-tab to="/historico">Histórico</v-tab>
        <v-tab to="ajustes">Ajustes</v-tab>
        
      </v-tabs>
      <v-btn id="botonRegistro"
                        rounded
                        class="boton mr-0 "
                        color="deep-orange"
                        to="/login"
                      >
                        Cerrar Sesión
                      </v-btn>
    </template>

  </v-app-bar>
  
    <v-container class="d-flex justify-center mb-6" >
      <v-avatar >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      > 
    </v-avatar>
    </v-container>
    <h3 class="justify-center d-flex">Jose Aguirre</h3>
    <h4 class="justify-center d-flex">Ingeniería Civil Industrial mención Informática</h4>
    <h5 class="justify-center d-flex">UFRO</h5>

 <!-- PROGRESS BAR --> 
<div>
    <v-progress-linear
      color="light-blue"
      height="10"
      value="10"
      striped
    ></v-progress-linear>
    <br>
    <v-progress-linear
      height="10"
      value="45"
      striped
      color="lime"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      value="60"
      height="10"
      striped
      color="deep-orange"
    ></v-progress-linear>
  </div>
<!-- PROGRESS BAR END --> 

<!-- PANELES -->
<v-row>
  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Tareas
          </v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
            <v-btn color="green">
              <v-icon dark>
                mdi-check
              </v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
            <v-btn color="green">
              <v-icon dark>
                mdi-check
              </v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
            <v-btn color="green">
              <v-icon dark>
                mdi-check
              </v-icon>
            </v-btn>
          </v-list-item>
<div class="text-center">
          <v-btn 
      class="mx-2 justify-center"
      fab
      dark
      color="#35A1F4"
     
    >
    <!-- falta centrar boton -->
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
</div>
    </v-card>


  </v-col>

  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="280"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Accesos directos
          </v-card-text>

           <v-container>
  <v-row no-gutters>
    <v-col md="6">
      <img :src="require('../assets/intranet.png')" alt="" width="180" >
    </v-col>
    <v-col md="6">
      <img :src="require('../assets/campus.png')" alt="" width="180" height="60">
    </v-col>
  </v-row> 
  <v-row no-gutters>
    <v-col md="6">
      <img :src="require('../assets/gmail.png')" alt="" width="180">
    </v-col>
    <v-col md="6">
      <img :src="require('../assets/buda.png')" alt="" width="200" height="67">
    </v-col>
  </v-row> 

</v-container>
 
        </v-card>
  </v-col>

  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Noticias
          </v-card-text>
        </v-card>
  </v-col>
</v-row>
<!-- PANELES END -->
<br>
<br>
<!-- SPARKLINES -->
<v-row>
  <v-col>
      <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
         
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Productividad semanal
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Ver Histórico
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
    
  <v-col>
    <v-card
    class="mx-auto text-center"
    color="blue"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value2"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Horas para tu bienestar
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Ver histórico
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>

<!-- SPARKLINES END -->

</v-app>
</template>

<script>
export default {
    data: () => ({
      value: [
        4,
        5,
        7,
        2,
        8,
        3,
        2,
      ],
      value2: [
        9,
        5,
        4,
        3,
        5,
        4,
        5,

      ],
    }),
  }
</script>

<style>
  .v-tabs-bar{
    float:right !important;
  }

  .v-tab{
    text-transform: none !important;
  }
</style>