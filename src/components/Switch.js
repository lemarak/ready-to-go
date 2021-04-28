const Switch = ({ text, state, sw, setSwitch }) => {
  // state : button active or inactive
  // sw : value du switch
  const handleClick = () => {
    console.log(sw);
    setSwitch(!sw);
  };
  return (
    <div
      className={`switch ${state ? "active" : "inactive"}`}
      onClick={!state && handleClick} // onClick only if button is inactive
    >
      <span>{text}</span>
    </div>
  );
};

export default Switch;
