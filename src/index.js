import ReactDOM from "react-dom/client";
import React, { useState, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import './styling/index.css';
import './styling/home.css' ;
import './styling/school.css' ;
import './styling/journey.css' ;
import './styling/contact.css' ;
import './styling/trial.css' ;

const data = [
  { heading: 'RMSC1101', body: 'Elementary Concepts in Risk Management', rating: 5, fac: 'Risk Management', detail: ['Programming in R', 'Statistical Paradox', 'Risk and Reward'] },
  { heading: 'RMSC2001', body: 'Introduction to Risk Management', rating: 4, fac: 'Risk Management', detail: ['Utility and Decision', 'Interest Rates and Bond', 'Financial Instruments'] },
  { heading: 'RMSC4003', body: 'Statistical Modelling in Financial Markets', rating: 4, fac: 'Risk Management', detail: ['Portfolio Theory and APT', 'Binomial Model and BSM', 'Stochastic Calculus'] },
  { heading: 'CSCI1540', body: 'Fundamentals Computing with C++', rating: 5, fac: 'Computer Science', detail: ['Control Flow and Scope', 'Functions and Recursion', 'Arrays and Pointers'] },
  { heading: 'CSCI2100', body: 'Data Structure', rating: 4, fac: 'Computer Science', detail: ['Stack, Queue, Hash Table', 'Soring', 'Tree and Graph'] },
  { heading: 'CSCI2720', body: 'Building Web Applications', rating: 3, fac: 'Computer Science', detail: ['HTML, CSS, Javascript', 'React and Node.js', 'MongoDB and API'] },
  { heading: 'STAT1011', body: 'Introduction to Statistics', rating: 5, fac: 'Statistics', detail: ['Normal Distribution', 'Confidence Intervals and Hypothesis Testing', 'Regression'] },
  { heading: 'STAT2001', body: 'Basic Concepts in Statistics and Probability I', rating: 4, fac: 'Statistics', detail: ['Discrete and Continuous Distribution', 'Transformation of Random Variable'] },
  { heading: 'STAT2006', body: 'Basic Concepts in Statistics and Probability II', rating: 4, fac: 'Statistics', detail: ['Point Estimation', 'Interval Estimation', 'Chi-square Goodness-of-Fit Tests'] },
  { heading: 'STAT3007', body: 'Introduction to Stochastic Process', rating: 3, fac: 'Statistics', detail: ['Markov Chain', 'Birth and Death Process', 'Brownian Motion'] },
  { heading: 'MATH1010', body: 'University Mathematics', rating: 4, fac: 'Mathematics', detail: ['Limits of Functions', 'Application of Derivatives', 'Techniques of Integration'] },
  { heading: 'MATH1030', body: 'Linear Algebra I', rating: 4, fac: 'Mathematics', detail: ['Gaussian elimination', 'Matrices and Determinants', 'Linear Independence'] },
  { heading: 'MATH2010', body: 'Advanced Calculus I', rating: 4, fac: 'Mathematics', detail: ['Limits of Multi-Variable Functions', 'Lagrange Multipliers', 'Implicit Function Theorems'] },
  { heading: 'FINA2010', body: 'Financial Management', rating: 3, fac: 'Finance', detail: ['Value of Money', 'Financial Statements', 'Valuation'] },
  { heading: 'FINA3080', body: 'Investment Analysis and Portfolio Management', rating: 4, fac: 'Finance', detail: ['Financial Markets', 'Equity Returns', 'Optimal Portfolios'] },
  { heading: 'DSME1030', body: 'Economics for Business Students I', rating: 4, fac: 'Other', detail: ['Supply and Demand', 'Game Theory', 'Consumer Theory'] },
  { heading: 'ACCT1111', body: 'Foundation of Financial Accounting', rating: 4, fac: 'Other', detail: ['Accrual Accounting', 'Presentation and Reporting', 'Financial Statement Analysis'] },
  { heading: 'LSCI1001', body: 'Basic Concepts in Biological Sciences', rating: 5, fac: 'Other', detail: ['Molecules of Life and Cells', 'Genetics and Evolution', 'Organisms and Environment'] }
];;

class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <div className="homeImg">
          <img src="./image/home.jpg" alt="Japan" />
        </div>
        <div className="homeIntro">
          <p>My name is Thomas, and I am delighted to share a bit about myself on this personal website. As a devoted <b>Christian</b>, a proud <b>HongKonger</b>, and a dedicated <b>university student</b>, I am grateful to the Lord for showering His blessings upon me each day. Over the years, I have grown from an often frustrated teenager into a more mature individual, learning the importance of bringing joy to others and living a purposeful life.</p>
          <hr/>
          <h3><u>My Home</u></h3>
          <p>Having been born and raised in the vibrant city of Hong Kong, I have witnessed the tremendous changes that have taken place in recent years. Regardless of whether these changes have been positive or negative, this city holds a special place in my heart. Its breathtaking landscapes and remarkable people make it a truly remarkable place to call home.</p>
          <hr/>
          <h3><u>Academic Background</u></h3>
          <p>Currently, my educational journey revolves around pursuing a Bachelor's degree in Risk Management Science at <a href="http://www2.sta.cuhk.edu.hk/rmsc/" target="_blank" rel="noreferrer">The Chinese University of Hong Kong (CUHK)</a>. Although this field of study may not be widely known, it encompasses a blend of mathematics, statistics, computer science, and finance. I am on track to complete my degree in spring 2025.</p>
          <hr/>
          <h3><u>The Future</u></h3>
          <p>As for the future, I have numerous plans, but I firmly believe that the Lord will guide my path. Whether it involves relocating to other cities or remaining in Hong Kong for an extended period, I am eager to embrace the adventures that lie ahead.</p>
          <p>We love him, because he first loved us. (1 John 4:19)</p>
          <hr/>
        </div>
      </div>
    );
  }
}

