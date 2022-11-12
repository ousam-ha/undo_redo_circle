import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [poppedPoints, setPoppedPoints] = useState([]);
  const handleAddPoint = (e) => {
    const { pageX, pageY } = e;
    setPoints((prevState) => [...prevState, { x: pageX, y: pageY }]);
  };

  const handleUndo = () => {
    const updatePoints = [...points];
    if (points.length <= 0) return;
    const poppedPoint = updatePoints.pop();
    setPoppedPoints((prevState) => [...prevState, poppedPoint]);
    setPoints(updatePoints);
  };

  const handleRedo = () => {
    const poppedPointsArrReplica = [...poppedPoints];
    if (poppedPoints.length <= 0) return;
    const poppedPoint = poppedPointsArrReplica.pop();
    setPoppedPoints(poppedPointsArrReplica);
    setPoints((prevState) => [...prevState, poppedPoint]);
  };

  return (
    <>
      <div
        className="actions-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#395B64",
        }}
      >
        <button className="button" onClick={handleUndo}>
          Undo
        </button>
        <button className="button" onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="container" onClick={handleAddPoint}>
        {points.map((point, index) => (
          <div
            key={point.x + "" + point.y + "" + index}
            style={{
              left: point.x - 10,
              top: point.y - 10,
              position: "absolute",
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              border: "2px #E7F6F2 solid",
              zIndex: "14",
              display: "inline",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
