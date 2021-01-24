<template>
  <div class="myCourses">
    <div class="headerCourse">
      <div class="newCourse" v-on:click="goToNew">Create new course</div>
      <div class="editCourse" v-on:click="goToEdit">Edit course</div>
      <div class="uploadVideo" v-on:click="goToUpload">Upload video</div>
    </div>
    <div class="detailsCourse">
      <div class="newCourseDetails" v-if="whereAmI == 'NewCourse'">
        <md-field class="nameForm">
          <label id="nameLabel">Course Name*</label>
          <md-input id="nameField"></md-input>
        </md-field>
        <div class="uploadNewIcon">
          <label for="icon" class="iconLabel">Choose Icon</label>
          <input
            type="file"
            id="icon"
            name="icon"
            accept="image/*"
          />
        </div>

<div class="uploadNewBackground">
          <label for="background" class="backgroundLabel"
          >Choose Background</label
        >
        <input
          type="file"
          id="background"
          name="background"
          accept="image/*"
        />
</div>

<div class="uploadNewDocs">
        <label for="docs" class="docsLabel">Upload Documentation</label>
        <input type="file" id="docs" name="docs" />
</div>
<div class="aboutCourse">
  <div class="aboutSubject">About Course:</div>
          <textarea
          class="aboutCourseArea"
          name="about"
          cols="30"
          rows="10"
        ></textarea>
</div>
        <button class="saveButtonForNew">CREATE</button>
</div>


      <div class="editCourseDetails" v-if="whereAmI == 'EditCourse'">


<md-field class="nameFormForEdit">
          <label id="nameLabelForEdit">Course Name*</label>
          <md-input id="nameFieldForEdit"></md-input>
        </md-field>
        <div class="uploadNewIconForEdit">
          <label for="iconEdit" class="iconLabelForEdit">Choose Icon</label>
          <input
            type="file"
            id="iconForEdit"
            name="iconEdit"
            accept="image/*"
          />
        </div>

<div class="uploadNewBackground">
          <label for="backgroundEdit" class="backgroundLabelForEdit"
          >Choose Background</label
        >
        <input
          type="file"
          id="backgroundForEdit"
          name="backgroundEdit"
          accept="image/*"
        />
</div>

<div class="uploadNewDocs">
        <label for="docsEdit" class="docsLabelForEdit">Upload Documentation</label>
        <input type="file" id="docsForEdit" name="docsEdit" />
</div>
<div class="aboutCourseForEdit">
  <div class="aboutSubjectForEdit">About Course:</div>
          <textarea
          class="aboutCourseAreaEdit"
          name="about"
          cols="30"
          rows="10"
        ></textarea>
</div>
        <button class="saveButtonForEdit">SAVE</button>







        
      </div>





      <div class="uploadVideoDetails" v-if="whereAmI == 'UploadVideo'">
        <div class="uploadVideoSubject">Select the course to which you want to upload the new video</div>
        <div class="selectCourse">
          <label for="course" class="selectedCourseLabel">Select a course</label>

<select name="course" id="selectedCourse">
  <option value="Course1">Course 1</option>
  <option value="Course2">Course 2</option>
  <option value="Course3">Course 3</option>
</select>

        </div>
        <div class="uploadNewVideo">
          <label for="newVideo" class="newVideoLabel">Upload New Video</label>
        <input type="file" id="newVideo" name="newVideo" accept="video/*"  />
        </div>
        <div class="saveButtonForVideo">UPLOAD</div>
      </div>





    </div>
  </div>
</template>

