import { useState } from "react";
import LeftSideComponents from "./components/LeftSideComponents";
import RightSideComponents from "./components/RightSideComponents";

function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [mortgageRate, setMortgageRate] = useState("");
  const [repayment, setRepayment] = useState(false);
  const [interestOnly, setInterestOnly] = useState(false);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [error, setError] = useState("");

  // Calculations
  const monthlyBill = mortgageAmount / (mortgageTerm * 12);
  const intrestRate =
    ((mortgageRate / 100) * mortgageAmount) / (mortgageTerm * 12);
  const totalInterestRate = intrestRate * (mortgageTerm * 12);
  const monthlyRepaymentCalc = (monthlyBill + intrestRate).toFixed(2);
  const totalRepaymentCalc = (
    monthlyRepaymentCalc *
    (mortgageTerm * 12)
  ).toFixed(2);

  function handleSubmit(e) {
    e.preventDefault();
    if (!mortgageAmount || !mortgageTerm || !mortgageRate) return;

    if (repayment === true) {
      setMonthlyRepayment(monthlyRepaymentCalc);
      setTotalRepayment(totalRepaymentCalc);
    }

    if (interestOnly === true) {
      setMonthlyRepayment(intrestRate.toFixed(2));
      setTotalRepayment(totalInterestRate.toFixed(2));
    }
  }

  function handleClear() {
    setMortgageAmount("");
    setMortgageRate("");
    setMortgageTerm("");
    setRepayment(false);
    setInterestOnly(false);
    setMonthlyRepayment(0);
    setTotalRepayment(0);
  }
  return (
    <div className="flex flex-col md:flex-row md:items-center bg-Slate300 h-[100%] md:p-[2rem] lg:p-[8rem] p-0 gap-0 md:gap-[0rem]">
      <div className="bg-White flex flex-col md:flex-row md:items-center rounded-[1rem]">
        <LeftSideComponents
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          mortgageRate={mortgageRate}
          setMortgageRate={setMortgageRate}
          repayment={repayment}
          setRepayment={setRepayment}
          interestOnly={interestOnly}
          setInterestOnly={setInterestOnly}
          onSubmitForm={handleSubmit}
          onClearForm={handleClear}
          error={error}
          setError={setError}
        />
        <RightSideComponents
          monthlyRepayment={monthlyRepayment}
          totalRepayment={totalRepayment}
        />
      </div>
    </div>
  );
}

export default App;
