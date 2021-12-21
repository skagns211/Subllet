import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Filter from "../components/AllView/Filter";
import FilterList from "../components/AllView/FilterList";
import LoadingSpinner from "../components/LodingSpinner";

const StyledBody = styled.article`
  max-width: 950px;
  margin: 0 auto;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`;

const AllView = () => {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [free, setFree] = useState(false);
  const [services, setServices] = useState();
  const [filter, setFilter] = useState([""]);
  const [categoryName, setCategoryName] = useState("카테고리");
  const [priceName, setpriceName] = useState("가격");
  const [freeName, setfreeName] = useState("체험하기 유무");
  const [loading, setLoading] = useState();

  const [select, setSelect] = useState({
    category: "",
    price: "",
    free: "",
  });

  useEffect(() => {
    setLoading(true);
    axios.get("/service").then((res) => {
      setLoading(false);
      setServices(res.data.services);
      setFilter(res.data.services);
    });
  }, []);

  useEffect(() => {
    if (services) {
      let filtered = services.filter((service) => {
        if (!select.category && !select.price && select.free === "") {
          return service;
        }
        if (!select.price && select.free === "") {
          return service.category === select.category;
        } else if (!select.category && select.free === "") {
          return Number(service.Prices[0].price.slice(0, -1)) <= select.price;
        } else if (!select.category && !select.price) {
          return service.demo === select.free;
        } else if (!select.category) {
          return (
            Number(service.Prices[0].price.slice(0, -1)) <= select.price &&
            service.demo === select.free
          );
        } else if (!select.price) {
          return (
            service.category === select.category && service.demo === select.free
          );
        } else if (select.free === "") {
          return (
            service.category === select.category &&
            Number(service.Prices[0].price.slice(0, -1)) <= select.price
          );
        } else {
          return (
            service.category === select.category &&
            Number(service.Prices[0].price.slice(0, -1)) <= select.price &&
            service.demo === select.free
          );
        }
      });
      setFilter(filtered);
    }
  }, [select]);

  const filterServices = (category, price, free) => {
    if (category) {
      setCategoryName(category.target.textContent);
      if (category.target.textContent === "모든 카테고리") {
        setSelect({ ...select, category: "" });
      } else {
        setSelect({
          ...select,
          category: category.target.textContent.toLowerCase(),
        });
      }
    } else if (price) {
      setpriceName(price.target.textContent);
      if (price.target.textContent === "모든 가격") {
        setSelect({ ...select, price: "" });
      } else {
        setSelect({
          ...select,
          price: Number(price.target.textContent.slice(1)),
        });
      }
    } else if (free) {
      setfreeName(free.target.textContent);
      if (free.target.textContent === "모든 체험") {
        setSelect({ ...select, free: "" });
      } else {
        let boolean;
        if (free.target.textContent === "유") {
          boolean = true;
        } else {
          boolean = false;
        }
        setSelect({
          ...select,
          free: boolean,
        });
      }
    }
  };

  return (
    <StyledBody>
      {loading ? (
        <Loading>
          <LoadingSpinner />
        </Loading>
      ) : (
        <>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
            filterServices={filterServices}
            categoryName={categoryName}
            priceName={priceName}
            freeName={freeName}
          />
          <FilterList filter={filter} />
        </>
      )}
    </StyledBody>
  );
};

export default AllView;
