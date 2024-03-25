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
  // function handlePrevStep() {
  //   setStep((s) => s - 1);
  // }
  // function handleNextStep() {
  //   setStep((s) => s + 1);
  // }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => handlePrevCount(step)}>Prev</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => handleNextCount(step)}>Next</button>
        {/* <button onClick={() => handlePrevStep()}>Prev</button>
        <span>Step: {step}</span>
        <button onClick={() => handleNextStep()}>Next</button> */}
      </div>
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

      {count != 0 || step != 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default Count;
