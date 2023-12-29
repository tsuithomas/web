import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import './styling/index.css';
import './styling/home.css'

class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <div className="homeImg">
          <img src="./image/home.jpg" alt="Japan" />
        </div>
        <div className="homeIntro">
          <p>My name is Thomas, and I am delighted to share a bit about myself on this personal website. As a devoted <b>Christian</b>, a proud <b>HongKonger</b>, and a dedicated <b>university student</b>, I am grateful to the Lord for showering His blessings upon me each day. Over the years, I have grown from an often frustrated teenager into a more mature individual, learning the importance of bringing joy to others and living a purposeful life.</p>
          <h3><u>My Home</u></h3>
          <p>Having been born and raised in the vibrant city of Hong Kong, I have witnessed the tremendous changes that have taken place in recent years. Regardless of whether these changes have been positive or negative, this city holds a special place in my heart. Its breathtaking landscapes and remarkable people make it a truly remarkable place to call home.</p>
          <h3><u>Academic Background</u></h3>
          <p>Currently, my educational journey revolves around pursuing a Bachelor's degree in Risk Management Science at <a href="http://www2.sta.cuhk.edu.hk/rmsc/" target="_blank">The Chinese University of Hong Kong (CUHK)</a>. Although this field of study may not be widely known, it encompasses a blend of mathematics, statistics, computer science, and finance. I am on track to complete my degree in spring 2025.</p>
          <h3><u>The Future</u></h3>
          <p>As for the future, I have numerous plans, but I firmly believe that the Lord will guide my path. Whether it involves relocating to other cities or remaining in Hong Kong for an extended period, I am eager to embrace the adventures that lie ahead.</p>
          <p>We love him, because he first loved us. (1 John 4:19)</p>
        </div>
      </div>
    );
  }
}

function Card({ heading, body }) {
  return (
    <div className="card">
      <h2 className="card-heading">{heading}</h2>
      <div className="card-body">{body}</div>
    </div>
  );
}

class School extends React.Component {
  render() {
    return(
      <div className="school">
        <Card heading="Example Card" body="This is the body of the card." />
      </div>
    );
  }
}

class Journey extends React.Component {
  render() {
    return(
      <>
        <h2>Journey</h2>
      </>
    );
  }
}

class Contact extends React.Component {
  render() {
    return(
      <>
        <h2>Contact</h2>
      </>
    );
  }
}

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <h2>404 - Page Not Found</h2>
      </div>
    );
  }
}

function ImageText() {
  const location = useLocation();
  const getPageText = () => {
    const { pathname } = location;
    if (pathname === '/School') {
      return 'School';
    } else if (pathname === '/Journey') {
      return 'Journey';
    } else if (pathname === '/Contact') {
      return 'Contact';
    }
    return 'H.Y. Tsui';
  };
  const pageText = getPageText();
  return (
    <div className="imageText">
      <h1>{pageText}</h1>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false
    };
  }
  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }));
  };

  render() {
    const { isMenuVisible } = this.state;
    return (
      <div className="fullPage">
        <BrowserRouter>
          <nav className="navBar">
            <ul className="navName">
              <li className="navCap">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                </svg>
              </li>
              <li>
                <Link to="/" className="navIcon" activeClassName="navIconActive">Ho Yin (Thomas) Tsui</Link>
              </li>
            </ul>
            <div className="navList">
              <ul>
                <li className="normListItem"><Link to="/" className="navLink" activeClassName="navLinkActive">About Me</Link></li>
                <li className="normListItem"><Link to="/School" className="navLink" activeClassName="navLinkActive">School</Link></li>
                <li className="normListItem"><Link to="/Journey" className="navLink" activeClassName="navLinkActive">Journey</Link></li>
                <li className="normListItem"><Link to="/Contact" className="navLink" activeClassName="navLinkActive">Contact</Link></li>
                <li className="menuBar" onClick={this.toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </li>
              </ul>
            </div>
          </nav>
          {isMenuVisible && (
            <div className="menu">
              <ul>
                <li onClick={this.toggleMenu}><Link to="/" className="navLink" activeClassName="navLinkActive">About Me</Link></li>
                <li onClick={this.toggleMenu}><Link to="/School" className="navLink" activeClassName="navLinkActive">School</Link></li>
                <li onClick={this.toggleMenu}><Link to="/Journey" className="navLink" activeClassName="navLinkActive">Journey</Link></li>
                <li onClick={this.toggleMenu}><Link to="/Contact" className="navLink" activeClassName="navLinkActive">Contact</Link></li>
              </ul>
            </div>
          )}
          <div className="imageContainer">
            <img src="/image/bible.png" alt="Bible" className="topPicture" />
            <div className="imageText">
              <ImageText />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/School" element={<School />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render( <App />);