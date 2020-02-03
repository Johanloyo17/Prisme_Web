<template>
    <div class="navbar ">
        <div class="navbar_brand">Page</div>
        
        <div class="navbar_items h-100 flex_y_center">
            <span class="navbar_items_item color-sucess">service</span>
            <span class="navbar_items_item">Proyect</span>
            <router-link to="panel">
                <span class="navbar_items_item">About us</span>
            </router-link>
        </div>

        <div class="navbar_actions" >
            <div v-show="!isUser">
                <router-link to="Register" >
                    <el-button type="info" plain icon="el-icon-star-off">
                        Register
                    </el-button>
                </router-link>    
                <router-link to="LogIn">
                    <el-button type="info" plain rounded>Log in</el-button>
                </router-link>
            </div>
            <div v-show="isUser">
                <span>
                    {{profile}}
                </span>

            </div>

        </div>

    </div>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/auth'
import firebase from 'firebase'
export default {
    data() {
        return {
            profile:{
                name: '',
                email: '',
            } ,
            isUser:false
        }
    },
    methods: {
       
    },
    mounted() {
        // let isUser = firebase.auth().currentUser
        // console.log(isUser)
        // this.isUser = isUser
        var user = firebase.auth().currentUser;
        
        if (user != null) {
            this.isUser= true;
            this.profile.name = user.displayName;
            this.profile.email = user.email;
            console.log(user)

        }
    },
}
</script>

<style lang="stylus" scoped>
    .navbar
        grid-column: 1/3;
        padding 0 15px
        
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
        display grid 
        grid-template-columns 3fr 3fr 4fr
        // position: sticky;
        // top: 0;
        // left: 0;
        // z-index: 999999;


        &_brand
            font-size: 2.6em;

        &_items
            display flex
            flex 0 0 50vw
            justify-content space-around
            font-size: 1.2em;
            &_item
                height: 100%;
                align-self: center;
                display: flex;
                align-items: center;
                border-bottom: 4px transparent solid;
                transition: all .35s ease-out;
                cursor pointer
                padding: 0 10px;
                font-weight 500
                &:hover
                    border-bottom: 4px black solid;
        
        &_actions
            display flex
            align-items center
            justify-content flex-end
</style>