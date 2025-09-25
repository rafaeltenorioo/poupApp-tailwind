import formatter from "../../formatter";
import { IconBank } from "../../icons";

export const MyAccountsBank = ({ bank, value, showBorder }) => {
  const baseClass = "flex justify-between py-6 px-4";
  const borderClass = showBorder ? "border-b-4 border-neutral-header" : "";
  return (
    <li className={`${baseClass} ${borderClass}`}>
      <div className="flex gap-2 items-center">
        <IconBank />
        <p className="text-[15px] text-neutral-text font-bold">{bank}</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[15px] text-neutral-text font-bold">Saldo</p>
        <p className="text-neutral-text">{formatter.format(value)}</p>
      </div>
    </li>
  );
};
