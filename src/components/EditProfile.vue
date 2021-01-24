<template>
  <div class="editProfile">
    <div class="background">
      <img class="personImage" src="../assets/person.png" />
      <div class="idPerson">Full Name</div>

      <div class="email">emailaddress@email.com</div>
    </div>
    <div class="nav">
      <div class="navBar">Profil</div>
    </div>
    <div class="content">
      <div class="subject">Edit Profile</div>
      <div class="saveButton">Edit profile</div>
      <div class="details">
        <div class="detailsSubject">Details</div>
        <div class="firstName">Test</div>
        <div class="valueFirstName">1154545</div>
        <div class="lastName">Tests</div>
        <div class="valueLastName">45913135</div>
        <div class="uploadImage">
          <div class="changeImg">Change Avatar:</div>
          <label for="avatar" class="avatarLabel">Chose Image</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editProfile {
  width: 100vh;
  height: 70vh;
  border: 1px solid black;
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15vh 5vh 50vh;
  background-color: rgb(245, 245, 245);
}

.background {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: linear-gradient(
    100.15deg,
    #d21e2b -4.85%,
    rgba(236, 97, 97, 0) 130%
  );
  display: flex;
  flex-direction: row;
}

.personImage {
  width: 10vh;
  height: 10vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 5%;
  margin-top: 7%;
  z-index: 1;
}

.idPerson {
  font-size: 1.8vh;
  font-weight: 600;
  margin-left: 3%;
  color: white;
  line-height: 1000%;
}

.email {
  font-size: 1.3vh;
  color: white;
  line-height: 1800%;
  margin-left: -8.7%;
}

.nav {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: white;
  width: 98%;
  height: 90%;
  align-self: center;
  margin-left: 1%;
}

.navBar {
  margin-left: 20%;
  font-size: 1.8vh;
  font-weight: bold;
  width: 5%;
  text-decoration: red 0.4vh;
  text-decoration-line: underline;
  line-height: 200%;
}

.content {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: white;
  width: 90%;
  margin-left: 5%;
  height: 97%;
  margin-top: 1%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 10% 70% 20%;
}

.subject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2.2vh;
  font-weight: 600;
  line-height: 200%;
  position: relative;
  left: 5%;
}

.saveButton {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 13vh;
  height: 2.6vh;
  font-size: 1.4vh;
  margin: auto;
  background-color: #d41c2c;
  text-align: center;
  color: white;
  line-height: 190%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}

.saveButton:hover {
  background-color: #d13f4b;
}

.details {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border-top: 0.1vh solid rgb(245, 245, 245);
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: 10% 10% 10% 10% 60%;
}

.detailsSubject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2vh;
  font-weight: 700;
  position: relative;
  left: 3.5%;
  line-height: 200%;
}

.firstName {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  position: relative;
  left: 3.5%;
  line-height: 300%;
  font-size: 1.5vh;
}

.valueFirstName {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  position: relative;
  left: 15%;
  line-height: 300%;
  font-size: 1.5vh;
  font-weight: 600;
}

.lastName {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  position: relative;
  left: 3.5%;
  line-height: 300%;
  font-size: 1.5vh;
}

.valueLastName {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  position: relative;
  left: 15%;
  line-height: 300%;
  font-size: 1.5vh;
  font-weight: 600;
}

.uploadImage {
  display: flex;
  flex-direction: row;
  margin-left: 3%;
}

.changeImg {
  font-size: 1.5vh;
  line-height: 400%;
}

#avatar {
  display: none;
}

.avatarLabel {
  width: 15vh;
  height: 3vh;
  background-color: #d41c2c;
  color: white;
  border: 0.1vh solid rgb(199, 199, 199);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.5vh;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  top: 45%;
  left: 2%;
  text-align: center;
  line-height: 200%;
}

.avatarLabel:hover {
  background-color: #d13f4b;
}
</style>
