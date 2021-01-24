<template>
  <div class="contactUs">
    <div class="subject">Send us a message</div>

    <md-field class="name">
      <label id="nameLabel">Name*</label>
      <md-input id="nameField"></md-input>
    </md-field>

    <md-field class="lastName">
      <label id="lastNameLabel">Last name*</label>
      <md-input id="LastNameField"></md-input>
    </md-field>

    <md-field class="email">
      <label id="emailLabel">Email*</label>
      <md-input id="emailField"></md-input>
    </md-field>

    <textarea
      class="message"
      name="message"
      cols="30"
      rows="10"
    ></textarea>

    <button class="send">Send</button>
  </div>
</template>

<style scoped>
.contactUs {
  width: 60vh;
  height: 70vh;
  border: 1px solid black;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10vh 20vh 6vh 24vh 10vh;
  background-color: white;
}

.subject {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: 5%;
  width: 90%;
  border-bottom: 0.1vh solid rgb(204, 204, 204);
  font-size: 3.5vh;
  text-align: center;
  line-height: 300%;
  color: grey;
}

.name {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-left: 10%;
  width: 85%;
  align-self: center;
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
  margin-left: 5%;
  width: 85%;
  align-self: center;
}

#lastNameLabel {
  font-size: 1.5vh;
}

#LastNameField {
  font-size: 1.6vh;
}

.email {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-left: 5%;
  width: 90%;
  align-self: center;
}

#emailLabel {
  font-size: 1.5vh;
}

#emailField {
  font-size: 1.6vh;
}

.message {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-left: 5%;
  width: 90%;
  margin-top: 20%;
  font-size: 1.5vh;
  resize: none;
  background-color: rgb(247, 247, 247);
}

.send {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  width: 20vh;
  height: 4vh;
  margin: auto;
  background-color: #d41c2c;
  color: white;
  border: 1px solid rgb(199, 199, 199);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 2vh;
  cursor: pointer;
  font-weight: 500;
}

.send:hover {
  background-color: #d13f4b;
}
</style>
