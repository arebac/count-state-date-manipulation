import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handlePrevCount(step) {
    setCount((s) => s - step);
  }

  function handleNextCount(step) {
    setCount((s) => s + step);
  }
  function handlePrevStep() {
    setStep((s) => s - 1);
  }
  function handleNextStep() {
    setStep((s) => s + 1);
  }

  return (
    <div className="theBttns">
      <button onClick={() => handlePrevCount(step)}>Prev</button>
      <span>Count : {count}</span>
      <button onClick={() => handleNextCount(step)}>Next</button>

      <button onClick={() => handlePrevStep()}>Prev</button>
      <span>Step: {step}</span>
      <button onClick={() => handleNextStep()}>Next</button>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default Count;
