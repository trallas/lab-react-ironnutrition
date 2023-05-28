import './App.css';
import "./foods.json";
import "../src/components/addFormFood.jsx"
import "../src/components/foodBox.jsx"
import "../src/components/searchBar.jsx"

function App () {
  return <div className="Pizza">
  <p> PIZZA </p>
  <img src="../public/images/pizza-argentina.jpg" alt="pizza" width={0} />
  <p> SALAD </p>
  <img src="FOOD_IMAGE_HERE" alt="salad" width={0} />
  <p> SWEET POTATO </p>
  <img src="FOOD_IMAGE_HERE" alt="sweetpotato" width={0} />
  <p> GNOCCHI </p>
  <img src="FOOD_IMAGE_HERE" alt="gnochi" width={0} />
  <p> POT ROAST </p>
  <img src="FOOD_IMAGE_HERE" alt="potroast" width={0} />
  <p> LASAGNA </p>
  <img src="FOOD_IMAGE_HERE" alt="lasagna" width={0} />
</div>};
export default App;