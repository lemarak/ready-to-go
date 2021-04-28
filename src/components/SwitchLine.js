import Switch from "./Switch";

const SwitchLine = ({ sw, setSwitch }) => {
  return (
    <div className="switch-line">
      <Switch text="ON" state={sw} />
      <Switch text="OFF" state={!sw} />
    </div>
  );
};

export default SwitchLine;