<script>
export default {
  name: "MyCourses",
  components: {},
  data() {
    return {
      whereAmI: "NewCourse",
    };
  },
  methods: {
    goToEdit() {
      this.whereAmI = "EditCourse";
      let editColor = document.getElementsByClassName("editCourse");
      let newColor = document.getElementsByClassName("newCourse");
      let uploadColor = document.getElementsByClassName("uploadVideo");
      if (this.whereAmI == "EditCourse") {
        editColor[0].style.textDecoration = "underline #d41c2c";
        editColor[0].style.color = "#d41c2c";
        newColor[0].style.textDecoration = "none";
        newColor[0].style.color = "black";
        uploadColor[0].style.textDecoration = "none";
        uploadColor[0].style.color = "black";
      }
    },
    goToUpload() {
      this.whereAmI = "UploadVideo";
      let editColor = document.getElementsByClassName("editCourse");
      let newColor = document.getElementsByClassName("newCourse");
      let uploadColor = document.getElementsByClassName("uploadVideo");
      if (this.whereAmI == "UploadVideo") {
        editColor[0].style.textDecoration = "none";
        editColor[0].style.color = "black";
        newColor[0].style.textDecoration = "none";
        newColor[0].style.color = "black";
        uploadColor[0].style.textDecoration = "underline #d41c2c";
        uploadColor[0].style.color = "#d41c2c";
      }
    },
    goToNew() {
      this.whereAmI = "NewCourse";
      let editColor = document.getElementsByClassName("editCourse");
      let newColor = document.getElementsByClassName("newCourse");
      let uploadColor = document.getElementsByClassName("uploadVideo");
      if (this.whereAmI == "NewCourse") {
        editColor[0].style.textDecoration = "none";
        editColor[0].style.color = "black";
        newColor[0].style.textDecoration = "underline #d41c2c";
        newColor[0].style.color = "#d41c2c";
        uploadColor[0].style.textDecoration = "none";
        uploadColor[0].style.color = "black";
      }
    },
  },
};
</script>

<style scoped>
.myCourses {
  width: 100vh;
  height: 70vh;
  border: 1px solid black;
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
  background-color: rgb(245, 245, 245);
}

.headerCourse {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  border-bottom: 0.2vh solid rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
  grid-template-rows: 100%;
}

.newCourse {
  align-self: center;
  width: 15vh;
  font-weight: bolder;
  text-align: center;
  font-size: 1.5vh;
  margin-left: 10%;
  cursor: pointer;
  color: black;
  text-decoration-line: underline;
  color: #d41c2c;
}

.newCourseDetails {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 10% 10% 10% 45% 10%;
}

.nameForm {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: 5%;
  width: 90%;
  align-self: center;
}

#nameLabel {
  font-size: 1.5vh;
}

#nameField {
  font-size: 1.5vh;
}

.uploadNewIcon {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-left: 5%;
  width: 90%;
  align-self: center;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
}

.iconLabel {
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
}

#icon {
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.uploadNewBackground {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-left: 5%;
  width: 90%;
  align-self: center;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
}

.backgroundLabel {
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
}

#background {
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.uploadNewDocs {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-left: 5%;
  width: 90%;
  align-self: center;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
}

.docsLabel {
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
}

#docs {
   cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.aboutCourse {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  margin-left: 5%;
  width: 90%;
  align-self: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 85%;
}

.aboutSubject {
font-size: 2vh;
font-weight: bolder;
}

.aboutCourseArea {
  font-size: 1.5vh;
  resize: none;
  background-color: rgb(247, 247, 247);
  widows: 90%;
}

.saveButtonForNew {
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

.saveButtonForNew:hover {
  background-color: #d13f4b;
}

.editCourse {
  align-self: center;
  width: 15vh;
  font-weight: bolder;
  text-align: center;
  font-size: 1.5vh;
  margin-left: 10%;
  cursor: pointer;
  color: black;
}

.uploadVideo {
  align-self: center;
  width: 15vh;
  font-weight: bolder;
  text-align: center;
  font-size: 1.5vh;
  margin-left: 10%;
  cursor: pointer;
  color: black;
}

.uploadVideoDetails {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 20% 25% 25% 10%;
}

.uploadVideoSubject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2vh;
  font-weight: bolder;
  line-height: 300%;
  text-align: center;
}

.selectCourse {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 80%;
  height: 30%;
  display: grid;
  grid-template-columns: 20% 50%;
  grid-template-rows: 100%;
  margin-left: 5%;
}

.selectedCourseLabel {
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
line-height: 250%;
}

#selectedCourse {
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
  width: 50%;
  height: 70%;
  align-self: center;
}

.uploadNewVideo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 80%;
  height: 30%;
  display: grid;
  grid-template-columns: 20% 50%;
  grid-template-rows: 100%;
  margin-left: 5%;
}

.newVideoLabel {
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5vh;
}

#newVideo {
  cursor: pointer;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.saveButtonForVideo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  width: 20vh;
  height: 3.5vh;
  margin: auto;
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
  text-align: center;
  line-height: 220%;
}

.saveButtonForVideo:hover {
  background-color: #d13f4b;
}

.detailsCourse {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

</style>
