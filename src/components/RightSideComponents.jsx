import IllustrationEmpty from "../assets/images/illustration-empty.svg";

export default function RightSideComponents({
  monthlyRepayment,
  totalRepayment,
}) {
  return (
    <div className=" flex flex-col bg-Slate900 p-[1.5rem] md:p-[2rem] md:rounded-r-[1rem] md:rounded-bl-[3.5rem] space-y-2.5 basis-[50%]">
      {(monthlyRepayment === 0) & (totalRepayment === 0) ? (
        <EmptyResult />
      ) : null}

      {(monthlyRepayment > 0) & (totalRepayment > 0) ? (
        <>
          <ResultDescription />
          <RepaymentResult
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
          />
        </>
      ) : null}
    </div>
  );
}

function ResultDescription() {
  return (
    <>
      <h3 className="text-White font-bold text-[1.5rem] mb-[1.2rem]">
        Your results
      </h3>
      <p className="font-semibold text-Slate300 text-[1.1rem] text-left">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayment" again.
      </p>
    </>
  );
}

function RepaymentResult({ monthlyRepayment, totalRepayment }) {
  return (
    <>
      <span className="bg-Lime h-[0.4rem] w-full rounded-t-[1rem] mt-[1rem]"></span>
      <div className="flex flex-col p-[1.2rem] gap-[1rem] bg-DarkSlate rounded-b-[1rem] mt-[-0.7rem] mb-[2rem] md:mb-[6.3rem]">
        <p className="text-Slate300 text-[1.15rem] font-semibold">
          Your monthly repayments
        </p>
        <h1 className="text-Lime text-[2.5rem] font-bold">
          ${monthlyRepayment}
        </h1>
        <span className="bg-Slate900 h-[0.1px] brightness-200"></span>
        <p className="text-Slate300 text-[1.15rem] font-semibold">
          Total you'll repay over the term
        </p>
        <h2 className="text-White text-[2rem] font-semibold">
          ${totalRepayment}
        </h2>
      </div>
    </>
  );
}

function EmptyResult() {
  return (
    <div className="flex flex-col items-center justify-center gap-[1rem] md:py-[3rem]">
      <img src={IllustrationEmpty} alt="illustration-empty" />

      <h2 className="text-White text-[2rem] font-semibold">
        Results shown here
      </h2>

      <p className="font-semibold text-Slate300 text-[1.1rem]  mb-[2rem] md:mb-[7.3rem] text-center">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
