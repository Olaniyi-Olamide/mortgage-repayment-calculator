import { useState } from "react";
import IconCalculator from "../assets/images/icon-calculator.svg";
export default function Form({
  mortgageAmount,
  setMortgageAmount,
  mortgageRate,
  setMortgageRate,
  mortgageTerm,
  setMortgageTerm,
  repayment,
  setRepayment,
  interestOnly,
  setInterestOnly,
  onSubmitForm,
  error,
  setError,
}) {
  return (
    <>
      <form className="space-y-[1rem]" onSubmit={onSubmitForm}>
        <MortgageAmount
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          error={error}
          setError={setError}
        />
        <div className="flex gap-[1rem] flex-col md:flex-row">
          <MortgageTerm
            mortgageTerm={mortgageTerm}
            setMortgageTerm={setMortgageTerm}
          />
          <MortgageRate
            mortgageRate={mortgageRate}
            setMortgageRate={setMortgageRate}
          />
        </div>
        <MortgageType
          repayment={repayment}
          setRepayment={setRepayment}
          interestOnly={interestOnly}
          setInterestOnly={setInterestOnly}
        />
        <CalculateRepayment />
      </form>
    </>
  );
}

function MortgageAmount({ mortgageAmount, setMortgageAmount, error }) {
  const [bgColor, setBgColor] = useState("bg-Slate100");
  return (
    <>
      <label className="text-Slate700 font-semibold text-[1.3rem] md:text-[1.15rem] lg:text-[1.3rem]">
        Mortgage Amount
      </label>
      <div className="flex items-center">
        <span
          className={`${bgColor}  p-[0.9rem] font-bold text-[1.2rem] absolute mt-[0.5rem] ml-[0.18rem] rounded-l-[0.5rem] text-Slate700 `}
        >
          £
        </span>
        <input
          className={`w-full bg-transparent border-Slate500 border-[0.14rem] px-[4rem] py-[0.7rem] text-Slate900 mt-2 rounded-[0.5rem] text-[1.5rem] font-semibold outline-Lime  outline-${error}`}
          type="text"
          value={!mortgageAmount ? "" : mortgageAmount}
          onChange={(e) => {
            setBgColor("bg-Lime");
            return setMortgageAmount(+e.target.value);
          }}
          onBlur={() => setBgColor("bg-Slate100")}
        />
      </div>
    </>
  );
}

function MortgageTerm({ mortgageTerm, setMortgageTerm }) {
  const [bgColor, setBgColor] = useState("bg-Slate100");
  return (
    <>
      <div className="flex flex-col md:gap-[0.3rem]">
        <label className="text-Slate700 font-semibold text-[1.3rem] md:text-[1.1rem] lg:text-[1.3rem]">
          Mortgage Term
        </label>
        <div className="flex items-center relative">
          <span
            className={`${bgColor} p-[0.9rem] font-bold text-[1.2rem] absolute  mt-[0.5rem] rounded-r-[0.5rem] right-0 mr-[.1rem]  text-Slate700 md:hidden`}
          >
            years
          </span>
          <input
            className="w-full bg-transparent border-Slate500 border-[0.14rem] px-[1.5rem] py-[0.7rem] text-Slate900 mt-2 rounded-[0.5rem] text-[1.5rem] font-semibold outline-Lime"
            type="text"
            value={!mortgageTerm ? "" : mortgageTerm}
            onChange={(e) => {
              setBgColor("bg-Lime");
              return setMortgageTerm(+e.target.value);
            }}
            onBlur={() => setBgColor("bg-Slate100")}
          />
          <span
            className={` hidden ${bgColor} p-[0.9rem] font-bold text-[1rem] mt-[0.5rem] rounded-r-[0.5rem] text-Slate700 absolute right-[0.1rem] md:block`}
          >
            years
          </span>
        </div>
      </div>
    </>
  );
}
function MortgageRate({ mortgageRate, setMortgageRate }) {
  const [bgColor, setBgColor] = useState("bg-Slate100");
  return (
    <>
      <div className="flex flex-col md:gap-[0.3rem]">
        <label className="text-Slate700 font-semibold text-[1.3rem] md:text-[1.1rem] lg:text-[1.3rem]">
          Mortgage Rate
        </label>

        <div className="flex items-center relative">
          <span
            className={`${bgColor} p-[0.9rem] font-bold text-[1.2rem] absolute mt-[0.5rem] rounded-r-[0.5rem] right-0 mr-[0.1rem] text-Slate700 md:hidden`}
          >
            %
          </span>

          <input
            className="w-full bg-transparent border-Slate500 border-[0.14rem] px-[1.5rem] py-[0.7rem] text-Slate900 mt-2 rounded-[0.5rem] text-[1.5rem] font-semibold outline-Lime"
            type="text"
            value={!mortgageRate ? "" : mortgageRate}
            onChange={(e) => {
              setBgColor("bg-Lime");
              return setMortgageRate(+e.target.value);
            }}
            onBlur={() => setBgColor("bg-Slate100")}
          ></input>

          <span
            className={`hidden ${bgColor} p-[0.9rem] font-bold text-[1rem] mt-[0.5rem] rounded-r-[0.5rem] text-Slate700 absolute right-[0.1rem] md:block`}
          >
            %
          </span>
        </div>
      </div>
    </>
  );
}

