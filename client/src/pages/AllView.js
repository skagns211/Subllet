import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Filter from "../components/AllView/Filter";
import FilterList from "../components/AllView/FilterList";

const StyledBody = styled.section`
  max-width: 950px;
  margin: 0 auto;
`;

const AllView = () => {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [free, setFree] = useState(false);
  const [services, setServices] = useState();
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState();

  const [categoryName, setCategoryName] = useState("카테고리");
  const [priceName, setpriceName] = useState("가격");
  const [freeName, setfreeName] = useState("체험하기 유무");

  const [select, setSelect] = useState({
    category: "",
    price: "",
    free: "",
  });

  useEffect(() => {
    axios.get("/service").then((res) => {
      setServices(res.data.services);
      setFilter(res.data.services);
    });
  }, [refresh]);

  // useEffect(() => {
  //   if (filter) {
  //   }
  // }, [select]);

  const filterServices = (category, price, free) => {
    if (category) {
      setCategoryName(category.target.textContent);
      if (category.target.textContent === "모든 카테고리") {
        setSelect({ ...select, category: "all" });
      } else {
        setSelect({
          ...select,
          category: category.target.textContent.toLowerCase(),
        });
      }
    } else if (price) {
      setpriceName(price.target.textContent);
      if (price.target.textContent === "모든 가격") {
        setSelect({ ...select, price: "all" });
      } else {
        setSelect({
          ...select,
          price: Number(price.target.textContent),
        });
      }
    } else if (free) {
      setfreeName(free.target.textContent);
      if (free.target.textContent === "모든 체험") {
        setSelect({ ...select, free: "all" });
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

    let filtered = filter.filter((service) => {
      return (
        service.category === select.category ||
        Number(service.Prices[0].price.slice(0, -1)) === select.price ||
        service.demo === select.free
      );
    });
    console.log(filtered);
  };

  // const filterCategory = (category) => {
  //   if (category.target.textContent === "모든 카테고리") {
  //     let filtered = services.filter((service) => {
  //       return service.category;
  //     });
  //     setFilter(filtered);
  //   } else {
  //     let filtered = filter.filter((service) => {
  //       return service.category === category.target.textContent.toLowerCase();
  //     });
  //     setFilter(filtered);
  //   }
  // };

  // const filterPrice = (price) => {
  //   if (price.target.textContent === "모든 가격") {
  //     setFilter(services);
  //   } else {
  //     let filtered = filter.filter((service) => {
  //       return (
  //         Number(service.Prices[0].price.slice(0, -1)) <=
  //         Number(price.target.textContent)
  //       );
  //     });
  //     setFilter(filtered);
  //   }
  // };

  // const filterFree = (free) => {
  //   if (free.target.textContent === "모든 체험") {
  //     setFilter(services);
  //   } else {
  //     let filtered = filter.filter((service) => {
  //       if (free.target.textContent === "유") {
  //         return service.demo === true;
  //       } else {
  //         return service.demo === false;
  //       }
  //     });
  //     setFilter(filtered);
  //   }
  // };

  const refreshFilter = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      {category ? (
        <StyledBody>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
            filterServices={filterServices}
            refreshFilter={refreshFilter}
            categoryName={categoryName}
            priceName={priceName}
            freeName={freeName}
            // filterCategory={filterCategory}
            // filterPrice={filterPrice}
            // filterFree={filterFree}
            select={select}
          />
          <FilterList services={services} filter={filter} />
        </StyledBody>
      ) : price ? (
        <StyledBody>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
            filterServices={filterServices}
            refreshFilter={refreshFilter}
            categoryName={categoryName}
            priceName={priceName}
            freeName={freeName}
            // filterCategory={filterCategory}
            // filterPrice={filterPrice}
            // filterFree={filterFree}
            select={select}
          />
          <FilterList services={services} filter={filter} />
        </StyledBody>
      ) : free ? (
        <StyledBody>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
            filterServices={filterServices}
            refreshFilter={refreshFilter}
            categoryName={categoryName}
            priceName={priceName}
            freeName={freeName}
            // filterCategory={filterCategory}
            // filterPrice={filterPrice}
            // filterFree={filterFree}
            select={select}
          />
          <FilterList services={services} filter={filter} />
        </StyledBody>
      ) : (
        <StyledBody>
          <Filter
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            free={free}
            setFree={setFree}
            filterServices={filterServices}
            refreshFilter={refreshFilter}
            categoryName={categoryName}
            priceName={priceName}
            freeName={freeName}
            // filterCategory={filterCategory}
            // filterPrice={filterPrice}
            // filterFree={filterFree}
            select={select}
          />
          <FilterList services={services} filter={filter} />
        </StyledBody>
      )}
    </>
  );
};

export default AllView;
