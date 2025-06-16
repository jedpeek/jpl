"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  DocumentIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  CheckCircleIcon,
  CalculatorIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  ReceiptRefundIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What documents do I need to apply for a mortgage?",
    answer:
      "You'll typically need proof of income (pay stubs, W-2s, tax returns), bank statements, employment verification, ID, and credit information.",
    icon: DocumentIcon,
  },
  {
    question: "How much do I need for a down payment?",
    answer:
      "While 20% is ideal to avoid PMI, many programs allow 3–5% down. FHA loans require 3.5%. VA and USDA loans may need 0%.",
    icon: CurrencyDollarIcon,
  },
  {
    question: "What credit score do I need to get approved?",
    answer:
      "Most lenders look for 620 or higher. FHA allows scores down to 580. Higher scores get better rates.",
    icon: CreditCardIcon,
  },
  {
    question:
      "What’s the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is a quick estimate. Pre-approval is verified with a credit check and documents, making it more credible.",
    icon: CheckCircleIcon,
  },
  {
    question: "How much can I afford to borrow?",
    answer:
      "Use the 28/36 rule: 28% of income on housing, 36% on total debt. Lenders look at your debt-to-income ratio.",
    icon: CalculatorIcon,
  },
  {
    question: "What types of mortgage loans are available?",
    answer:
      "Common loans include Conventional, FHA, VA, USDA, and ARMs. Each has different benefits.",
    icon: HomeModernIcon,
  },
  {
    question: "What is private mortgage insurance (PMI)?",
    answer:
      "PMI is required for down payments under 20%. It protects the lender and can often be removed once you have 20% equity.",
    icon: ShieldCheckIcon,
  },
  {
    question: "What are closing costs, and how much should I expect to pay?",
    answer:
      "Closing costs are 2–5% of the loan amount and include fees for appraisals, title, and more.",
    icon: ReceiptRefundIcon,
  },
  {
    question:
      "Can I get a mortgage if I’m self-employed or have inconsistent income?",
    answer:
      "Yes. You'll need 2+ years of tax returns and possibly a profit/loss statement. More paperwork, but totally doable.",
    icon: BriefcaseIcon,
  },
  {
    question: "How long does the mortgage approval process take?",
    answer:
      "Typically 30–45 days. Being organized and responsive can help speed things up.",
    icon: ClockIcon,
  },
];

export default function MortgageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mortgage FAQ
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {faqs.map((faq, index) => {
          const Icon = faq.icon;
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl bg-white p-6 shadow transition hover:shadow-md"
            >
              <button
                className="flex justify-between items-start w-full text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <Icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <span className="text-slate-800 font-medium text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-500 mt-1 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 mt-4 text-lg">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
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
    </section>
  );
}
