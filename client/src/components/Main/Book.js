import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

const StyleSlider = styled.div`
  color: #ff8a00;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const Wrap = styled.div`
  margin: 0.5rem 0rem 2rem 0.5rem;
  @media only screen and (max-width: 500px) {
    margin: auto;
    width: 90%;
    .slick-prev:before {
      display: none;
    }
    .slick-next:before {
      display: none;
    }
  }
  @media only screen and (min-width: 1050px) and (max-width: 1300px) {
    width: 99%;
  }
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
    left: 0.5rem;
    z-index: 1;
  }
  .slick-next {
    right: 1.1rem;
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
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
    @media only screen and (min-width: 1050px) and (max-width: 1300px) {
      width: 59rem;
    }
  }
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: auto;
  a {
    font-size: 1rem;
    line-height: 2rem;
    color: #ff8a00;
  }
`;

const Book = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const serviceList = state.services;
  const bookList = serviceList.filter((el) => el.category === "book");

  const [isSetting, setIsSetting] = useState({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    innerWidth < 800
      ? setIsSetting({
          ...isSetting,
          slidesToShow: 1,
        })
      : setIsSetting({
          ...isSetting,
          dots: false,
          slidesToShow: 3,
        });
  };

  const handleIntoDetail = (path) => {
    navigate(`/detail/${path}`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyleSlider>
      <TopContent>
        <div>Book</div>
        <Link to="/allview">전체보기</Link>
      </TopContent>
      <Wrap>
        <Slider {...isSetting}>
          {bookList.map((el, idx) => {
            return (
              <img
                key={idx}
                alt="bookImg"
                src={el.outer_image}
                onClick={() => handleIntoDetail(el.id)}
              ></img>
            );
          })}
        </Slider>
      </Wrap>
    </StyleSlider>
  );
};

export default Book;
