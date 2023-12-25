// import { Component } from "react";
import { useState } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import Options from "./options/Options";
import Notification from "./notofication/Notification";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allClick = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  }

  let total = good + bad + neutral;

    const countPositiveFeedbackPercentage= ()=> {
    return ((good * 100) / total).toFixed();
    }

  return (
    <Section title="Please leave feedback">
      <Options
        options={{ good, neutral, bad }}
        onLeaveFeedback={allClick}
      ></Options>
      {total === 0 ? (
        <Notification messege="There is no feedback"></Notification>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
    </Section>
  );
}

  export default Feedback;