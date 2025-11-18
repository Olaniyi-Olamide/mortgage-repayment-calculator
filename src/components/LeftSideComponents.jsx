import Header from "./Header";
import Form from "./Form";
export default function LeftSideComponents({
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
  onClearForm,
  error,
  setError,
}) {
  return (
    <div className="bg-White p-[1.5rem] md:px-[2.5rem] md:rounded-l-[1rem] space-y-[1rem] basis-[50%]">
      <Header onClearForm={onClearForm} />
      <Form
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
        onSubmitForm={onSubmitForm}
        error={error}
        setError={setError}
      />
    </div>
  );
}
