<template>
  <div id="loginPage">
    <div class="header">
      <UnlogedHeader />
    </div>
    <div class="content">
      <div class="login" v-if="forgotPassword == false">
        <div class="textForHeader">
          <p class="subject">I am already a user</p>
          <div class="text">Log in with your email address and password</div>
        </div>

        <md-field class="emailForm">
          <label id="emailLabel">Email</label>
          <md-input class="emailField"></md-input>
        </md-field>

        <md-field class="passwordForm">
          <label id="passwordLabel">Password</label>
          <md-input type="password" class="passwordField"></md-input>
        </md-field>

        <p class="forgotPassword" v-on:click="forgotpassword">
          Forgot password ?
        </p>
        <div class="placeForButtons">
          <button class="loginButton">Log in</button>
          <button class="registerButton">Register now</button>
        </div>
        <div class="extraText">Some text here !</div>
      </div>

      <div class="forgotPasswordPage" v-if="forgotPassword == true">
        <div class="forgotSubject">Forgot password ?</div>
        <md-field class="forgotEmail">
          <label id="forgotEmailLabel">Email</label>
          <md-input id="forgotEmailField"></md-input>
        </md-field>
        <div class="forgotButton">SEND RECOVERY EMAIL</div>
        <div class="justRemembered">Just remembered ?</div>
        <div class="backToLogin" v-on:click="forgotpassword">SIGN IN</div>
      </div>
    </div>
  </div>
</template>

<script>
import UnlogedHeader from "../components/UnlogedHeader.vue";
//ss
export default {
  name: "Login",
  components: {
    UnlogedHeader,
  },
  data() {
    return {
      forgotPassword: false,
    };
  },

  methods: {
    forgotpassword() {
      this.forgotPassword = !this.forgotPassword;
    },
  },
};
</script>

<style scooped>
#loginPage {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 7vh;
  background-color: white;
}

.content {
  width: 100%;
  height: 95%;
  background: linear-gradient(
      346.15deg,
      #d21e2b -4.85%,
      rgba(204, 34, 34, 0) 67.87%
    ),
    url("../assets/Frankfurt.jpg"), no-repeat;
  background-size: cover;
}

.login {
  width: 50vh;
  height: 49vh;
  background-color: white;
  position: absolute;
  right: 25vh;
  top: 25vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top: solid 3px red;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 12vh 11vh 7vh 6vh 6vh 3vh;
}

.forgotPasswordPage {
  width: 50vh;
  height: 49vh;
  background-color: white;
  position: absolute;
  right: 25vh;
  top: 25vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top: solid 3px red;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.forgotSubject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 3vh;
  font-weight: bolder;
  text-align: center;
  line-height: 300%;
}

.forgotEmail {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin-left: 5%;
}

#forgotEmailLabel {
  font-size: 1.5vh;
}

#forgotEmailField {
  font-size: 1.6vh;
  height: 100%;
}

.forgotButton {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 20vh;
  height: 3.5vh;
  margin: auto;
  background-color: #d41c2c;
  color: white;
  border: 1px solid rgb(199, 199, 199);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5vh;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  line-height: 220%;
}

.forgotButton:hover {
  background-color: #d13f4b;
}

.justRemembered {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 2vh;
  font-weight: bolder;
  text-align: center;
  line-height: 300%;
}

.backToLogin {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  font-size: 2vh;
  justify-self: center;
  font-weight: bolder;
  text-align: center;
  line-height: 300%;
  color: #d41c2c;
  cursor: pointer;
  width: 20%;
  height: 50%;
}

.backToLogin:hover {
  color: #547cfc;
}

.textForHeader {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: 5%;
  width: 90%;
  border-bottom: 0.1vh solid rgb(204, 204, 204);
}

.subject {
  font-size: 3vh;
  font-weight: bolder;
  line-height: 120%;
}

.text {
  font-size: 1.5vh;
  line-height: 120%;
}

.emailForm {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-left: 5%;
  width: 90%;
  align-self: center;
}

#emailLabel {
  font-size: 1.5vh;
}

.emailField {
  font-size: 1.6vh;
}

.passwordForm {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-left: 5%;
  width: 90%;
  align-self: center;
}

#passwordLabel {
  font-size: 1.5vh;
}

.passwordField {
  font-size: 1.6vh;
}

.forgotPassword {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-left: 5%;
  width: 90%;
  font-size: 1.5vh;
  font-weight: 600;
  color: red;
  cursor: pointer;
  line-height: 150%;
}

.forgotPassword:hover {
  text-decoration-line: underline;
}

.placeForButtons {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  width: 92%;
  margin-left: 4%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
}

.loginButton {
  width: 20vh;
  height: 3.5vh;
  margin: auto;
  background-color: #d41c2c;
  color: white;
  border: 1px solid rgb(199, 199, 199);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5vh;
  cursor: pointer;
  font-weight: 500;
}

.loginButton:hover {
  background-color: #d13f4b;
}

.registerButton {
  width: 20vh;
  height: 3.5vh;
  margin: auto;
  background-color: #ffffff;
  color: black;
  border: 1px solid rgb(199, 199, 199);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5vh;
  font-weight: 500;
  cursor: pointer;
}

.registerButton:hover {
  background-color: #547cfc;
}

.extraText {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  width: 90%;
  line-height: 130%;
  font-size: 1.5vh;
  margin-left: 5%;
}
</style>
