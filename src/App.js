import "./styles.css";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import data from "./utils/data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Let's get to know each other (ugly version v4)</h1>
      <h2>We can build a card to present ourselves</h2>
      <CardContainer />
      <div className="pc-card-container">
        {data.map((elem, index) => {
          return <Card elem={elem} />;
        })}
      </div>
    </div>
  );
}

for (var index in data) {
  console.log(data[index]);
} 
