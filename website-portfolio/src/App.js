import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header" src="Headshot.png">
        <button className="HeaderButton"><span>Home</span></button>
        <button className="HeaderButton"><span>About Me</span></button>
        <button className="HeaderButton"><span>Projects</span></button>
        <button className="HeaderButton"><span>Contact</span></button>
      </header>
      <div className="Home">
        <article>
          <p className="HomeContent">
            <h1>
              Welcome!
            </h1>
          </p>
          <p className = "HomeContentDescription">
            Im Karamdeep Bassi, a high schooler in Maryland aspiring to become a software engineer!
          </p>
        </article>
        <img className="Headshot" src="Images/Headshot.png" alt="Headshot"/>
      </div>
      <div className="AboutMe">
        <img className = "ComputerImage" src="Images/AestheticComputer.webp" alt="Computer"/>
        <div className="AboutMeContent">
          <p className="AboutMeHeader">
            <h1>About Me</h1>
          </p>
          <p className="AboutMeText">
            I grew up in Maryland and I always was on a computer doing something. 
            I eventually discovered programming and knew I found what I wanted to do as a career.
            As of now I am a senior in High School and also a Defense Intern. As a Defense Intern I
            rotate between 4 defense contractors, spending 3 months at each doing software engineering
            and cyber security. I am familiar with Java, HTML, CSS, Javascript, ReactJS, and am currently focusing C++.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
