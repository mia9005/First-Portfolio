<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <NavHeader @getSection="scrollSection"/>
    <span ref="about"></span>
  <AboutComponent/>
      <span ref="skill"></span>
  <SkillComponent/>
      <span ref="project"></span>
  <ProjectComponent/>
      <span ref="career"></span>
  <CareerComponent/>
  <FooterComponent/>
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavHeader from './components/NavHeader.vue'
import AboutComponent from './components/pages/AboutComponent.vue'
import SkillComponent from './components/pages/SkillComponent.vue'
import ProjectComponent from './components/pages/ProjectComponent.vue'
import CareerComponent from './components/pages/CareerComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    NavHeader,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    CareerComponent,
    FooterComponent
  },
  methods: {
    scrollSection(name) {
            const top = this.$refs[(name)].offsetTop;
            window.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            });
        },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
/* mobile version */
@media (min-width: 300px){
  .header{
    background-image: url(/src/assets/portfolio-background.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .header > article {
    background-color: rgba(164,144,124,.8);
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
  }
  .header-top > nav {
    display: none;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 25px;
    position: relative;
    padding: 3%;
  }
  .nav-link{
    text-decoration: none;
    color: black;
  }
  .nav-link:hover {
    color: steelblue;
  }
  details {
    position: absolute;
    text-align: right;
    width: 94%;
  }
  details > ul {
    background-color: rgba(245,245,245,.5);
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
  details li {
    padding: 3%;
    display: flex;
  }
  .header-bottom {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    align-items: center;
    color: whitesmoke;
    padding-top: 10%;
    padding-bottom: 22%;
  }
  .header-bottom h1 {
    font-size: 35px;
    font-weight: 900;
  }
  .header-bottom p {
    font-size: 20px;
  }
  .header-bottom > strong {
    background-color: rgb(0,223,162);
    height: 0.5vh;
    width: 10vw;
  }
  .header-bottom > a {
    background-color: rgb(0,223,162);
    padding: 2%;
    width: 15vw;
    text-decoration: none;
    color: black;
    font-weight: 600;
    border-radius: 3vw;
    text-transform: uppercase;
  }
  .footer {
    background-color: rgb(34,34,34);
    color: whitesmoke;
    padding: 15%;
  }
  #career,
  #project,
  #skill,
  #about {
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8vh;
  }
  #career > aside,
  #project > aside,
  #skill > aside,
  #about > aside {
    display: flex;
    font-size: 40px;
    column-gap: 3vw;
    font-weight: 900;
  }
  .about-information {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
  }
  .about-information > aside {
    display: flex;
    align-items: center;
    column-gap: 5vw;
    font-size: 25px;
  }
  .about-information figcaption {
    text-align: start;
  }
  .contact {
    background-color: rgb(240,200,201);
    padding: 5%;
  }
  .contact > p {
    text-align: start;
    font-size: 15px;
    font-weight: 500;
  }
  /* skill page */
  #skill {
    background-color: rgb(249,197,30);
  }
  .skill-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    row-gap: 5vh;
  }
  .skill-aside{
    background-color: white;
    padding: 2%;
    border-radius: 3vw;
    width: 100%;
  }
  .skill-title {
    padding: 5%;
    border-bottom: 1px solid dimgray;
  }
  .skill-title > h1 {
    font-size: 30px;
    text-align: start;
    color: red;
  }
  .skill-img { 
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
    padding: 3%;
  }
  .skill-img > img {
    width: 50vw;
    height: 13vh;
  }
  /* project page */
  #project{
    background-color: rgb(29,128,159);
    color: whitesmoke;
  }
  .project-list {
    color: black;
    padding: 2%;
    display: flex;
    flex-direction: column;
    row-gap: 10vh;
  }
  .project-aside {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5vh;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 3vw;
  }
  .project-title p {
    font-size: 15px;
  }
  #project figure {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
  }
  #project figure figcaption > p {
    font-size: 13px;
    text-align: start;
    font-style: italic;

  }
  #project img{
    width: 100%;
  }
  #project ul {
    display: flex;
    flex-direction: column;
    row-gap: 3vh;
  }
  #project ul li {
    color: rgb(29,128,159);
    font-weight: 800;
    font-size: 20px;
    list-style-type: none;
  }
  .project-aside figcaption {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
  }
  .project-aside > a {
    text-decoration: none;
    background-color: rgb(34,34,34);
    padding: 3%;
    width: 30%;
    color: whitesmoke;
    border-radius: 3vw;
  }
  .project-aside > a:hover {
    background-color: rgb(29,128,159);
  }
  /* career page */
  #career {
    background-color: rgb(245,245,245);
  }

  .career-list > img {
    width: 100%;
  }
}
/* tablet version */
@media (min-width: 700px){
  .header-bottom {
    row-gap: 5vh;
    padding-top: 5%;
    padding-bottom: 12%;
  }
  .header-bottom > a {
  padding: 2%;
  width: 10vw;
  }
  .about-information {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .about-information > aside {
    width: 40%;
  }
  .about-information figcaption {
    font-size: 20px;
  }
  .about-information i {
    font-size: 30px;
  }
  .contact {
    width: 100%;
    padding: 2%;
  }
  .contact > p {
    font-size: 17px;
    font-weight: 400;
  }
  .skill-list {
    width: 100%;
  }
  .skill-title {
    padding: 1%;
  }
  .skill-img {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skill-img >img {
    width: 50%;
  }
  .skill-aside:nth-child(2) > .skill-img {
    justify-content: space-evenly;
  }
  .skill-aside:nth-child(2) img {
    width: 30%;
  }
  .project-aside > a {
    width: 13%;
  }
  .footer {
    padding: 10%;
  }
}
/* desktop version */
@media(min-width: 1200px){
  details {
    display: none;
  }
  .header-top {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .header-top > nav {
    display: block;
    width: 40%;
    font-size: 17px;
    letter-spacing: 1px;
  }
  .header-top ul {
    display: flex;
    justify-content: space-between;
  }
  .header-top li {
    display: flex;
  }
    .header-bottom {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    align-items: center;
    color: whitesmoke;
    padding-top: 4%;
    padding-bottom: 8%;
  }
  .header-bottom h1 {
    font-size: 50px;
  }
  .header-bottom > a {
  padding: 1%;
  width: 8vw;
  }
  #about {
    padding: 5%;
    row-gap: 10vh;
    align-items: center;
  }
  .about-information {
    row-gap: 8vh;
    justify-content: start;
    width: 90%;
    padding-left: 9%;
  }
  .about-information > aside {
  width: 32%;
  column-gap: 2vw;
  }
  .contact {
    padding: 1%;
    width: 70%;
  }
  .skill-list {
    flex-direction: row;
    align-items: start;
    column-gap: 5vh;
  }
  #skill {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .footer {
  padding: 5%;
  }
  .project-aside > figure {
    display: flex;
  }
  .project-title h2{
    font-size: 40px;
  }
  .project-title p {
    font-size: 20px;
  }
  .project-aside img {
    width: 40%;
  }
  .project-aside figure {
    align-items: center;
  }
  .project-aside figcaption {
    width: 70%;
  }
  .project-aside > a {
    width: 15%;
  }
}

</style>
