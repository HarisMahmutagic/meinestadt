<template>
  <div id="registerPage">
    <div class="header">
      <UnlogedHeader />
    </div>
    <div class="content">
      <div class="register">
        <p class="subject">I am a new user</p>

        <md-field class="name">
          <label id="nameLabel">Name</label>
          <md-input id="nameField"></md-input>
        </md-field>

        <md-field class="lastName">
          <label id="lastNameLabel">Surname</label>
          <md-input id="lastNameField"></md-input>
        </md-field>

        <md-field class="company">
          <label id="companyLabel">Company</label>
          <md-input id="companyField"></md-input>
        </md-field>

        <md-field class="email">
          <label id="emailLabel">Your e-mail address*</label>
          <md-input id="emailField" type="email"></md-input>
        </md-field>

        <md-field class="telephone">
          <label id="telephoneLabel">Telephone (+49)</label>
          <md-input id="telephoneField" type="telephone"></md-input>
        </md-field>

        <md-field class="password">
          <label id="passwordLabel">Password*</label>
          <md-input id="passwordField" type="password"></md-input>
        </md-field>

        <div class="termOfUse">
          <input type="checkbox" class="checkBox" />
          <label class="checkBoxText">
            <a href="" target="_blank"
              >I agree to the privacy policy and the terms of conditions.
            </a></label
          >
        </div>

        <div class="placeForButtons">
          <button class="loginButton">Log in</button>
          <button class="registerButton">Register now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UnlogedHeader from "../components/UnlogedHeader.vue";

export default {
  name: "Login",
  components: {
    UnlogedHeader,
  },
};
</script>

<style scooped>
#registerPage {
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

.register {
  width: 50vh;
  height: 72vh;
  background-color: white;
  position: absolute;
  right: 20vh;
  top: 15vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top: solid 3px red;
  display: grid;
  grid-template-columns: 50% 50;
  grid-template-rows: 17% 12% 12% 12% 12% 12% 8% 15%;
}

.subject {
  font-size: 2.5vh;
  font-weight: bolder;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: 5%;
  width: 90%;
  line-height: 300%;
  border-bottom: 2px solid rgb(204, 204, 204);
}

.name {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 85%;
  overflow: hidden;
  margin-left: 10%;
}

#nameLabel {
  font-size: 1.5vh;
}

#nameField {
  font-size: 1.6vh;
}

.lastName {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  overflow: hidden;
}

#lastNameLabel {
  font-size: 1.5vh;
}

#lastNameField {
  font-size: 1.6vh;
}

.company {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin-left: 5%;
}

#companyLabel {
  font-size: 1.5vh;
}

#companyField {
  font-size: 1.6vh;
}

.email {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin-left: 5%;
}

#emailLabel {
  font-size: 1.5vh;
}

#emailField {
  font-size: 1.6vh;
}

.telephone {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  width: 90%;
  margin-left: 5%;
}

#telephoneLabel {
  font-size: 1.5vh;
}

#telephoneField {
  font-size: 1.6vh;
}

.password {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  width: 90%;
  overflow: hidden;
  margin-left: 5%;
}

#passwordLabel {
  font-size: 1.5vh;
}

#passwordField {
  font-size: 1.6vh;
}

.termOfUse {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
  margin-left: 5%;
  width: 90%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 100%;
}

.checkBox {
  width: 2vh;
  height: 2vh;
  cursor: pointer;
  align-self: center;
}

.checkBoxText {
  font-size: 1.5vh;
  color: grey;
  align-self: center;
  cursor: pointer;
}

.checkBoxText:hover {
  text-decoration-line: underline;
}

.placeForButtons {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  margin-left: 5%;
  width: 90%;
  margin-top: 1%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
}

.loginButton {
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
  cursor: pointer;
  font-weight: 500;
}

.loginButton:hover {
  background-color: #547cfc;
}

.registerButton {
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
  font-weight: 500;
  cursor: pointer;
}

.registerButton:hover {
  background-color: #d13f4b;
}
</style>
