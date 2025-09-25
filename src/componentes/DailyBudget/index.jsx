import formatter from "../formatter";

export const DailyBudget = ({ value }) => {
  return (
    <p className="m-0 text-primary-highlight font-bold text-[39px] leading-[125%] text-center">
      {formatter.format(value)}
    </p>
  );
};
