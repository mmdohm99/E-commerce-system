import React, { useContext, useEffect, useState } from "react";
import FilterPandel from "../components/Filterpandel";
import List from "../components/ListComponent";
import SearchBar from "../components/Searchbar";
import "../styles/filter.css";
import { v4 as uuid } from "uuid";
// import { dataList } from '../constans/constantData';
import EmptyView from "../components/EmptyView";
import { ProductsContext } from "../context/productContext";

const FilterPage = () => {

  const { products } = useContext(ProductsContext);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([100, 50000]);
  const [list, setList] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    setList(() => products);
  }, [products]);
    console.log(selectedPrice);
    console.log(list);
    console.log(resultsFound);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (_id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item._id === _id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  // Filter //

  const applyFilters = () => {
    let updatedList = products;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.ratingsAverage) === parseInt(selectedRating)
      );
    }

   

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    // console.log(searchInput)
    // console.log(updatedList)
    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.listPrice >= minPrice && item.listPrice <= maxPrice
    );

    console.log(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    setList(() => updatedList);
    console.log(list);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);

  return (
    <div className="">
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="home-panel-list-wrap">
        <div className="home-panel-wrap">
          <FilterPandel
            setSelectedCategory={setSelectedCategory}
            setSelectedRating={setSelectedRating}
            selectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cusines={cuisines}
            changeChecked={handleChangeChecked}
            changedPrice={handleChangePrice}
          />
        </div>

        {/*List and empty view */}
        <div className="home-list-wrap">
          {resultsFound ? <List products={list} /> : <EmptyView />}
        </div>
      </div>
     
      
    </div>
  );
};

export default FilterPage;
