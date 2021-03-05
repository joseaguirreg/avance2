<template>
    <v-app id="fondo">
        <v-container fill-height color="black" id="containerTarjeta">
            <v-row>
                <v-col class="text-center">
                    
                    <v-card id="form" elevation="9">
                        <h1>Registro de usuario</h1>
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
                                md="4"
                                class="text-center"
                                >
                                <v-text-field
                                    label="Asignaturas cursando"
                                    class="purple-input"
                                />
                                <v-btn 
                                class="mx-2 justify-center"
                                fab
                                dark
                                color="primary"
                                
                                >
                                <!-- falta centrar boton -->
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                                </v-col>

                                <v-col
                                cols="12"
                                md="4"
                                class="text-center"
                                >
                                <v-text-field
                                    label="Sitios preferidos"
                                    class="purple-input"
                                />
                                <v-btn 
                                class="mx-2 justify-center"
                                fab
                                dark
                                color="primary"
                                
                                >
                                <!-- falta centrar boton -->
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                                </v-col>

                                <v-col
                                cols="12"
                                md="4"
                                class="text-center"
                                >
                                <v-text-field
                                    class="purple-input"
                                    label="Actividades"
                                />
                                <v-btn 
                                class="mx-2 text-center"
                                fab
                                dark
                                color="primary"
                                
                                >
                                <!-- falta centrar boton -->
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                                </v-btn>
                                </v-col>


                                <v-col
                                cols="12"
                                class="text-center"
                                >
                                <v-btn 
                                    
                            rounded
                            class="boton mr-0 "
                            color="primary"
                                >
                                    Registrar
                                </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    </v-card>
                </v-col>


                <v-col  >
                    <v-container id="containerPulpo" fill-height >
                        
                        
                        <v-img
                            lazy-src="../assets/logoCircular.png"
                            max-height= "300px"
                            max-width="300px"
                            src="../assets/logoCircular.png"
                        ></v-img>
                    </v-container>

                    
                </v-col>
            </v-row>

        </v-container>
    </v-app>
</template>



<style >
    #fondo{
        /* background: black; */
        background: linear-gradient(135deg,#2c92f2 50%,#466fbb);
    }
    .container{
        padding:0px;
    }

    #form{
        padding: 30px;
    }
    #containerPulpo{
        justify-content: center;
    }

    

</style>