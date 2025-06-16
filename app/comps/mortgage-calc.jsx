import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MortgageCalculator() {
  const [formData, setFormData] = useState({
    purchasePrice: 400000,
    downPayment: 20, // Default 20% if percentage
    downPaymentType: "percent", // "dollar" or "percent"
    term: 30,
    interestRate: 6.5,
    insurance: 100,
    propertyTax: 300,
    mortgageInsurance: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const convertDownPayment = (value, fromType, toType, purchasePrice) => {
    if (toType === "percent") {
      return (value / purchasePrice) * 100;
    } else {
      return (value / 100) * purchasePrice;
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let updatedValue = type === "number" ? parseFloat(value) : value;

    if (name === "downPaymentType") {
      updatedValue = value;
      const newDownPayment = convertDownPayment(
        formData.downPayment,
        formData.downPaymentType,
        updatedValue,
        formData.purchasePrice
      );
      setFormData({
        ...formData,
        downPaymentType: updatedValue,
        downPayment: parseFloat(newDownPayment.toFixed(2)),
      });
    } else if (name === "purchasePrice") {
      const newPurchasePrice = parseFloat(value);
      const newDownPayment = convertDownPayment(
        formData.downPayment,
        formData.downPaymentType,
        formData.downPaymentType,
        newPurchasePrice
      );
      setFormData({
        ...formData,
        purchasePrice: newPurchasePrice,
        downPayment: parseFloat(newDownPayment.toFixed(2)),
      });
    } else {
      setFormData({
        ...formData,
        [name]: updatedValue,
      });
    }
  };

  const calculate = () => {
    setShowResults(true);
  };

  const getMonthlyPayment = () => {
    const principal =
      formData.downPaymentType === "percent"
        ? formData.purchasePrice * (1 - formData.downPayment / 100)
        : formData.purchasePrice - formData.downPayment;
    const monthlyInterest = formData.interestRate / 100 / 12;
    const numPayments = formData.term * 12;
    const monthlyPrincipalInterest =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numPayments));
    const totalMonthly =
      monthlyPrincipalInterest +
      formData.insurance +
      formData.propertyTax +
      formData.mortgageInsurance;
    return {
      principal: principal.toFixed(2),
      monthlyPrincipalInterest: monthlyPrincipalInterest.toFixed(2),
      totalMonthly: totalMonthly.toFixed(2),
    };
  };

  const results = getMonthlyPayment();

  return (
    <div>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mortgage Calculator
      </h2>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow space-y-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-md font-medium text-slate-700">
              Purchase Price
            </label>
            <input
              type="number"
              name="purchasePrice"
              value={formData.purchasePrice}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700">
              Down Payment
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="downPayment"
                value={formData.downPayment}
                onChange={handleChange}
                className="mt-1 block w-full border rounded p-2"
              />
              <select
                name="downPaymentType"
                value={formData.downPaymentType}
                onChange={handleChange}
                className="mt-1 block border rounded p-2"
              >
                <option value="dollar">$</option>
                <option value="percent">%</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700">
              Term (years)
            </label>
            <input
              type="number"
              name="term"
              value={formData.term}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700">
              Interest Rate (%)
            </label>
            <input
              type="number"
              name="interestRate"
              value={formData.interestRate}
              step="0.01"
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700">
              Insurance ($/mo)
            </label>
            <input
              type="number"
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-slate-700">
              Property Tax ($/mo)
            </label>
            <input
              type="number"
              name="propertyTax"
              value={formData.propertyTax}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Mortgage Insurance ($/mo)
            </label>
            <input
              type="number"
              name="mortgageInsurance"
              value={formData.mortgageInsurance}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>
        </div>

        <div
          className="m-8 border border-slate-300 rounded-2xl p-4 shadow-sm bg-blue-600 text-center hover:bg-blue-900 hover:scale-105 duration-150 text-center text-xl text-white"
          onClick={calculate}
        >
          Calculate Payment
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 space-y-2 text-slate-700"
            >
              <div>
                <strong>Principal:</strong> ${results.principal}
              </div>
              <div>
                <strong>Principal & Interest:</strong> $
                {results.monthlyPrincipalInterest}
              </div>
              <div>
                <strong>Taxes & Insurance:</strong> $
                {(
                  formData.insurance +
                  formData.propertyTax +
                  formData.mortgageInsurance
                ).toFixed(2)}
              </div>
              <div className="text-xl font-bold">
                Total Monthly Payment: ${results.totalMonthly}
              </div>
              <a
                href="/apply"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Get Pre-Approved
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="m-8 border border-slate-300 rounded-2xl p-4 shadow-sm bg-blue-600 text-center hover:bg-blue-900 hover:scale-105 duration-150">
          <a
            href="https://1416824.my1003app.com/779577/register"
            target="_blank"
            className="text-center text-xl text-white"
          >
            APPLY NOW
          </a>
        </div>
        <div className="mt-8 text-sm text-slate-600 space-y-2">
          <h3 className="font-semibold text-slate-700 text-lg font-bold">
            Helpful Tips
          </h3>
          <p>
            <strong>Mortgage Insurance:</strong> Typically required if your down
            payment is less than 20%. It can range from 0.3% to 1.5% of the loan
            amount annually. 1% is a good place to start.
          </p>
          <p>
            <strong>Home Insurance:</strong> Estimate about $35 per month for
            every $100,000 of home value, depending on location and coverage.
          </p>
          <p>
            <strong>Property Tax:</strong> Local rates vary widely, but a common
            estimate is 1.0% to 1.25% of your home's assessed value annually.
          </p>
        </div>
      </div>
    </div>
  );
}
