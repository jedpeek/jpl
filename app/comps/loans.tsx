"use client";
import ContentfulImage from "@/lib/contentful-image";
import { motion } from "framer-motion";

export default function LoanInfo() {
  return (
    <section className="bg-white text-slate-800 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col">
          <div className="h-1 bg-slate-200 rounded overflow-hidden mb-6">
            <motion.div
              className="w-24 h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-black font-bold text-3xl mb-2 sm:mb-0">
              Find the Right Loan for You
            </h1>
            <p className="sm:w-3/5 text-slate-600 text-lg sm:pl-10">
              Whether you're buying your first home, investing in property, or
              looking for flexible financing, we offer a range of mortgage
              options tailored to your goals. Explore our most popular loan
              programs below.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={i}
              className="p-4 md:w-1/3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg group ">
                <div
                  className={
                    [
                      "bg-[url('public/images/home-house-svgrepo-com.svg')] bg-cover object-center w-full h-64 }} ",
                      "bg-[url('public/images/contract-svgrepo-com.svg')] bg-cover  w-full h-64 }} ",
                      "bg-[url('public/images/mortgage-loan-mortgage-svgrepo-com.svg')] bg-cover object-center w-full h-64 }} ",
                    ][i]
                  }
                />
                {/* <div className="object-cover bg-[url('public/images/home-house-svgrepo-com.svg')] bg-cover object-center w-full h-64 transition-transform duration-500 group-hover:scale-105}} " />
                <ContentfulImage src={""} /> */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    {["Conventional Loan", "FHA Loan", "Investment Loans"][i]}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {
                      [
                        "A great option for buyers with strong credit, offering competitive rates and flexible terms. Ideal for primary or secondary residences with as little as 3% down.",
                        "Backed by the Federal Housing Administration, this loan is perfect for first-time homebuyers or those with less-than-perfect credit. Down payments as low as 3.5%.",
                        "Designed for real estate investors looking to finance rental or income-generating properties. Includes flexible underwriting and options for both short- and long-term investments.",
                      ][i]
                    }
                  </p>
                  <a
                    href={
                      [
                        "/loans/conventional",
                        "/loans/fha",
                        "/loans/investment",
                      ][i]
                    }
                    className="inline-flex items-center text-black font-medium hover:text-slate-700 hover:scale-105 duration-200"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
