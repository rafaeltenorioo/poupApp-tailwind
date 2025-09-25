import { useRef } from "react";

export const Dialog = ({ children }) => {
  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="p-4 w-120 m-auto text-center rounded-3xl [&::backdrop]:opacity-75 [&::backdrop]:bg-neutral-background"
      >
        <p>Essa funcionalidade ainda está em processo de criação...</p>
        <button
          autofocus
          onClick={closeDialog}
          className="bg-neutral-header cursor-pointer rounded-3xl py-1 px-3 text-neutral-text text-[16px] mt-3"
        >
          Close
        </button>
      </dialog>
      <button onClick={openDialog} className="cursor-pointer">
        {children}
      </button>
    </>
  );
};
