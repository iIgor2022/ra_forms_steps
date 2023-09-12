import { useState } from "react"
import StepCounterForm from "./stepCounterForm";
import StepCounterTeble from "./stepCounterTable";

export default function StepCounter() {
  const [walks, setWalks] = useState([]);
  
  const onAdd = (walk) => {
    const newWalks = [...walks];
    const sameDate = newWalks.find((obj) => obj.date === walk.date);

    if (sameDate) {
      sameDate.distance += walk.distance;
    } else {
      newWalks.push(walk);
      newWalks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setWalks(newWalks);
  };

  const onDelete = (id) => {
    setWalks((prevWalks) => prevWalks.filter((obj) => obj.id !== id));
  }

  return (
    <div className="walk-counter">
      <StepCounterForm onAdd={onAdd}/>
      <StepCounterTeble walks={walks} onDelete={onDelete}/>
    </div>
  );
}