import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// animations
import { motion } from "framer-motion";
import { MenuLine } from "../animation";
//styled
import styled from "styled-components";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link
          id="logo"
          to={{
            pathname: "/pholioApp/",
          }}
        >
          Pholio
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/pholioApp/",
            }}
          >
            About Us
          </Link>
          <StyledLine
            variants={MenuLine}
            initial="hidden"
            animate={{ width: pathname === "/pholioApp/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link
            to={{
              pathname: "/pholioApp/work",
            }}
          >
            Our Work
          </Link>
          <StyledLine
            variants={MenuLine}
            initial="hidden"
            animate={{ width: pathname === "/pholioApp/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link
            to={{
              pathname: "/pholioApp/contact",
            }}
          >
            Contact us
          </Link>
          <StyledLine
            variants={MenuLine}
            initial="hidden"
            animate={{
              width: pathname === "/pholioApp/contact" ? "50%" : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding-left: 0rem;
      position: relative;
    }
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1200px) {
    left: 0%;
  }
`;

export default Nav;
