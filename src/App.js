import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/actions/index";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Counter Application</h1>
      <h4>Introduction to React-Redux</h4>
      <div className="App">
        <button
          onClick={() => dispatch(decNumber())}
          style={{ padding: "10%" }}
        >
          {" "}
          -
        </button>
        <input
          type="text"
          value={myState}
          readOnly
          disabled
          style={{ width: "10%", padding: "10%", fontSize: "14px" }}
        />
        <button
          onClick={() => dispatch(incNumber())}
          style={{ padding: "10%" }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}
