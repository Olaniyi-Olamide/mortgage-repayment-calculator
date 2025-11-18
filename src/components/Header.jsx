export default function Header({ onClearForm }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[0.5rem] md:gap-[4rem]">
      <h1 className="text-Slate900 font-bold text-[1.5rem] md:text-[1.2rem] lg:text-[1.5rem]">
        Mortgage Calculator
      </h1>
      <a
        className="text-Slate500 underline text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold cursor-pointer"
        onClick={onClearForm}
      >
        Clear all
      </a>
    </div>
  );
}
