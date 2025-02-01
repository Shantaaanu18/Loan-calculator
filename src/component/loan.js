import React, { useState, useEffect } from "react";
import { IoChevronBackSharp } from 'react-icons/io5';

import { BsThreeDotsVertical } from "react-icons/bs";

import "./Loan.css";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(14500000);
  const [loanPeriod, setLoanPeriod] = useState(12);
  const [installment, setInstallment] = useState(150000);
  const maxLoan = 17484500;
  const minLoan = 1000000;
  const minPeriod = 6;
  const maxPeriod = 18;

  useEffect(() => {
    const calculatedInstallment = Math.round((loanAmount / loanPeriod) );
    setInstallment(calculatedInstallment);
  }, [loanAmount, loanPeriod]);

  return (
    <div className="container">
      <div className="loan-calculator">
        <IoChevronBackSharp className="back-icon" />
        
        <h2>Loan Calculator</h2>
        <BsThreeDotsVertical className="icon" />

        <div className="funding-box">
          <p>Maximum Funding</p>
          <h1>Rp {maxLoan.toLocaleString()}</h1>
          <p>Honda ADV 150 CBS 2023</p>
          <p className="p">2022 </p>
        </div>

        <div className="slider-container">
          <label>Loan Amount</label>
          <h3>Rp {loanAmount.toLocaleString()}</h3>
          <input
            type="range"
            min={minLoan}
            max={maxLoan}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </div>

        <div className="slider-container">
          <label>Loan Period</label>
          <h3>{loanPeriod} Months</h3>
          <input
            type="range"
            min={minPeriod}
            max={maxPeriod}
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
          />
        </div>

        <div className="installment-box">
          <p>Estimated monthly installment</p>
          <h2>Rp {installment.toLocaleString()}</h2>
          <p>
            Installment fees may change according to the verification of the vehicle’s condition.
          </p>
        </div>

        <button className="apply-btn">APPLY LOAN</button>
      </div>
    </div>
  );
};

export default LoanCalculator;
