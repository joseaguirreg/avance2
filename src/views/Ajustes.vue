<template>
  <v-app>
      <v-app-bar dense color="#35A1F4" dark class="auxnav">
    <template v-slot:extension>
      <h1>pulpo.cl</h1>
      <v-tabs>
        
        <v-tab to="/dashboard">Dashboard</v-tab>
        <v-tab to="/historico">Histórico</v-tab>
        <v-tab to="/ajustes">Ajustes</v-tab>
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

<v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edit Profile
            </div>

            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Nombre completo"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Correo electrónico"
                    class="purple-input"
                  />
                </v-col>


                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Universidad"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Contraseña"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Confirmar contraseña"
                  />
                </v-col>


                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn 
                    
              rounded
              class="boton mr-0 "
              color="primary"
                  >
                    Actualizar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              Estudiante
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Benjamín Pardo
            </h4>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>

  </v-app>
</template>

<script>
export default {

}
</script>

<style>
.auxnav{
        max-height: 95px
    }


</style>