function Card({ title, name, rating, fac, detail }) {
  const bgColor = (fac) => {
    if (fac === 'Computer Science') {
      return '#f9b234';
    } else if (fac === 'Statistics') {
      return '#3ecd5e';
    } else if (fac === 'Risk Management') {
      return '#e44002';
    } else if (fac === 'Mathematics') {
      return '#cd3e94';
    } else if ( fac === 'Finance' ){
      return '#4c49ea';
    }
    else return '#e44002';
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  const [isCardClicked, setIsCardClicked] = useState(false);
  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const cardLinkRef = useRef(null);

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="cardLink" ref={cardLinkRef}>
        <div className="cardCorner" style={{ backgroundColor: bgColor(fac) }}></div>
        <div className="cardInfo">
          <div className="cardMain">
            <h1 className="cardHeading">{title}</h1>
            <div className="cardBody">{name}</div>
            <div className="starRating">{renderStars()}</div>
          </div>
          <div className={`cardDetail ${isCardClicked ? 'active' : ''}`}>
            <ul>
              {detail.map((item, index) => (
                <div><li key={index}>{item}</li> <hr/></div>
                
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

class School extends React.Component {
  cardContainerRefs = [];

  componentDidMount() {
    this.checkWrap();

    // Attach resize observers to each cardContainer
    this.cardContainerRefs.forEach((cardContainerRef) => {
    const resizeObserver = new ResizeObserver(this.checkWrap);
    resizeObserver.observe(cardContainerRef.current);

    // Adjust card padding initially
    this.adjustCardPadding(cardContainerRef.current);
  });

    // Attach resize event listener to handle screen width changes
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Disconnect all resize observers
    this.cardContainerRefs.forEach((cardContainerRef) => {
      const resizeObserver = new ResizeObserver(this.checkWrap);
      resizeObserver.disconnect();
    });

    // Remove resize event listener
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // Delay checking wrap to ensure proper calculations after resize
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.checkWrap, 100);
  };

  checkWrap = () => {
    this.cardContainerRefs.forEach((cardContainerRef) => {
      const cardContainer = cardContainerRef.current;
      const cards = cardContainer.getElementsByClassName('card');

      const totalCardsWidth = cards.length * 460;

      const containerWidth = cardContainer.clientWidth;
      const isWrapped = totalCardsWidth > containerWidth;

      if (isWrapped) {
        cardContainer.style.minHeight = '450px';
      } else {
        cardContainer.style.minHeight = '250px';
      }
    });
  };

  adjustCardPadding = (cardContainer) => {
    const cards = cardContainer.getElementsByClassName('cardLink');
    const cardHeights = Array.from(cards).map((card) => card.offsetHeight);
    const maxCardHeight = Math.max(...cardHeights);
    const isSameHeight = cardHeights.every((height) => height === cardHeights[0]);
  
    Array.from(cards).forEach((card) => {
      if (isSameHeight) {
        card.style.padding = '30px 20px';
      } else if (card.offsetHeight === maxCardHeight) {
        card.style.padding = '16.75px 20px';
      } else {
        card.style.padding = '30px 20px';
      }
    });
  };

  render() {
    const groupedData = data.reduce((result, item) => {
      if (!result[item.fac]) {
        result[item.fac] = [];
      }
      result[item.fac].push(item);
      return result;
    }, {});

    return (
      <div className="school">
        <div className="schoolBox">
          <p className="schoolHeading">
            I want to share the courses I've taken and display star ratings to indicate how much I liked them.
          </p>
        </div>
        {Object.entries(groupedData).map(([faculty, cards]) => {
          const cardContainerRef = React.createRef();
          this.cardContainerRefs.push(cardContainerRef);

          return (
            <React.Fragment key={faculty}>
              <h2>
                <u>{faculty}</u>
              </h2>
              <div className="cardContainer" ref={cardContainerRef}>
                {cards.map((card, index) => (
                  <Card key={index} title={card.heading} name={card.body} rating={card.rating} fac={card.fac} detail={card.detail} />
                ))}
              </div>
              <hr className="schoolHr" />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

class Journey extends React.Component {
  render() {
    const timeline = [
      { date: '2003 Apr 30', title: 'Birth', content: 'I was born in Queen Elizabeth Hospital on a Wednesday afternoon.' },
      { date: '2009 Sep - 2015 Aug', title: 'Primary School', content: 'I enrolled in primary school and received nurturing guidance from my teachers.' },
      { date: '2015 Sep - 2021 Aug', title: 'Secondary School', content: 'I completed my secondary education, initially feeling lost but eventually finding motivation to work harder.' },
      { date: '2021 Feb - May', title: 'DSE (Public Exam)', content: 'I dedicated several months to prepare for the DSE exam, facing challenging moments, but I persevered with the support of my faith.' },
      { date: '2021 Sep - Present', title: 'University Life', content: 'I embarked on a journey in studying B.Sc. Risk Management Science at the Chinese University of Hong Kong, realizing it to be the best choice despite not being my initial preference.' },
      { date: '2023 Jun - Aug', title: 'Internship at BUPA', content: 'I had the opportunity to intern at BUPA, my first professional experience. I had the pleasure of working with supportive colleagues and making valuable connections. During this time, I honed my analytical and communication skills.' },
      { date: '2024 Jan-Jun', title: 'Internship at HSBC', content: 'I am excited to join HSBC\'s risk department as a student intern.' },
    ];
    timeline.reverse() ;

    const getAccentColor = (index) => {
      const colors = ['#41516C', '#FBCA3E', '#E24A68', '#1B5F8C', '#4CADAD'];
      return colors[index % colors.length];
    };

    return (
      <ul className="journey">
        {timeline.map((item, index) => (
          <li key={index} style={{ "--accent-color": getAccentColor(index) }}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.content}</div>
            <div className="journeyLoc">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"/></svg>
              Hong Kong</div>
          </li>
        ))}
      </ul>
    );
  }
}

class Contact extends React.Component {
  render() {
    return(
      <div className="contact">
        <div className="contactInfo">
          <p>Feel free to get in touch:</p>
          <p>Email: <a href="mailto:hoyintsui268@gmail.com">hoyintsui268@gmail.com</a></p>
          <p>Instagram
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            : Follow me on <a href="https://www.linkedin.com/in/thomas-tsui-554455252/" target="_blank" rel="noreferrer">Instagram</a> to stay updated!</p>
          <p>LinkedIn
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
          </svg>
          : Connect with me on <a href="https://www.linkedin.com/in/thomas-tsui-554455252/" target="_blank" rel="noreferrer">Linkedin</a> for networking.</p>
        </div>
        <div className="contactPhoto">
          <img src='./image/tree.jpeg' alt="Egg Tree" />
        </div>
      </div>
    );
  }
}

class NoMatch extends React.Component {
  render() {
    return (
      <div className="trial">404 - Not Found</div>
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