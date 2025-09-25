export const Button = ({ children }) => {
  return (
    <button className="rounded-3xl py-2 px-6 gap-2 items-center flex  text-neutral-text text-[16px] border border-neutral-text cursor-pointer">
      {children}
    </button>
  );
};
