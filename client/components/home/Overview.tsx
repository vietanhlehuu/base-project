import React from "react";
import { useOverviewData } from "../../hooks/home/useOverviewData";

const Overview: React.FC = () => {
  const { income, expenses, expenseRate, budget } = useOverviewData();
  // TODO: using dayjs later
  return (
    <div className="relative isolate before:block before:absolute before:inset-0 before:bg-black before:z-[-1] before:opacity-20 bg-[url('/images/bg.jpeg')] py-10 px-4 grid gap-4 justify-items-center bg-cover text-white">
      <p className="text-[18px]">Available Budget in December 2021:</p>
      <p className="text-[40px] font-bold">{budget}</p>
      <p className="text-right bg-income w-full max-w-[350px] grid grid-cols-[1fr_1fr_70px] gap-2  items-center p-3 uppercase ">
        <span className="text-left text-black">Income:</span>
        <span>{income ? `+${income}` : "0"}</span>
      </p>
      <p className="text-right bg-expense w-full max-w-[350px] grid grid-cols-[1fr_1fr_70px] gap-2 items-center p-3 uppercase">
        <span className="text-left text-black">Expenses:</span>
        <span>{expenses ? `+${expenses}` : "0"}</span>
        <span className="p-1 text-xs rounded-md justify-self-end bg-expense-light">
          {income ? `${expenseRate}%` : "--"}
        </span>
      </p>
    </div>
  );
};

export default Overview;
