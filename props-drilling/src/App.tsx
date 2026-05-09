import Card from "./components/Card";

function App() {
  return (
    <div className="Parent">
      {<Card user="Aman" />}
      {<Card />}
      {<Card />}
    </div>
  );
}
export default App;
