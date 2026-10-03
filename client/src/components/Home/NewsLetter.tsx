import { MailIcon } from "lucide-react";
import React from "react";

function NewsLetter() {
  return (
    <section className="bg-white py-18 px-4 sm:px-6 lg:px-8 rounded-3xl mx-auto shadow-xs mt-32 mb-20 ">
      <div className="max-w-2xl mx-auto text-center">
        <div className="size-16 bg-white rounded-xl flex-center mx-auto mb-6 shadow">
          <MailIcon className="size-8 text-app-green" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-semibold text-app-green-light mb-4 ">Subscribe to our NewsLetter</h2>
        <p className="text-app-text-light mb-8 text-base">Get weekly updates on fresh produce, seasonal offers, and exclusive discount right to your inbox</p>
      </div>
    </section>
  );
}

export default NewsLetter;