function MortgageType({
  repayment,
  setRepayment,
  interestOnly,
  setInterestOnly,
}) {
  return (
    <>
      <h3 className="text-Slate700 font-semibold text-[1.3rem] md:text-[1.15rem] lg:text-[1.3rem]">
        Mortgage Type
      </h3>

      <div
        className={
          repayment === true
            ? "flex items-center gap-4 border-2 border-Lime px-[1.5rem] py-[0.7rem] rounded-[0.5rem] mb-2.5 bg-LightLime"
            : "flex items-center gap-4 border-2 border-Slate300 px-[1.5rem] py-[0.7rem] rounded-[0.5rem] mb-2.5"
        }
      >
        <input
          id="repayment"
          type="checkbox"
          className="w-[1.5rem] h-[1.5rem] rounded-full appearance-none checked:bg-Lime checked:border-LightLime300 checked:border-4 border-[0.1rem] transition-all duration-200"
          checked={repayment}
          onChange={() => {
            interestOnly === true
              ? setInterestOnly(!interestOnly)
              : setRepayment(!repayment);

            return setRepayment(!repayment);
          }}
        />
        <label
          htmlFor="repayment"
          className="text-[1.5rem] text-Slate900 font-bold"
        >
          Repayment
        </label>
      </div>

      <div
        className={
          interestOnly === true
            ? "flex items-center gap-4 border-2 border-Lime px-[1.5rem] py-[0.7rem] rounded-[0.5rem] mb-2.5 bg-LightLime"
            : "flex items-center gap-4 border-2 border-Slate300 px-[1.5rem] py-[0.7rem] rounded-[0.5rem] mb-2.5"
        }
      >
        <input
          id="interest"
          type="checkbox"
          className="w-[1.5rem] h-[1.5rem] rounded-full appearance-none checked:bg-Lime checked:border-LightLime300 checked:border-4 border-[0.1rem] transition-all duration-200"
          checked={interestOnly}
          onChange={() => {
            repayment === true
              ? setRepayment(!repayment)
              : setInterestOnly(!interestOnly);

            return setInterestOnly(!interestOnly);
          }}
        />
        <label
          htmlFor="interest"
          className="text-[1.5rem] text-Slate900 font-bold"
        >
          Interest Only
        </label>
      </div>
    </>
  );
}

function CalculateRepayment() {
  return (
    <button className="bg-Lime rounded-[2rem] p-[0.7rem] w-full md:w-[100%] lg:w-[70%] text-Slate900 font-bold text-[1.15rem] md:text-[1rem] lg:text-[1.15rem] flex items-center justify-center gap-[1rem] mt-[1.5rem]">
      <img src={IconCalculator} alt="icon-calculator" />
      Calculate Repayment
    </button>
  );
}
