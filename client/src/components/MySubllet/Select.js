import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SelectTab = styled(Select)`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  width: 100%;
  .Select__control {
    height: 3.5rem;
    border: 0.5px solid #ff8a00;
    border-radius: 0.2em;
    background-color: black;
    color: white !important;
    cursor: pointer;
    text-align: center;
    :hover {
      border-color: white;
      background-color: #3a3f51;
    }
  }
  .Select__placeholder {
    text-align: center;
    font-size: 0.7rem;
  }
  .Select__option {
    font-size: 1rem;
    background-color: black;
    color: #ff8a00;
  }
  .Select__input {
    color: white !important;
  }
  .Select__menu {
    color: #ff8a00;
    background-color: black;
    border: 0.5px solid #ff8a00;
    /* text-align: center; */
  }

  .Select__control--is-focused {
    /* box-shadow: 0 0 0 1px #ff8a00; */
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }
`;

//!----------------------------------------------

const SelectTab2 = styled(Select)`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  width: 80%;
  .Select__control {
    height: auto;
    border: 0.5px solid #ff8a00;
    border-radius: 0.2em;
    background-color: black;
    color: white !important;
    cursor: pointer;
    text-align: center;
    :hover {
      border-color: white;
      background-color: #3a3f51;
    }
  }
  .Select__placeholder {
    text-align: center;
    font-size: 0.75rem;
  }
  .Select__option {
    background-color: black;
    color: #ff8a00;
  }
  .Select__input {
    color: white !important;
  }
  .Select__menu {
    color: #ff8a00;
    background-color: black;
    font-size: 0.8rem;
    border: 0.5px solid #ff8a00;
    text-align: center;
  }

  .Select__control--is-focused {
    /* box-shadow: 0 0 0 1px #ff8a00; */
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }
`;

//!-------------------------------------------------
const SelectTabNav = styled(Select)`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  height: 1rem;
  width: 15rem;
  font-size: 1rem;
  display: flex;
  margin-top: 1rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    display: none;
  }
  img{
    width: 2rem;
    height: 1rem;
  }
  .Select__control {
    width: 100%;
    height: auto;
    border: 0.5px solid #ff8a00;
    border-radius: 0.2em;
    background-color: black;
    font-size: 1rem !important;
    color: white !important;
    cursor: pointer;
    text-align: center;
    :hover {
      border-color: white;
      background-color: #3a3f51;
    }
    @media only screen and (max-width: 1050px) and (min-width: 800px) {
      width: 15rem;
    }
  }
  .Select__value-container {
    width: 100%;
    height: 100%;
  }
  .Select__single-value {
    width: 100%;
    height: 100%;
    .sc-eCImPb.kcVkMP {
      height: 100%;
    }
  }
  .Select__placeholder {
    text-align: center;
    font-size: 0.8rem;
  }
  .Select__option {
    width: 100%
    background-color: black;
    color: #ff8a00;
    /* font-size: 1rem; */
  }
  .Select__input {
    font-size: 1rem;
    color: white !important;
  }
  .Select__menu {
    width: 100%;
    color: #ff8a00;
    background-color: black;
    font-size: 0.8rem;
    border: 0.5px solid #ff8a00;
    /* text-align: center; */
  }
  .Select__label {
  }

  .Select__control--is-focused {
    /* box-shadow: 0 0 0 1px #ff8a00; */
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }
`;
//!--------------------------------------------------
const SelectTabNavDown = styled(Select)`
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  height: 1rem;
  width: 100%;
  padding-bottom: 2rem;
  font-size: 1rem;
  padding-bottom: 2rem;
  display: flex;
  /* border: 1px solid yellow; */
  @media only screen and (max-width: 800px) {
    width: 95%;
    margin: auto;
  }

  .Select__control {
    width: 100%;
    height: auto;
    font-size: 1rem;
    border: 0.5px solid #ff8a00;
    border-radius: 0.2em;
    background-color: black;
    color: white !important;
    cursor: pointer;
    text-align: center;
    :hover {
      border-color: white;
      background-color: #3a3f51;
    }
    @media only screen and (max-width: 1050px) and (min-width: 800px) {
      width: 15rem;
    }
  }
  .Select__placeholder {
    text-align: center;
    font-size: 0.8rem;
  }
  .Select__option {
    background-color: black;
    color: #ff8a00;
    font-size: 1rem;
  }
  .Select__input {
    color: white !important;
  }
  .Select__menu {
    color: #ff8a00;
    background-color: black;
    font-size: 0.8rem;
    border: 0.5px solid #ff8a00;
    /* text-align: center; */
  }
  .Select__label {
  }

  .Select__control--is-focused {
    /* box-shadow: 0 0 0 1px #ff8a00; */
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }
`;

