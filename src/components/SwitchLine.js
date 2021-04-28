import Switch from "./Switch";

const SwitchLine = ({ sw, setSwitch }) => {
  // sw : switch
  return (
    <div className="switch-line">
      <Switch text="ON" sw={sw} state={sw} setSwitch={setSwitch} />
      <Switch text="OFF" sw={sw} state={!sw} setSwitch={setSwitch} />
    </div>
  );
};

export default SwitchLine;
