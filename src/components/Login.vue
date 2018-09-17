<!--template>
  <div class="login">
    <h3>Acesso</h3>
    <input type="text" v-model="email" placeholder="E-mail"><br>
    <input type="password" v-model="password" placeholder="Senha"><br>
    <button v-on:click="signIn">Entrar</button>
    <p><router-link to="/sign-up"> Vamos criar uma conta? </router-link></p>

  </div>
</template-->

<template lang="html">
  <div class="login">
    <h3>Acesso</h3>
    <input type="text" v-model="email" placeholder="E-mail"><br>
    <input type="password" v-model="password" placeholder="Senha"><br>
    <button v-on:click="signIn">Entrar</button>

    <div id="firebaseui-auth-container"></div>

    <p><router-link to="/sign-up"> Vamos criar uma conta? </router-link></p>

  </div>
</template>
<script>

  import firebaseui from 'firebaseui'

  import firebase from 'firebase'

  //debugger
  export default {

    name: 'login',
    created(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.$router.replace('Hello')
        } else {
          this.$router.replace('Login')
        }
      });

    },
     mounted() {
       //debugger
    var uiConfig = {
      signInSuccessUrl: '/login',
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
    debugger
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    ui.start('#firebaseui-auth-container', uiConfig).then(

      function(user){
        self.$router.replace('Hello')
      },
      function (err) {
        alert('Oops...' + err.message)
      }
    );
    },
    data: function(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      signIn: function(){
        let self = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(

          function(user){
            self.$router.replace('Hello')
          },
          function (err) {
            alert('Oops...' + err.message)
          }
        );
      }
    }
  }
</script>
<style scoped>
  .login{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>


