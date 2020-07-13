import React from 'react';
import './App.css';
import Hobbies from "./components/Hobbies";

function App(){
  return(
    <div>
      <Hobbies
      hobby = "programming"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf81wyHaA16fQEl3Bm__aw8EiuJIOF_9BsJg&usqp=CAU" height="100"
      details = "Computer programming is a set of written instructions that the computer follows. These instructions can be written in various languages. Each programming languages have their unique ways of organizing the commands which are called syntax."
      />
      <br></br>
      <Hobbies
      hobby = "gaming or gamer"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU-LOYImP1ns-Cttf1gGUoOaIgACYfOefl0Q&usqp=CAU"
      details = "A gamer (sometimes also called player or electronic athlete and eathlete) is a person who plays interactive games, especially video games, tabletop role-playing games, and skill-based card games, and who plays for usually long periods of time."
      />
      <br></br>
      <Hobbies
      hobby = "Music Production"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOsHxuLj86cD8qJsnskokvjEU-q7Jwh2zdcg&usqp=CAU"
      details = "A record producer or music producer oversees and manages the sound recording and production of a band or performer's music, which may range from recording one song to recording a lengthy concept album."
      />
    </div>
  )
}


export default App;
