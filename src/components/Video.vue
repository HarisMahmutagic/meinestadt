<template>
  <div class="video">
    <div class="left">
      <div class="urlTab">
        <div class="urlLocation">My course > Specific video</div>
        <div class="statusButton">Completed</div>
      </div>

      <div class="mainVideo"></div>

      <div class="lectionStatus">Lection 1 of 5</div>

      <div class="mainSubject">Subject for course !</div>

      <div class="userInfoAndDownload">
        <img src="../assets/person.png" class="personImage" />
        <div class="personName">Full Name</div>
        <div class="downloadButton">Download Files</div>
        <div class="statusBar">Percent Status bar</div>
      </div>

      <div class="description">
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
        Some text ! Some text ! Some text ! Some text ! Some text ! Some text !
      </div>
    </div>

    <div class="right">
      <div class="videos">
        <div class="videoList">
          <div class="videoImg"></div>
          <div class="videoSubject">Text</div>
        </div>
        <div class="videoList">
          <div class="videoImg"></div>
          <div class="videoSubject">Text</div>
        </div>
        <div class="videoList">
          <div class="videoImg"></div>
          <div class="videoSubject">Text</div>
        </div>
      </div>

      <div class="course">
        <div class="courseImg"></div>
        <div class="courseSubject">Text</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video {
  width: 100vh;
  height: 70vh;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 70vh;
  background-color: rgb(245, 245, 245);
}

.left {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: white;
  height: 60vh;
  width: 60vh;
  margin-top: 3%;
  justify-self: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3vh 30vh 3vh 3vh 6vh 15vh;
}

.urlTab {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.urlLocation {
  font-size: 1.2vh;
  align-self: center;
}

.statusButton {
  font-size: 1.3vh;
  align-self: center;
  text-align: center;
  line-height: 200%;
  width: 10vh;
  height: 2.5vh;
  background-color: #d41c2c;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.mainVideo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 0.1vh solid black;
  width: 90%;
  margin-left: 5%;
}

.lectionStatus {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  color: #d41c2c;
  width: 90%;
  margin-left: 5%;
  font-size: 1.7vh;
  line-height: 200%;
  font-weight: bold;
}

.mainSubject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin-left: 5%;
  font-weight: bolder;
  font-size: 2.2vh;
  line-height: 100%;
  border-bottom: 0.1vh solid rgb(230, 230, 230);
}

.userInfoAndDownload {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  width: 90%;
  margin-left: 5%;
  line-height: 120%;
  display: grid;
  grid-template-columns: 10% 30% 30% 30%;
  grid-template-rows: 100%;
}

.personImage {
  height: 5vh;
  width: 5vh;
  margin-top: 5%;
}

.personName {
  font-size: 1.5vh;
  line-height: 400%;
}

.downloadButton {
  width: 15vh;
  height: 3vh;
  font-size: 1.2vh;
  background-color: #d41c2c;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  line-height: 250%;
  align-self: center;
  cursor: pointer;
}

.downloadButton:hover {
  background-color: #d13f4b;
}

.statusBar {
  align-self: center;
}

.description {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  width: 90%;
  margin-left: 5%;
  font-size: 1.2vh;
  line-height: 130%;
}

.right {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50vh 20vh;
}

.videos {
  width: 100%;
  height: 50vh;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.videoList {
  width: 25vh;
  height: 15vh;
  margin-top: 3%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11vh 4vh;
}

.videoImg {
  background-image: url("../assets/ss.png");
  background-size: cover;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.videoSubject {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1.2vh;
  line-height: 120%;
}

.course {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 25vh;
  height: 19vh;
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 14vh 5vh;
}

.courseImg {
  background-image: url("../assets/course.png");
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.courseSubject {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  font-size: 1.2vh;
  line-height: 120%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
