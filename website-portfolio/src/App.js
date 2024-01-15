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
          <p className = "HomeContent">
            <h1>
              Software Engineer
            </h1>
          </p>
          <p className = "HomeContentDescription">
            Hello! Im Karamdeep Bassi, a software engineer based in Maryland, USA!
          </p>
        </article>
        <img className="Headshot" src="Images/Headshot.png" alt="Headshot"/>
      </div>
    </div>
  );
}

export default App;
