import React from "react";
import styled from "styled-components";

const SearchBarBody = styled.header`
  @media only screen and (max-width: 500px) {
    margin-right: 1.5rem;
  }
  @media only screen and (max-width: 800px) {
    background-color: #0f0f0f;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const InputSearchBar = styled.input`
  @media only screen and (max-width: 800px) {
    display: flex;
    /* margin-right: 15rem; */
    width: 94%;
    height: 2.3rem;
    margin-left: 1.5rem;
    margin-top: 0;
    background-color: #000000;
    border: 1px solid #ff8a00;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    ::placeholder {
      font-size: 1rem;
      color: #c5c5c5;
    }
    :focus::placeholder {
      color: transparent;
    }
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const SearchBar = () => {
  return (
    <>
      <SearchBarBody>
        <InputSearchBar type="search" placeholder="서비스를 검색해보세요" />
      </SearchBarBody>
    </>
  );
};

export default SearchBar;
