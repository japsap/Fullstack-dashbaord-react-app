import React, { useEffect, useState } from "react";

import "./dashboard.css";

//icons
import { FiX } from "react-icons/fi";
import { AiOutlinePlus } from 'react-icons/ai';

//animation library
import Aos from 'aos';
import 'aos/dist/aos.css';

//comps


const Dashboard = ({ handleLogout, ime }) => {


  useEffect (() => {
    if (ime && ime.length>0)
       window.localStorage.setItem("ime ", JSON.stringify(ime))
     },[ime])
    const [text, setText] = useState('');
    const [name, setNames] = useState('');
    const [tasks, setTasks] = useState([
    {
        id:1,
        name: "Alexander Ivanov",
        text:"Going out on Saturday 9th"
    },{
        id:2,
        name: "Gabriela Miteva",
        text:"Pedicure at Mandies 17th"
    },{
        id:3,
        name: "George Stanchev",
        text:"CS:GO tournament on Friday 1th"
    },{
      id:4,
      name: "Nedko Nedelcghev",
      text:"Exams on Saturday 21th"
  }
])

  const delelteItems = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
      console.log('fuck you')
      
    }

    addTask({ name, text })

    setText('')
    setNames('')
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    if(text){
      const newTask = {id, ...task }
      setTasks([...tasks, newTask]);
    }
  }


  const toggleSlide = () => {
    document.getElementById('slide').classList.toggle('active');
    document.getElementById('close').style.display='block';
    document.getElementById('display-none').style.display='block';
    
    
  }
  const toggleSlide2 = () => {
    document.getElementById('slide').classList.toggle('active')
    document.getElementById('close').style.display='none';
    document.getElementById('display-none').style.display='none';
   
  }
  const toggleNav = () => {
    document.getElementById("links-pos").style.display = "block";
    document.getElementById("small-linkpos").style.display = "none";
    document.getElementById("openMenu").style.display = "none";
    document.getElementById("closeMenu").style.display = "block";
  };
  const closeNav = () => {
    document.getElementById("small-linkpos").style.display = "block";
    document.getElementById("links-pos").style.display = "none";
    document.getElementById("openMenu").style.display = "block";
    document.getElementById("closeMenu").style.display = "none";
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])

  return (
    <div>
      {/* start of the sahboard */}
      <div className="body">
        <div className="sidebar">
          {/* buttons */}
          <div
            className="toggle-btn-dashboard"
            id="openMenu"
            onClick={toggleNav}
          >
            <i class="fal fa-bars"></i>
          </div>
          <div
            className="close-btn-dashboard"
            id="closeMenu"
            onClick={closeNav}
          >
            <i class="fal fa-times"></i>
          </div>
          {/* buttons */}

          <div id="small-linkpos">
            <ul className="small-list">
              <i class="fal fa-house dash-icon-small"></i>
              <i class="fal fa-trophy dash-icon-small"></i>
              <i class="fal fa-university dash-icon-small"></i>
              <i class="fal fa-user dash-icon-small"></i>
              <i class="fal fa-signal-alt-3 dash-icon-small"></i>
              <i class="fal fa-cog dash-icon-small"></i>
            </ul>
          </div>
          <div id="links-pos">
            <ul className="list">
              <li>
                <a href="#" className="active">
                  <i class="fal fa-house dash-icon"></i> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-trophy dash-icon"></i> Projects
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-university dash-icon"></i> Billings
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-user dash-icon"></i> Team Members
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-signal-alt-3 dash-icon"></i> Stats
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-cog dash-icon"></i> Setting
                </a>
              </li>
            </ul>
            <button className="logout" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>


        {/* mobile nav */}
        <div className="mobile__nav">
          <ul className="mobile__flexbox">
              <li><a><i class="fal fa-user"></i></a></li>
              <li><a><i class="fal fa-bars"></i></a></li>
              <li><a><i class="fal fa-home"></i></a></li>
              <li><a><i class="fal fa-calendar-week"></i></a></li>
          </ul>
        </div>


        {/* search bar */}
        <div className="input-padding">
          <input
            type="text"
            className="search-input"
            placeholder="Search for tasks..."
          ></input>
          <AiOutlinePlus className='add__flexboxs' onClick={toggleSlide} id='open'/>
          <div className="search-text-pos">
            <h1 className="search-h1">Hello <span style={{color:'#ce9a89'}}>{ime}</span></h1>
            <p className="search-p">Welcome back!</p>
          </div>
        </div>
      </div>

      {/* circles */}
    <span className='circle__dashbaord'></span>

    {/* task adder */}
      <form onSubmit={onSubmit}>
        <div id="slide">
          <FiX className='slide__close' onClick={toggleSlide2} id='close'/>
          <div id='display-none' className="input__container">
            <h1 className="name__slide">Add a task</h1>
            <input
              required
              className='input__slide'
              placeholder="Enter a Name . . ."
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              required
              className='input__slid'
              placeholder="Enter the actity & date . . ."
              type="text"
              value={name}
              onChange={(e) => setNames(e.target.value)}
            />
              <button className="btn__slide" onClick={addTask}>Add a task</button>
          </div>
        </div>
        <div className='container__tasks'>
          {tasks.map(task => (
                  <div className='task__1' key={task.id}>
                    <FiX className="close__task" onClick={() => delelteItems(task.id)}/>
                    <h1 className='h1__task'>{task.name}</h1>
                    <p className='p__task'>{task.text}</p>
                </div>
            ))}
        </div>
      </form>
  
      {/* end of the dashboard */}
    </div>
  );
};

export default Dashboard;
