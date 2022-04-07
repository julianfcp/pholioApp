// Pages
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
// Components
import Nav from "./components/Nav";
// Global Style
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  // we need to know the location page so AnimatePresence knows which pages
  // animate with a unique key
  // exitBeforeEnter waits to execute the animation on the next page
  // so When the page fades out ... the next page waits to fade in
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/pholioApp/" exact>
            <AboutUs />
          </Route>
          <Route path="/pholioApp/work" exact>
            <Work />
          </Route>
          <Route path="/pholioApp/work/:id">
            {console.log("siszas")}
            <MovieDetail />
          </Route>
          <Route path="/pholioApp/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
