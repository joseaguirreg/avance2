<template>
  <v-app>
      <v-app-bar dense color="#35A1F4" dark class="auxnav">
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
    <br>
    <v-row>
        <v-col>
            <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="deep-orange"
      dark
    >

      <v-toolbar-title>Universidad</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-toolbar>

    <v-list two-line>
      <v-list-item-group class="prod"
        v-model="model"
      >
        <template v-for="(item, index) in items1">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items1.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
        </v-col>

        <v-col>
            <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="light-blue"
      dark
    >

      <v-toolbar-title>Trabajo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-toolbar>

    <v-list two-line>
      <v-list-item-group class="prod"
        v-model="model"
      >
        <template v-for="(item, index) in items2">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items2.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
        </v-col>

         <v-col>
            <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="lime"
      dark
    >

      <v-toolbar-title>Bienestar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-toolbar>

    <v-list two-line>
      <v-list-item-group class="prod"
        v-model="model"
      >
        <template v-for="(item, index) in items3">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items3.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
        </v-col>
    </v-row>

  </v-app>
</template>

<script>
export default {
data: () => ({
      selected: [2],
      items1: [
        {
          action: '15 min',
          headline: 'Logística',
          title: 'Hacer Informe 3',
        },
        {
          action: '2 hr',
          headline: 'PEP',
          title: 'Estudiar prueba 1',
        },
        {
          action: '6 hr',
          headline: 'Logística',
          title: 'Ver video clase 12 Enero',
        },
        {
          action: '12 hr',
          headline: 'Electivo',
          title: 'Terminar vistas proyecto VUE',
        },
        {
          action: '18hr',
          headline: 'Cálculo 2',
          title: 'Preparar ayudantía 5',
        },
      ],
      items2: [
        {
          action: '15 min',
          headline: 'Jefe',
          title: 'Enviar balance Diciembre',
        },
        {
          action: '2 hr',
          headline: 'Dpto Fomento',
          title: 'Distribuir presupuesto Febrero',
        },
        {
          action: '6 hr',
          headline: 'Dr Gomez',
          title: 'Asistir a capacitación',
        },
      ],
      items3: [
        {
          action: '15 min',
          headline: 'Pista ufro',
          title: 'Salir a correr',
        },
        {
          action: '2 hr',
          headline: 'veg',
          title: 'Cocinar lasaña',
        },
        {
          action: '6 hr',
          headline: 'disney+',
          title: 'Ver the mandalorian',
        },
        {
          action: '6 hr',
          headline: 'ciclovia',
          title: 'andar en bicicleta hasta labranza',
        },
        {
          action: '6 hr',
          headline: 'profe lorena',
          title: 'hacer yoga',
        },
        {
          action: '6 hr',
          headline: '',
          title: 'torneo pubg',
        }
      ]
    }),
}
</script>

<style>
    .auxnav{
        max-height: 95px
    }
</style>