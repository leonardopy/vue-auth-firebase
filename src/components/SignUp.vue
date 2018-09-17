<template>
  <div class="sign-up">
    <h3>Vamos criar uma nova conta!</h3>
    <input type="text" v-model="email" placeholder="E-mail"><br>
    <input type="password" v-model="password" placeholder="Senha"><br>
    <button v-on:click="signUp">Criar conta</button>
    <p><router-link to="/login">Voltar ao login.</router-link></p>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    name: 'signUp',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods:{
      signUp: function(){
        let self = this;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function(user){
            self.$router.replace('Hello')
          },
          function (err) {
            alert('Oops...' + user + '   ---'+ err.message)
          }
        );
      }
    }
  }
</script>
<style scoped>
  .signUp{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
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
