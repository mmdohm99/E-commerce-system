import FilterListToggle from "./FilterListToggle";
import "../styles/filterpanel.css";
// import CheckboxComponent from "./Checkbox";
import SliderProton from "./SliderProton";
import { categoryList, ratingList } from "../constans/constantData";
const FilterPandel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
  cuisines,
  setSelectedRating,
  changeChecked,
  selectedPrice,
  changedPrice,
  setSelectedCategory,
}) => {
  return (
    <div>
      <div className="input-group">
        <p
          className="label"
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedCategory(null)}
        >
          Price filter
        </p>
      </div>

      <div className="input-group">
        <p className="label-ran ge"></p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* Star rating */}
      <div className="input-group">
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedRating(null)}
        >
          Star Rating
        </p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPandel;
