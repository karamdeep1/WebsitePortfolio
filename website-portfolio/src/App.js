import './App.css';

function App() {
  return (
    <div className="App" id="AppSection">
      <header className="Header">
        <a href="#AppSection">
          <button className="HeaderButton"><span>Home</span></button> 
        </a>
        <a href="#AboutMeSection">
          <button className="HeaderButton"><span>About Me</span></button>
        </a>
        <a href="#ProjectSection">
          <button className="HeaderButton"><span>Projects</span></button>
        </a>
        <a href="#WorkSection">
          <button className="HeaderButton"><span>Work</span></button>
        </a>
        <button className="HeaderButton"><span>Contact</span></button>
      </header>
      <div className="Home" id="HomeSection">
        <article>
          <p className="HeaderText" id="HomeHeader">
            <h1>Welcome!</h1>
          </p>
          <p className = "ContentDescription">
            Im Karamdeep Bassi, a high schooler in Maryland aspiring to become a software engineer!
          </p>
        </article>
        <img className="Headshot" src="Images/Headshot.png" alt="Headshot"/>
      </div>
      <div className="AboutMe" id="AboutMeSection">
        <img className = "ComputerImage" src="Images/AestheticComputer.webp" alt="Computer"/>
        <div className="AboutMeContent">
          <p className="HeaderText" id="AboutMeHeader">
            <h1>About Me</h1>
          </p>
          <p className="ContentDescription">
            I grew up in Maryland and I always was on a computer doing something. 
            I eventually discovered programming and knew I found what I wanted to do as a career.
            As of now I am a senior in High School and also a Defense Intern. As a Defense Intern I
            rotate between 4 defense contractors, spending 3 months at each doing software engineering
            and cyber security. I am familiar with Java, HTML, CSS, Javascript, ReactJS, and am currently focusing C++.
          </p>
        </div>
      </div>
      <div className="Projects" id="ProjectSection">
        <div className="Project">
          <img className="AISumImage" src="Images/AISumExample.png" alt="AISumExample"/>
          <div className="AISumProjectDescription">
            <p className="HeaderText" id="ProjectHeaderText">
              <h1>AISum</h1>
            </p>
            <p className="ContentDescription" id="ProjectContentText">
              Article summarizer that utilizes A.I. to summarize articles.
              Frontend in ReactJS, Backend in Python and Azure Functions.
            </p>
            <ul className="ContentDescription">
              <li>Google Chrome Extension</li>
              <li>Frontend: ReactJS</li>
              <li>Backend: Python and Azure Functions</li>
              <li>Bart A.I. in Python</li>
            </ul>
            <div className="ProjectSkills">
              <div className="Skills">
                <p
                  >ReactJS
                </p>
                <img src="Images/logo192.png" alt="reactlogo" width="50px"></img>
              </div>
              <div className="Skills">
                <p
                  >Python
                </p>
                <img src="Images/PythonLogo.png" alt="reactlogo" width="50px"></img>
              </div>
              <div className="Skills">
                <p
                  >Azure
                </p>
                <img src="Images/AzureLogo.png" alt="reactlogo" width="50px"></img>
              </div>
              <div className="Skills">
                <p
                  >Azure Functions
                </p>
                <img src="Images/AzureFunctionsLogo.png" alt="reactlogo" width="50px"></img>
              </div>
            </div>
            <div className="ProjectButtonLinks">
              <a href="https://chromewebstore.google.com/detail/aisum/pdaimpbajhjigbcpmgeigehbffjdhhch" target="_blank" rel="noreferrer">
                <button className="ProjectButton">View on Chrome Extension store <span>&#8599;</span></button>
              </a>
              <a href="https://www.youtube.com/watch?v=mylwfXy8imo" target="_blank" rel="noreferrer">
                <button className="ProjectButton">View Example <span>&#8599;</span></button>
              </a>
            </div>
          </div>
        </div>
        <div className="Project" id="Scanna">
          <div className="ScannaProjectDescription">
              <div id="ScannaTitle">
                <p className="HeaderText" id="ProjectHeaderText">
                  <h1>Scanner</h1>
                </p>
                <div className="ScannaGithubButton">
                  <a href="https://github.com/karamdeep1/Scanna" target="_blank" rel="noreferrer">
                    <button className="ProjectButton"><img src="Images/GithubLogo.png" alt="Github" width="50px"/></button>
                  </a>
                </div>
              </div>
              <p className="ContentDescription" id="ProjectContentText">
                Scan any barcode and the applicaton puts it into a database. The user can also manipulate information of the barcode, create a new one, or delete any existing barcode. 
                The application also allows for the user to search the database for any barcode and has a user account system. Users can also import and export excel files as data.
              </p>
              <div id="ContentLists">
                <ul className="ContentDescription">
                  <li>Desktop Application</li>
                  <li>Frontend: JavaFX</li>
                  <li>Backend: MySQL</li>
                  <li>Scenebuilder</li>
                </ul>
                <ul className="ContentDescription">
                  <li>Barcode Scanners</li>
                  <li>Excel</li>
                </ul>
              </div>
              <div className="ProjectSkills">
                <div className="Skills">
                  <p
                    >JavaFX
                  </p>
                  <img src="Images/JavaFXLogo.png" alt="reactlogo" width="120px"></img>
                </div>
                <div className="Skills">
                  <p
                    >MySQL
                  </p>
                  <img src="Images/MySQLLogo.png" alt="reactlogo" width="80px"></img>
                </div>
                <div className="Skills">
                  <p
                    >Excel
                  </p>
                  <img src="Images/ExcelLogo.png" alt="reactlogo" width="80px"></img>
                </div>
                <div className="Skills">
                  <p>
                    Scenebuilder
                  </p>
                  <img src="Images/SceneBuilderLogo.webp" alt="reactlogo" width="50px"></img>
                </div>
              </div>
            </div>
            <img className="ScannaImage" src="Images/ScannaLogo.png" alt="ScannaLogo"/>
          </div>
        </div>
      <div className="WorkExperience" id="WorkSection">
        <div className="DefenseIntern">
          <h1 className="WorkTitle" id="DefenseInternTitle"><span style={{color: "orange"}}>Defense Intern</span></h1>
          <a id="DIWebButton" href="https://defenseinterns.com" target="_blank" rel="noreferrer">
            <button className="ProjectButton" id="DefenseInternsWebsite">Check out the Defense Intern website!</button>
          </a>
        </div>
        <div className="DefenseInternCompanies">
          <div className="cardlists">
            <div className="card">
              <div className="cardbody">
                <div className="CompanyName">
                  <h2 className="Title">SURVICE Engineering</h2>
                </div>
                <a href="https://www.survice.com" target="_blank" rel="noreferrer">
                  <button className="BusinessWebsiteButton">Click to see their website!</button>
                </a>
                <p className="CompanyDescription">
                  <ul className="ListDescription">
                    <li className="ListBulletPoint">IT help desk answering tickets of various tiers</li>
                    <li className="ListBulletPoint">Network administration</li>
                    <li className="ListBulletPoint">Prepared laptops for new/existing employees</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardbody">
                <div className="CompanyName">
                  <h2 className="Title">Emerald Technical Solutions</h2>
                </div>
                <a href="https://emeraldsolutions.tech" target="_blank" rel="noreferrer">
                  <button className="BusinessWebsiteButton">Click to see their website!</button>
                </a>
                <p className="CompanyDescription">
                  <ul className="ListDescription">
                    <li className="ListBulletPoint">Programming with Virtual Reality in Unreal Engine 5</li>
                    <li className="ListBulletPoint">Matterport scanning and implementation</li>
                    <li className="ListBulletPoint">Designing and architecting 3D home models.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardbody">
                <div className="CompanyName">
                  <h2 className="Title">OMNI Technologies</h2>
                </div>
                <a href="https://www.teamomni.com" target="_blank" rel="noreferrer">
                  <button className="BusinessWebsiteButton">Click to see their website!</button>
                </a>
                <p className="CompanyDescription">
                  <ul className="ListDescription">
                    <li className="ListBulletPoint">Developed algorithm that corrects data format to fit with OpenRMF</li>
                    <li className="ListBulletPoint">Working with data points in AWS</li>
                    <li className="ListBulletPoint">SQL queries and OpenRMF API</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="cardbody">
                <div className="CompanyName">
                  <h2 className="Title">Bravura Information Technologies</h2>
                </div>
                <a href="https://bravurainc.com" target="_blank" rel="noreferrer">
                  <button className="BusinessWebsiteButton">Click to see their website!</button>
                </a>
                <p className="CompanyDescription">
                  Will be updated once I rotate to Bravura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
