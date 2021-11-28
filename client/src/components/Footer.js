import React from "react";
import styled from "styled-components";
import github from "../IMG/github.png";

const Footer = () => {
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
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 2rem;
      margin-right: 2rem;
      @media only screen and (max-width: 800px) {
        font-size: 0.9rem;
      }
    }

    a {
      padding-left: 2rem;
      @media only screen and (max-width: 800px) {
        margin-right: 0;
        flex-shrink: 1;
      }
    }
    .copyRight {
      @media only screen and (max-width: 800px) {
        flex-shrink: 0;
        margin-right: 0;
      }
    }
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

  const Member = styled.span`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <>
      <FooterStyle>
        <span className="copyRight">Copyright ⓒ 2021 Subllet, Inc</span>
        <Member>
          <img alt="gitLogo" src={github}></img>
          <a href="https://github.com/skagns211" target="_blank">
            Kim namhun
          </a>
          <a href="https://github.com/ionc635" target="_blank">
            Kim jongseo
          </a>
          <a href="https://github.com/kkangtaeng" target="_blank">
            Kim taehyung
          </a>
          <a href="https://github.com/Deokhwan-Heo" target="_blank">
            Heo deokhwan
          </a>
        </Member>
      </FooterStyle>
    </>
  );
};

export default Footer;
