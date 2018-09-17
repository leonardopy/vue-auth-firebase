<template>
 <div>

  <div class="googleCalendar">
    <iframe src="https://calendar.google.com/calendar/embed?title=VUE%20Base&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=teste@gmail.com&amp;color=%231B887A&amp;ctz=America%2FSao_Paulo" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
<add-to-calendar  class="calendarButton"
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                  inline-template>
  <div>

    <google-calendar id="google-calendar" onclick="window.open(this.href);return false">
      <i class="fa fa-google"></i> ADICIONAR EVENTO
    </google-calendar>

  </div>
</add-to-calendar>
      <button class="calendarButton" v-on:click="logout">SAIR</button>
      </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Calendario teste'
    }
  },
  methods:{
      logout: function(){
        let self = this;
        firebase.auth().signOut().then(() =>{
            alert('Olá! Seja bem vindo!')
            self.$router.replace('Login')
        })
      },
      adicionarEvento: function(){
        let self = this;
        firebase.auth().signOut().then(() =>{
            alert('Olá! Seja bem vindo!')
            //self.$router.replace('Login')
        })
      }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}


.googleCalendar{
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 50%;
}

.googleCalendar iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.calendarButton{
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
  width: 100%;
}
</style>
