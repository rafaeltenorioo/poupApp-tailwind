import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin1.png";
import github from "../../assets/github1.png";

export const Aside = () => {
  return (
    <aside className="bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col gap-[56px]">
      <img src={logo} alt="" />
      <p className="text-neutral-text text-[13px] leading-[120%] text-center">
        Desenvolvido por Rafael Tenório.
      </p>
      <a
        href="https://www.linkedin.com/in/rafael-ten%C3%B3rio-63792927b/"
        className="flex justify-center gap-2 items-center"
      >
        <img src={linkedin} alt="" className="w-6" />
        <p className="text-neutral-text">Linkedin</p>
      </a>
      <a
        href="https://github.com/rafaeltenorioo"
        className="flex justify-center gap-2 items-center"
      >
        <img src={github} alt="" className="w-6" />
        <p className="text-neutral-text">GitHub</p>
      </a>
    </aside>
  );
};
