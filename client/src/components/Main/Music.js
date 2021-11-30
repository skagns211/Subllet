import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { IMG } from "../Main/imageUrl";

const Music = () => {
  const StyleSlider = styled.div`
    color: #ff8a00;
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-left: 0.5rem;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Wrap = styled.div`
    margin: 2rem 2rem 2rem 3.3rem;
    width: 45rem;
    .slick-dots {
      margin-bottom: 3rem;
    }
    .slick-dots li button:before {
      color: #ffffff;
      font-size: 1.3rem;
    }
    .slick-dots li.slick-active button:before {
      color: #ff8a00;
      font-size: 1.3rem;
    }
    .slick-prev {
      left: -2.2rem;
    }
    .slick-prev:before {
      opacity: 1;
      color: gray;
      font-size: 2rem;
    }
    .slick-next:before {
      opacity: 1;
      color: gray;
      font-size: 2rem;
    }
    img {
      width: 40rem;
    }
    div {
      width: 40rem;
    }
  `;

  const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;
    width: 40rem;
    a {
      font-size: 1rem;
      line-height: 2rem;
      color: #ff8a00;
    }
  `;

  return (
    <StyleSlider>
      <TopContent>
        <span>Music</span>
        <a>전체보기</a>
      </TopContent>
      <Wrap>
        <Slider {...settings}>
          {IMG["music"].map((el) => {
            return (
              <div>
                <img alt="musicImg" src={el}></img>
              </div>
            );
          })}
        </Slider>
      </Wrap>
    </StyleSlider>
  );
};

export default Music;
