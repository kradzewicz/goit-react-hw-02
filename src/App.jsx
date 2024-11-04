/** @format */

import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description";
import { OptionButtons } from "./components/Options";
import { Feedback } from "./components/Feedback";
import { Notification } from "./components/Notification";

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [count, setCount] = useState(() => {
    const startCount = JSON.parse(localStorage.getItem("feedback"));
    return startCount && typeof startCount === "object" && "good" in startCount
      ? startCount
      : initialState;
  });

  const [statSwitch, setStatSwitch] = useState(() => {
    if (localStorage.getItem("feedback") === JSON.stringify(initialState)) {
      return false;
    }
    return true;
  });

  const { good, neutral, bad } = count;

  const onButtonClick = (option) => {
    setCount((prev) => ({
      ...prev,
      [option]: ~~prev[option] + 1,
    }));
    setStatSwitch(true);
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(count));
  }, [count]);

  const onResetClick = () => {
    setCount(initialState);
    setStatSwitch(false);
    localStorage.setItem("feedback", JSON.stringify(initialState));
  };

  const total = good + neutral + bad;
  const positiveFeedback = total
    ? Math.round(((count.good + count.neutral) / total) * 100)
    : 0;

  return (
    <>
      <Description />
      <OptionButtons
        options={Object.keys(initialState)}
        onButtonClick={onButtonClick}
        onResetClick={onResetClick}
      />
      {statSwitch ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
