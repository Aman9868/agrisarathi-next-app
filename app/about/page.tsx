/* eslint-disable react/no-unescaped-entities */
import ComingSoonSection from '@/components/landing/ComingSoon'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-green-600">Us</span>
        </h2>
        <div className="mx-auto py-4">
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src="/about.png"
              alt="Team meeting silhouette against sunset"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We Are An Agritech Company That Combines Digital and Physical engagement to drive vision of democratizing agri services and enable FPO and cooperatives to be a sustainable platform for development.  We Believe In strength of Partnerships With Agri-Ecosystem Players To Create Value For The Farmers, FPO and Cooperatives And Rural People As Well As To Ensure Fair Returns To All The Stakeholders.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
            We Thrive With AGRI Expertise To Offer Our Digital Services, The Farmers Input Supplies, Agri Credit & Community Driven, "One-On-One" Crop, Cultivation Practices, Soil Testing, Drone Service for intelligent Farm Mechanization, Warehousing, Market Linkages, Etc. We Believe In Offering Customized Solutions To The Farmers Based On Their Specific Needs. Our Team Of Experts Works Closely With Farmers To Understand Their Challenges And Provide Tailored Solutions That Help Them Increase Their Productivity And Profitability. We Are Committed To Driving Positive Change In The Agricultural Sector And Contributing To The Overall Development Of Rural India.
          </p>
        </div>
      </div>
      <ComingSoonSection />
    </section>
  )
}

export default page