//!--------------------------------------------------
const styles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: "#ff8a00",
  }),
  noOptionsMessage: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    height: "auto",
    cursor: "pointer",
    ":hover": {
      fontWeight: "regular",
      background: "#3a3f51",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: 1,
  }),
  clearIndicator: (provided) => ({ ...provided, color: "gray" }),
};

//!--------------------------------------------------
const List = styled.div`
  /* text-align: center; */
  @font-face {
    font-family: "InfinitySans-RegularA1";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "InfinitySans-RegularA1";
  font-size: 1.5rem;
  width: 100%;
  display: inline-flex;
  div {
    display: flex;
    padding-left: 1rem;
    align-items: center;
  }
  img {
    width: 5rem;
    height: 2rem;
    object-fit: cover;
  }
  .opImg {
    width: 3rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
`;

export const SelectService = ({ index, setIndex, postBody, setPostBody }) => {
  const state = useSelector((state) => state);
  const allServices = state.services;

  const options2 = allServices.map((service, idx) => {
    return {
      label: (
        // <List onClick={() => setIndex(idx)}>
        <List onClick={() => setPostBody({ ...postBody, id: idx + 1 })}>
          <img src={service.outer_image} />
          <div>{service.title}</div>
        </List>
      ),
      value: { title: service.title, id: service.id },
    };
  });

  const handleChange = (value) => {
    if (value !== null) {
      setPostBody({ ...postBody, id: value.value.id });
    } else {
      setPostBody({ ...postBody, id: "" });
    }
  };

  return (
    <SelectTab
      classNamePrefix="Select"
      options={options2}
      onChange={(value) => handleChange(value)}
      search
      // value={data.value}
      styles={styles}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 서비스가 없습니다"
      }
      placeholder="서비스를 선택해 주세요"
      isClearable
    />
  );
};

export const SelectPlanPrice = ({
  index,
  setIndex,
  filtered,
  postBody,
  setPostBody,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const allServices = state.services;

  const option = [
    { label: "서비스를 먼저 선택해 주세요", value: null, isDisabled: true },
  ];

  const handleChange = (value) => {
    if (value) {
      setPostBody({
        ...postBody,
        planname: value.value[0].title,
        planprice: value.value[0].price,
      });
    } else {
      setPostBody({
        ...postBody,
        planname: "",
        planprice: "",
      });
    }
  };

  return (
    <SelectTab
      classNamePrefix="Select"
      options={
        filtered.length === 0
          ? option
          : filtered[0].Prices.map((el) => {
              return {
                label: `${el.title + "," + el.price}`,
                value: [{ title: el.title, price: el.price }],
              };
            })
      }
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 요금제가 없습니다"
      }
      placeholder="요금제 및 금액을 선택해 주세요"
      isClearable
      // isDisabled={true}
    />
  );
};

