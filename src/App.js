
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Ex1 } from './Ex1';
import { Ex2 } from './Ex2';
import { Ex3 } from './Ex3';
import { Ex4 } from './Ex4';
import { Ex5 } from './Ex5';
import { NavBar } from './NavBar';
// import  {AnimatePresence, motion as m} from "framer-motion";
import { useEffect, useState } from 'react';


function App() {

  const location = useLocation();
  const [displayLocation,setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
      <div className="App">
        <header className="App-header" >
          {/* <AnimatePresence mode='wait'> */}
            <div

            // initial={{x:"100%"}} 
            // animate={{x:"0%"}}
            // initial={{opacity:0,x:"100%"}} 
            // animate={{opacity:1,x:"0%"}}
            // transition={{duration:1, ease:"easeOut"}}
            // exit={{opacity:0,x:"-100%"}}

            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === "fadeOut") {
                setTransistionStage("fadeIn");
                setDisplayLocation(location);
              }
            }}
            
            >
              <Routes location={displayLocation}>
                <Route path="/" element={<Ex1></Ex1>} />
                <Route path="/Ex2" element={<Ex2></Ex2>} />
                <Route path="/Ex3" element={<Ex3></Ex3>} />
                <Route path="/Ex4" element={<Ex4></Ex4>} />
                <Route path="/Ex5" element={<Ex5></Ex5>} />
              </Routes>
            </div>
          {/* </AnimatePresence> */}
          <NavBar/>
        </header>
      </div>
  );
}

export default App;
