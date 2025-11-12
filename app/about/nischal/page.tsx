/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <section className="my-12">
      <div className="container mx-auto px-2">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Name at Top */}

          <div className="  px-8 text-left border-b-2 border-gray-400 bg-gray-50">
            <h3 className="text-5xl font-semibold">Nischal Shrestha</h3>
            <p className="text-lg mt-2">Founder & CEO</p>
          </div>

          {/* Content Area */}
          <div className="p-4">
            {/* Centered Profile Image */}
            <div className="flex justify-center mb-8">
              <img
                src="/3.jpg"
                alt="John Doe"
                className="w-120 h-120 object-cover rounded-full shadow-xl border-4 border-white -mt-4"
              />
            </div>

            {/* Description */}
            <div className="text-justify">
              <div className="prose max-w-none mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed">
                  A young entrepreneur passionate about bringing modern retail
                  experiences to local communities across Nepal. Born in Vyas
                  Municipality, Tanahun District. Business has always been a
                  part of Shrestha’s roots. His father started a small grocery
                  business even before Shrestha’s was born — a humble store
                  built on trust, honesty, and a deep sense of service to the
                  community. As Shrestha’s grew up, he watched his father’s
                  dedication, hard work, and unwavering commitment to his
                  customers, which left a lasting impression on him.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Inspired by his father’s values, Shrestha’s decided to carry
                  forward the family dream — but in a new and modern way. This
                  vision gave birth to Lasata, a fresh and innovative brand that
                  honors his father’s legacy while embracing modern retail
                  concepts. Through Lasata, Shrestha’s continues to blend
                  traditional values with a customer-focused, forward-thinking
                  approach, keeping the family’s spirit of service alive for a
                  new generation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Successfully completed 10+2 in Computer Engineering with an A
                  grade, and currently pursuing Bachelor’s degree in a related
                  field. Shrestha’s technical background inspires to integrate
                  modern technology and digital systems into business
                  operations, creating a smarter and more efficient shopping
                  experience.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Vision To serve every corner of Nepal by providing easy access
                  to quality products at fair prices — building trust and
                  connection with customers across the nation. Lasata aims to
                  become a household name known for honesty, convenience, and
                  care.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Mr. Nischal Shrestha&#39;s Legacy Lasata Department Store is
                  more than just a growing brand — it’s a family story continued
                  with pride. What started as a small grocery shop by his father
                  has now become a modern marketplace under Nischal’s
                  leadership, carrying forward the same honesty, dedication, and
                  love for the community. Message from the Founder
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  “Dream big, stay consistent — success follows those who serve
                  with heart.” My father started the dream with hard work and
                  honesty — I’m carrying it forward with heart and innovation.
                  Lasata is more than a store; it’s a family story, a legacy of
                  love, and a promise to serve every corner of Nepal with
                  pride.”
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Visionary
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Leader
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Entrepreneur
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Mentor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
