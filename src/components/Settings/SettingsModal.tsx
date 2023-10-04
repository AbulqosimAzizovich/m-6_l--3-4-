import CloseIcon from "./CloseIcon";
import Counter from "./Counter";
import { Switch } from "antd";
import "./style.scss";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const SettingsModal = () => {
  return (
    <div className="w-[448px] h-[610px]  bg-[#F2FFF5] rounded-3xl px-6 shadow-2xl">
      <div className="flex py-[24px] justify-between items-center max-h-16">
        <h2 className="font-bold text-[24px] tracking-[0.15px] text-[#14401D]">
          Settings
        </h2>
        <CloseIcon />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Dark mode</p>
        <Switch className="switch__" onChange={onChange} />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Focus length 25</p>
        <Counter status="focus" />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Pomodoros until long break 25</p>
        <Counter status="pomodoros" />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Short break length</p>
        <Counter status="short" />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Long break length 25</p>
        <Counter status="long" />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Auto resume timer</p>
        <Switch className="switch__" onChange={onChange} />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Sound</p>
        <Switch className="switch__" onChange={onChange} />
      </div>
      <div className="flex py-[24px] justify-between items-center  max-h-16">
        <p className="text-[#14401D]">Notifications</p>
        <Switch className="switch__" onChange={onChange} />
      </div>
    </div>
  );
};

export default SettingsModal;
