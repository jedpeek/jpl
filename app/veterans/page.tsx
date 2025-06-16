"use client";
import { motion } from "framer-motion";

export default function VAHomeLoanInfo() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          🇺🇸 VA Home Loans: Honoring Service with the Power of Homeownership
        </h1>
        <p className="text-lg text-slate-600">
          You served our country—now let us serve you. VA Home Loans make
          homeownership accessible and affordable for veterans, active-duty
          members, and eligible spouses.
        </p>
      </section>

      <motion.section
        className="bg-blue-50 p-6 rounded-2xl shadow"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          ✅ Key Benefits of a VA Home Loan
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>
            <strong>$0 Down Payment:</strong> Buy a home with no money down.
          </li>
          <li>
            <strong>No PMI:</strong> Save monthly with no private mortgage
            insurance required.
          </li>
          <li>
            <strong>Competitive Rates:</strong> Lower interest rates than many
            loan types.
          </li>
          <li>
            <strong>Flexible Credit Guidelines:</strong> Easier to qualify.
          </li>
          <li>
            <strong>Limited Closing Costs:</strong> VA limits what you can be
            charged.
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-white border border-slate-200 p-6 rounded-2xl shadow"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          🎖️ Who's Eligible?
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Active-duty service members</li>
          <li>Veterans who meet service requirements</li>
          <li>National Guard or Reserve with sufficient service</li>
          <li>Eligible surviving spouses</li>
        </ul>
      </motion.section>

      <motion.section
        className="bg-slate-100 p-6 rounded-2xl shadow"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          📚 VA Home Loan FAQs
        </h2>
        <div className="space-y-4 text-slate-700">
          <div>
            <p>
              <strong>Q:</strong> Do I have to be a first-time homebuyer?
            </p>
            <p>
              <strong>A:</strong> No, you can use the VA benefit more than once.
            </p>
          </div>
          <div>
            <p>
              <strong>Q:</strong> Can I use a VA loan for a second home?
            </p>
            <p>
              <strong>A:</strong> Only for a primary residence, not an
              investment property.
            </p>
          </div>
          <div>
            <p>
              <strong>Q:</strong> Is there a credit score requirement?
            </p>
            <p>
              <strong>A:</strong> Lenders generally require a score of 580–620
              or higher.
            </p>
          </div>
          <div>
            <p>
              <strong>Q:</strong> What is the VA funding fee?
            </p>
            <p>
              <strong>A:</strong> A one-time fee that can be waived or rolled
              into the loan.
            </p>
          </div>
          <div>
            <p>
              <strong>Q:</strong> Can I buy a condo with a VA loan?
            </p>
            <p>
              <strong>A:</strong> Yes, if the condo is VA-approved.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="text-center bg-white p-6 border border-slate-200 rounded-2xl shadow"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          👣 Ready to Take the First Step?
        </h2>
        <p className="text-slate-600 mb-4">
          Let’s explore your eligibility and get you closer to homeownership.
        </p>
        <div className="space-y-2">
          <p>🗓️ Schedule a free VA loan consultation today</p>
          <div className="m-8 border border-slate-300 rounded-2xl p-4 shadow-sm bg-slate-600 text-center hover:bg-slate-900 hover:scale-105 duration-150">
            <a
              href="https://www.calendly.com/jedpeek"
              target="_blank"
              className="text-center text-xl text-white"
            >
              SCHEDULE CONSULATATION
            </a>
          </div>
          <div className="m-8 border border-slate-300 rounded-2xl p-4 shadow-sm bg-blue-600 text-center hover:bg-blue-900 hover:scale-105 duration-150">
            <a
              href="https://1416824.my1003app.com/779577/register"
              target="_blank"
              className="text-center text-xl text-white"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
