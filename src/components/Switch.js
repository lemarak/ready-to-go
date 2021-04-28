const Switch = ({ text, state, sw, setSwitch }) => {
  // state : button active or inactive
  // sw : value du switch
  const handleClick = () => {
    setSwitch(!sw);
  };
  return (
    <div
      className={`switch ${state ? "active" : "inactive"}`}
      onClick={() => {
        if (!state) {
          handleClick();
        }
      }}
    >
      <span>{text}</span>
    </div>
  );
};

export default Switch;
