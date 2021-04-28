const Switch = ({ text, state }) => {
  return (
    <div className={`switch ${state ? "active" : "inactive"}`}>
      <span>{text}</span>
    </div>
  );
};

export default Switch;
