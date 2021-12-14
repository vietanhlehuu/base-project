import React from "react";
import BudgetList from "../components/home/BudgetList";
import NewItemForm from "../components/home/NewItemForm";
import Overview from "../components/home/Overview";

const Home: React.FC = () => {
  return (
    <div>
      <Overview />
      <div className="flex items-center justify-center p-4 bg-gray-100 border border-gray-300">
        <NewItemForm />
      </div>
      <div className="mt-4">
        <BudgetList />
      </div>
    </div>
  );
};

export default Home;
