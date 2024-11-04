/** @format */
export const Feedback = ({
  good,

  neutral,

  bad,

  total,
  positive,
}) => {
  return (
    <div>
      <p>Statistics</p>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positive}%</li>
      </ul>
    </div>
  );
};