export const SelectDate = ({ postBody, setPostBody }) => {
  const days = () => {
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push({ label: `매달 ${i}일`, value: i });
    }
    return arr;
  };

  const options = days();

  const handleChange = (value) => {
    if (value !== null) {
      setPostBody({
        ...postBody,
        paydate: value.value,
      });
    } else {
      setPostBody({
        ...postBody,
        paydate: "",
      });
    }
  };

  return (
    <SelectTab
      classNamePrefix="Select"
      options={options}
      search
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 날짜가 존재하지 않습니다"
      }
      placeholder="결제일을 선택해 주세요"
      isClearable
    />
  );
};

export const SelectDate2 = ({ patchBody, setPatchBody, id }) => {
  const days = () => {
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push({ label: `${i}일`, value: i });
    }
    return arr;
  };
  const options = days();

  const handleChange = (value) => {
    if (value !== null) {
      setPatchBody({
        ...patchBody,
        paydate: value.value,
        id: id,
      });
    } else {
      setPatchBody({
        ...patchBody,
        paydate: "",
      });
    }
  };
  const [holderMessage, setHolderMessage] = useState("결제일을 선택해 주세요");

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    innerWidth <= 816
      ? setHolderMessage("Day")
      : setHolderMessage("결제일을 선택해 주세요");
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SelectTab2
      classNamePrefix="Select"
      options={options}
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 날짜가 존재하지 않습니다"
      }
      placeholder={holderMessage}
      isClearable
    />
  );
};

export const SelectPrice = ({
  options,
  patchBody,
  setPatchBody,
  planname,
  planprice,
}) => {
  const handleChange = (value) => {
    if (value !== null) {
      setPatchBody({
        ...patchBody,
        id: value.value.id,
        planname: value.value.planname,
        planprice: value.value.planprice,
      });
    } else {
      setPatchBody({
        ...patchBody,
        id: "",
        planname: "",
        planprice: "",
      });
    }
  };

  const [holderMessage, setHolderMessage] = useState("요금제를 선택해 주세요");

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    innerWidth <= 816
      ? setHolderMessage("Price")
      : setHolderMessage("요금제를 선택해 주세요");
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SelectTab2
      classNamePrefix="Select"
      options={options}
      search
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 요금제가 존재하지 않습니다"
      }
      placeholder={holderMessage}
      isClearable
      // selectedValue={{ label: `${planname} (${planprice})`, value: "" }}
    />
  );
};
// export default SelectBox;
// export default SelectBox2;

export const NavSelectService = ({ setIndex, postBody, setPostBody }) => {
  const state = useSelector((state) => state);
  const allServices = state.services;

  const options = allServices.map((service, idx) => {
    return {
      label: (
        <List
          onClick={() => {
            window.location.replace(`/detail/${service.id}`);
          }}
        >
          <img className="opImg" src={service.outer_image} />
          <div>{service.title}</div>
        </List>
      ),
      value: service.title,
    };
  });

  return (
    <SelectTabNav
      classNamePrefix="Select"
      options={options}
      // onChange={(value) => handleChange(value)}
      search
      // value={data.value}
      styles={styles}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 서비스가 없습니다"
      }
      placeholder="서비스를 검색해 보세요"
      isClearable
    />
  );
};

export const NavSelectServiceDown = ({ setIndex, postBody, setPostBody }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const allServices = state.services;

  const options2 = allServices.map((service, idx) => {
    return {
      label: (
        <List
          onClick={() => {
            window.location.replace(`/detail/${service.id}`);
          }}
        >
          <img src={service.outer_image} />
          <div>{service.title}</div>
        </List>
      ),
      value: service.title,
    };
  });

  const handleChange = (value) => {
    if (value !== null) {
      setPostBody({ ...postBody, id: value.value.id });
    } else {
      setPostBody({ ...postBody, id: "" });
    }
  };

  return (
    <SelectTabNavDown
      classNamePrefix="Select"
      options={options2}
      // onChange={(value) => handleChange(value)}
      search
      // value={data.value}
      styles={styles}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 구독이 없습니다"
      }
      placeholder="서비스를 검색해 보세요"
      isClearable
    />
  );
};
