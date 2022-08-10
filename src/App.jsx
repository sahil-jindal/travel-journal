import Location from "./components/Location/Location.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import travelData from "./data.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      {travelData.map((location, index) => {
        return <Location key={index} details={location} />
      })}
    </div>
  );
}

export default App;
