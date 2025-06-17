"use client";

import ContentfulImage from "@/lib/contentful-image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VALoanPage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            VA Home Loans Made Simple
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn how VA loans empower veterans and active-duty service members
            to become homeowners—with zero down payment and no PMI.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <ContentfulImage
            src="https://source.unsplash.com/featured/?veteran,home"
            alt="Veteran and family in front of home"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          /> */}
          <div className="object-cover bg-[url('public/images/JPL_VA_Flag.jpg')] w-100 h-80 rounded-xl shadow-md mx-auto w-400 h-80"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Why Choose a VA Loan?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ 0% Down Payment Required</li>
            <li>✅ No Private Mortgage Insurance (PMI)</li>
            <li>✅ Competitive Interest Rates</li>
            <li>✅ Flexible Credit Requirements</li>
            <li>✅ Reusable VA Loan Benefit</li>
          </ul>
        </motion.div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-slate-100 py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Designed for Service Members & Veterans
          </h3>
          <p className="text-lg mb-8">
            VA home loans are backed by the Department of Veterans Affairs,
            offering trusted support to those who’ve served our country. Whether
            it’s your first home or your next, this benefit helps make ownership
            more attainable.
          </p>
          <div className="imagecontainer rounded-xl mx-auto h-80"></div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-slate-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-2xl md:text-3xl font-semibold mb-6">
            Ready to Get Started?
          </h4>
          <Link href="https://1416824.my1003app.com/779577/register">
            <div className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-slate-200 transition">
              Apply Today
            </div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
