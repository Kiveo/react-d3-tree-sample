import "./styles.css";
import TreeSC from "./TreeSC";
import orgChart from "./assets/data/orgChart";

export default function App() {
  return (
    <div className="App">
      <TreeSC data={orgChart} />
    </div>
  );
}
