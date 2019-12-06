<template>
    <div>
        <NavBar/> <!-- navbar Component -->    
        <el-button primary plain="true" type="danger" 
                > Salir
        </el-button>

        <div class="card-cont">
            <el-card shadow="hover">
                <div class="app_title card-title">
                    <h2>Ingresar</h2>
                </div>
                <div class="card-body">
                    <el-form ref="singInData" :model="singInData" >
                        <!-- input correo -->
                        <el-form-item  
                            >
                            <el-input v-model="singInData.email" placeholder="Correo"></el-input>
                        </el-form-item>
                        
                        <!-- input passsword -->
                        <el-form-item 
                            >
                            <el-input v-model="singInData.password" show-password placeholder="Contraseña"></el-input>
                        </el-form-item>
                        
                        <div class="action_form">
                            <el-button type="primary" @click="logIn()">Primary</el-button>
                        </div>
                        
                    </el-form>
                </div>
            </el-card>
        </div>

    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import db from '../firebase/init'
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    components: {
        NavBar: NavBar
    },
    data() {
        return {
            singInData:{
                email:'',
                password:'',
            },
            error:''
            
        }
    },
    methods:{

        logIn(){
            if( this.singInData.email && this.singInData.password){
                console.log("intentando loguear")
                firebase
                    .auth()
                        .signInWithEmailAndPassword(this.singInData.email, this.singInData.password)
                            .then( (user) => {
                                alert('usuario conectado');
                                console.log(user) ;
                                this.$router.push('panel');
                            } ,(error) => console.error(error) );
            }
            else{
                console.log(
                    "todos los campos son requeridos"
                )   
            }
        },

        logOut(){
            firebase.auth().signOut()
            .then(() =>{
                alert("saliste de tu cuenta")
            } )
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import'../Stylus/main.styl'
    .app_title
        font-family myriad-bold
        font-size 1.5em
        padding 20px 0
        display flex
        justify-content center
        align-items center
        h2
            font-weight 400
    .card-cont
        background-color base_color
        height 100vh
        display flex
        justify-content center
        align-items center
    .el-card
        flex 0 0 35%
    .action_form
        display flex
        justify-content center
        .el-button
            width 100%
            padding: 15px 0;
.el-checkbox
    margin: 0 0 15px 0;

</style>
