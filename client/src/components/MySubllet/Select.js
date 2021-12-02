import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import Netflix from "../../IMG/Logo/netflix_scrap.png";

const SelectTab = styled(Select)`
  width: 20rem;
`;

const List = styled.div`
  /* text-align: center; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  display: inline-flex;
  div {
    padding-left: 1rem;
  }
  img {
    width: 5rem;
    height: 2rem;
    object-fit: cover;
  }
`;

const Logo = styled.img`
  width: 5rem;
  height: 2rem;
  object-fit: cover;
`;

export const SelectBox = () => {
  const [data, setData] = useState({
    value: { label: "암거나 선택해라", value: "암거나 선택해라" },
  });
  console.log(data.value);

  const options = [
    {
      label: (
        <List>
          <img src={Netflix} />
          <div>Netflix</div>
        </List>
      ),
      value: "Netflix",
    },
    { label: 2020, value: 2020 },
    { label: 2019, value: 2019 },
    { label: 2018, value: 2018 },
    { label: 2017, value: 2017 },
    { label: 2016, value: 2016 },
    { label: 2015, value: 2015 },
    { label: 2014, value: 2014 },
    { label: 2013, value: 2013 },
    { label: 2012, value: 2012 },
    { label: 2011, value: 2011 },
    { label: 2010, value: 2010 },
    { label: 2009, value: 2009 },
    { label: 2008, value: 2008 },
    { label: 2007, value: 2007 },
    { label: 2006, value: 2006 },
    { label: 2005, value: 2005 },
    { label: 2004, value: 2004 },
    { label: 2003, value: 2003 },
    { label: 2002, value: 2002 },
    { label: 2001, value: 2001 },
    { label: 2000, value: 2000 },
  ];

  const handleChange = (value) => {
    setData({ value: value });
  };

  return (
    <SelectTab
      options={options}
      search
      value={data.value}
      onChange={(value) => handleChange(value)}
      defaultValue={{ label: 2002, value: 2002 }}
    />
  );
};

export const SelectBox2 = () => {
  const [data, setData] = useState({
    value: { label: "Choose Plan", value: "Choose Plan" },
  });
  console.log(data.value);

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
      options={options}
      search
      value={data.value}
      onChange={(value) => handleChange(value)}
      defaultValue={{
        label: "2인용 요금제, 3000원",
        value: "2인용 요금제, 3000원",
      }}
    />
  );
};

export const SelectBox3 = () => {
  const [data, setData] = useState({
    value: { label: "Choose Plan", value: "Choose Plan" },
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
      options={options}
      search
      value={data.value}
      onChange={(value) => handleChange(value)}
      defaultValue={options[0]}
    />
  );
};

// export default SelectBox;
// export default SelectBox2;
