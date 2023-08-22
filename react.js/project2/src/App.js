// import logo from './logo.svg';
import "./App.css";

function App() {
  const date = new Date();
  const currentHour = date.getHours();

  const name = "Oliver";

  const timeStyle = {
    color: "red",
  };

  let greeting = "";
  if (currentHour > 12) {
    greeting = "Good Afternoon";
    timeStyle.color = "blue";
  } else {
    greeting = "Good Morning";
    timeStyle.color = "red";
  }

  const baconImage =
    "https://assets.epicurious.com/photos/630386df4eaa77f49a537aa5/1:1/w_2240,c_limit/Brown_Sugar_Bacon_RECIPE_081722_38635.jpg";
  const ramenImage =
    "https://www.justonecookbook.com/wp-content/uploads/2023/04/Spicy-Shoyu-Ramen-8025-II.jpg";
  const hotDogImage =
    "https://www.thespruceeats.com/thmb/3RnYaB9iJdkzJ-2AROuLzA1vYTY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-hot-dogs-1808491-final-01-ddf78878cb784ccdb617a2ae31674b75.jpg";

  return (
    <div>
      <h1 className="title" spellCheck="false">
        {name}'s Favorite Foods
      </h1>
      <h1 className="hour" style={timeStyle}>
        Currently it's {`${currentHour}. ${greeting}.`}
      </h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
      <img className="food-imgs" src={baconImage} alt="Bacon" />
      <img className="food-imgs" src={ramenImage} alt="Ramen" />
      <img className="food-imgs" src={hotDogImage} alt="Hot Dogs" />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
