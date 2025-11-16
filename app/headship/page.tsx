/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FiAward, FiHeart, FiUsers, FiTarget } from "react-icons/fi";

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      id: 1,
      name: "Niranjan Shrestha",
      position: "Founder of Bishnu Impex & Senior Advisor-Lasata(LDS)",
      image: "/team/senior-shrestha.jpg",
      description:
        "The humble beginnings of Lasata started with his small grocery shop over 25 years ago. His values of honesty and customer care remain our foundation.",
      experience: "25+ years in retail",
      education: "Traditional Business Wisdom",
      strengths: ["Customer Relations", "Traditional Values", "Mentorship"],
      quote:
        "Honesty and care are more important than profit. Treat every customer like family.",
      email: "advisor@lasata.com",
      legacy: true,
    },
    {
      id: 2,
      name: "Nischal Shrestha",
      position: "Founder & Managing Director",
      image: "/7.jpg",
      description:
        "Visionary entrepreneur with a passion for serving the local community and continuing the family legacy of honest business practices.",
      experience: "10+ years in retail business",
      education: "Business Management",
      strengths: [
        "Strategic Planning",
        "Community Engagement",
        "Business Development",
      ],
      quote:
        "Every customer is family, and every product carries our promise of quality and care.",
      email: "nischal@lasata.com",
      featured: true,
    },
  ];
  const ManagementTeam = [
    {
      id: 1,
      name: "Sandesh Shrestha",
      position: "CTO - Chief Technology Officer",
      image: "/6.jpg",
      description:
        "Leading Lasata's digital transformation and technological innovation to create seamless shopping experiences across both physical and digital platforms.",
      experience: "25+ years in retail",
      education: "BICTE",
      strengths: [
        "Customer Experience Technology",
        "Inventory Management Systems",
        "Digital Innovation",
        "Agile Project Management",
      ],
      quote:
        "Technology should serve people, not complicate their lives. We're building digital solutions that make shopping at Lasata effortless and enjoyable for every customer.",
      email: "advisor@lasata.com",
      legacy: true,
    },
  ];

  const values = [
    {
      icon: FiHeart,
      title: "Customer First",
      description: "Every decision starts with what's best for our customers",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FiTarget,
      title: "Quality Assurance",
      description:
        "We never compromise on the quality of products and services",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiUsers,
      title: "Community Focus",
      description: "We grow together with our local community in Tanahun",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FiAward,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our business",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const timeline = [
    {
      year: "2000",
      title: "Humble Beginnings",
      description:
        "Small grocery shop opened by Senior Shrestha in Vyas Municipality",
    },
    {
      year: "2015",
      title: "Next Generation",
      description:
        "Nischal Shrestha joins the business, bringing modern vision",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Started planning for online presence and modern retail",
    },
    {
      year: "2025",
      title: "Lasata Department Store",
      description: "Grand opening of the modern department store",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <FiAward className="text-yellow-300" />
              <span>Leadership Team</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-yellow-300">Leadership</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-4">
              The Vision Behind Lasata Department Store
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              From a small family grocery to Tanahun's favorite shopping
              destination - guided by values, driven by vision, and dedicated to
              our community.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Founder Spotlight */}

      {/* Leadership Team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Leadership</span> Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated individuals who guide Lasata with passion,
              expertise, and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:transform hover:-translate-y-2"
              >
                {/* Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-yellow-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {member.legacy && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                      Legacy Leader
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {member.position}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Strengths */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Key Strengths:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.strengths.map((strength, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-700 text-sm italic">
                      "{member.quote}"
                    </p>
                  </div>

                  {/* Contact */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Management</span> Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated individuals who supported Lasata with passion,
              expertise, and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ManagementTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:transform hover:-translate-y-2"
              >
                {/* Member Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-yellow-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {member.legacy && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                      Legacy Leader
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {member.position}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Strengths */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Key Strengths:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.strengths.map((strength, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-700 text-sm italic">
                      "{member.quote}"
                    </p>
                  </div>

                  {/* Contact */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Values</span> &{" "}
              <span className="text-blue-600">Philosophy</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and action at Lasata
              Department Store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    


    </div>
  );
}
