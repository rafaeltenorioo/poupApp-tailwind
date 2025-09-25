import formatter from "../../formatter";

export const Earnings = ({ name, value, date, showBorder }) => {
  const baseClass = "flex justify-between py-6 px-4";
  const borderClass = showBorder ? " border-b-4 border-neutral-header" : "";
  return (
    <li className={`${baseClass} ${borderClass}`}>
      <div className="flex flex-col gap-2">
        <p className="text-secondary-income text-[15px] font-bold">{name}</p>
        <p className="text-secondary-income">+{formatter.format(value)}</p>
      </div>
      <p className="text-neutral-text">{date}</p>
    </li>
  );
};
