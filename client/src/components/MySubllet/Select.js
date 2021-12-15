import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Netflix from "../../IMG/Logo/netflix_scrap.png";

const SelectTab = styled(Select)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
    font-size: 0.8rem;
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
    ":hover": {
      fontWeight: "regular",
      background: "#3a3f51",
    },
  }),
  clearIndicator: (provided) => ({ ...provided, color: "gray" }),
};

//!----------------------------------------------

const SelectTab2 = styled(Select)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
    font-size: 0.8rem;
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

//!--------------------------------------------------
const List = styled.div`
  /* text-align: center; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
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
`;

// const Logo = styled.img`
//   width: 5rem;
//   height: 2rem;
//   object-fit: cover;
// `;

export const SelectService = ({ index, setIndex }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const allServices = state.services;
  // console.log(state.services);

  const [data, setData] = useState({
    value: { label: "", value: "" },
  });
  // console.log(data.value);

  const options2 = allServices.map((service, idx) => {
    return {
      label: (
        <List onClick={() => setIndex(idx)}>
          <img src={service.outer_image} />
          <div>{service.title}</div>
        </List>
      ),
      value: service.title,
    };
  });
  console.log(index);

  const handleChange = (value) => {
    setData({ value: value });
  };

  return (
    <SelectTab
      classNamePrefix="Select"
      options={options2}
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 구독이 없습니다."
      }
      placeholder="구독을 선택해주세요."
      isClearable
    />
  );
};

export const SelectPlanPrice = ({ index, setIndex, filtered, prices }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const allServices = state.services;
  console.log(allServices);

  const [data, setData] = useState({
    value: { label: "", value: "" },
  });
  console.log(filtered);
  // const options2 = filtered[0].Prices.map((el) => {
  //   return {
  //     label: `${el.title + "," + el.price}`,
  //     value: `${el.title + "," + el.price}`,
  //   };
  // });
  const option = [{ label: "서비스륾 먼저 선택해주세요.", value: "" }];
  const options = [
    { label: "2인용 요금제, 3000원", value: "2인용 요금제, 3000원" },
    { label: "3인용 요금제, 5000원", value: "3인용 요금제, 5000원" },
    { label: "4인용 요금제, 6000원", value: "4인용 요금제, 6000원" },
  ];

  const handleChange = (value) => {
    setData({ value: value });
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
                value: `${el.title + "," + el.price}`,
              };
            })
      }
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 요금제가 없습니다."
      }
      placeholder="요금제 및 금액을 선택해주세요."
      isClearable
    />
  );
};

export const SelectDate = () => {
  const [data, setData] = useState({
    value: { label: "", value: "" },
  });
  console.log(data.value);

  const days = () => {
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push({ label: `매달 ${i}일`, value: i });
    }
    return arr;
  };

  const options = days();

  const handleChange = (value) => {
    setData({ value: value });
  };

  return (
    <SelectTab
      classNamePrefix="Select"
      options={options}
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 날짜가 존재하지 않습니다."
      }
      placeholder="결제일을 선택해주세요."
      isClearable
    />
  );
};

export const SelectDate2 = () => {
  const [data, setData] = useState({
    value: { label: "", value: "" },
  });
  console.log(data.value);

  const days = () => {
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push({ label: `매달 ${i}일`, value: i });
    }
    return arr;
  };

  const options = days();

  const handleChange = (value) => {
    setData({ value: value });
  };

  return (
    <SelectTab2
      classNamePrefix="Select"
      options={options}
      search
      // value={data.value}
      styles={styles}
      onChange={(value) => handleChange(value)}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? null : "해당하는 날짜가 존재하지 않습니다."
      }
      placeholder="결제일을 선택해주세요."
      isClearable
    />
  );
};
// export default SelectBox;
// export default SelectBox2;
