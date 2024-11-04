/** @format */
export const OptionButtons = ({ options, onButtonClick, onResetClick }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onButtonClick(option)}>
          {option}
        </button>
      ))}
      <button type="button" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
};
