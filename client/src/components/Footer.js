// import { React, useState, useEffect } from "react";
// import styled from "styled-components";
// import github from "../IMG/github.png";

// const FooterStyle = styled.footer`
//   /* display: flex;
// justify-content: space-around; */
//   width: 100%;
//   height: 70px;
//   bottom: 0px;
//   position: absolute;
//   background-color: #0f0f0f;
//   color: #ffffff;
//   line-height: 4.3rem;
//   display: flex;
//   justify-content: space-between;
//   span {
//     margin-left: 2rem;
//     margin-right: 2rem;
//     @media only screen and (max-width: 800px) {
//       font-size: 0.9rem;
//     }
//   }

//   a {
//     padding-left: 2rem;
//     @media only screen and (max-width: 800px) {
//       margin-right: 0;
//       flex-shrink: 1;
//     }
//   }
//   .copyRight {
//     @media only screen and (max-width: 800px) {
//       flex-shrink: 0;
//       margin-right: 0;
//     }
//   }
//   img {
//     width: 2rem;
//     height: 2rem;
//     margin-top: 1rem;
//     @media only screen and (max-width: 800px) {
//       width: 1.5rem;
//       height: 1.5rem;
//       margin-top: 1.3rem;
//     }
//   }
// `;

// const Member = styled.span`
//   display: flex;
//   justify-content: space-between;
// `;

// const Footer = () => {
//   const [isMember, setIsMember] = useState([
//     "Kim namhun",
//     "Kim jongseo",
//     "Kim taehyung",
//     "Heo deokhwan",
//   ]);

//   const handleResize = () => {
//     const innerWidth = window.innerWidth;
//     innerWidth <= 816
//       ? setIsMember(["Kim", "Kim", "Kim", "Heo"])
//       : setIsMember([...isMember]);
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <FooterStyle>
//         <span className="copyRight">Copyright ⓒ 2021 Subllet, Inc</span>
//         <Member>
//           <img alt="gitLogo" src={github}></img>
//           <a
//             href="https://github.com/skagns211"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {isMember[0]}
//           </a>
//           <a
//             href="https://github.com/ionc635"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {isMember[1]}
//           </a>
//           <a
//             href="https://github.com/kkangtaeng"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {isMember[2]}
//           </a>
//           <a
//             href="https://github.com/Deokhwan-Heo"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {isMember[3]}
//           </a>
//         </Member>
//       </FooterStyle>
//     </>
//   );
// };

// export default Footer;

//!-------------------------------------------------------------------

import { React, useState, useEffect } from "react";
import styled from "styled-components";
import github from "../IMG/github.png";

const FooterStyle = styled.footer`
  /* display: flex;
justify-content: space-around; */
  width: 100%;
  height: 70px;
  bottom: 0px;
  position: absolute;
  background-color: #0f0f0f;
  color: #ffffff;
  line-height: 4.3rem;
  /* display: flex; */
  /* justify-content: center; */
  /* border: 1px solid white; */
  @media only screen and (max-width: 600px) {
    /* display: flex; */
    flex-direction: column;
  }
  /* span {
    margin-left: 2rem;
    margin-right: 2rem;
    border: 1px solid yellow;
    @media only screen and (max-width: 800px) {
      font-size: 0.9rem;
      height: 0rem;
    }
    .copyRight {
      j @media only screen and (max-width: 800px) {
        flex-shrink: 0;
        margin-right: 0;
      }
    }
  } */

  /* a {
    padding-left: 2rem;
    border: 1px solid white;
    @media only screen and (max-width: 800px) {
      margin-right: 0;
      flex-shrink: 1;
    }
  } */

  img {
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
    @media only screen and (max-width: 800px) {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 1.3rem;
    }
  }
`;

const FooterBox = styled.div`
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red */
  div {
    display: flex;
    &.left {
      margin-left: 1rem;
      @media only screen and (max-width: 600px) {
        margin-left: 0.2rem;
      }
      /* border: 1px solid yellow; */
    }
    &.right {
      margin-right: 1rem;
      /* border: 1px solid white; */
      display: flex;
      justify-content: right;
      @media only screen and (max-width: 600px) {
        margin-right: 0.2rem;
      }
      span {
        display: flex;
        justify-content: end;
        &.logo {
          display: flex;
          justify-content: end;
          /* border: 1px solid green; */
          /* width: 5%; */
        }
        &.name {
          display: flex;
          justify-content: end;
          /* width: 93%; */
          /* border: 1px solid green; */
          a {
            margin-right: 1rem;
            font-size: 1rem;
            align-items: center;
            /* border: 1px solid blue; */
            @media only screen and (max-width: 600px) {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const [isMember, setIsMember] = useState([
    "Kim namhun",
    "Kim jongseo",
    "Kim taehyung",
    "Heo deokhwan",
  ]);

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    innerWidth <= 816
      ? setIsMember(["Kim", "Kim", "Kim", "Heo"])
      : setIsMember([...isMember]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <FooterStyle>
        <FooterBox>
          <div className="left">Copyright ⓒ 2021 Subllet, Inc</div>
          <div className="right">
            <span className="logo">
              <img alt="gitLogo" src={github}></img>
            </span>
            <span className="name">
              <a
                href="https://github.com/skagns211"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMember[0]}
              </a>
              <a
                href="https://github.com/ionc635"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMember[1]}
              </a>
              <a
                href="https://github.com/kkangtaeng"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMember[2]}
              </a>
              <a
                href="https://github.com/Deokhwan-Heo"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMember[3]}
              </a>
            </span>
          </div>
        </FooterBox>
      </FooterStyle>
    </>
  );
};

export default Footer;
