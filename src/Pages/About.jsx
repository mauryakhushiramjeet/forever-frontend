import React from "react";
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Tittle text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            "Shop the latest trends and exclusive deals – your one-stop
            destination for all things stylish!"
          </p>
          <p>
            We are a customer-focused company dedicated to providing
            high-quality products and services that meet the evolving needs of
            our customers. With a commitment to excellence, innovation, and
            trust, we strive to create a seamless and satisfying shopping
            experience while building long-lasting relationships.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission is to deliver high-quality products and exceptional
            service, ensuring customer satisfaction at every step. We aim to
            create a seamless shopping experience while building trust and
            lasting relationships with our customers.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Tittle text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            The Quality Assurance section emphasizes the commitment to offering
            only the best products, ensuring they meet high standards of
            durability, performance, and customer satisfaction. Each item is
            carefully curated to guarantee reliability and value.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            The Convenience section focuses on providing a hassle-free shopping
            experience, with easy navigation, quick access to products, and
            seamless checkout processes designed to save time and effort for
            customers.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            The Exceptional Customer Service section emphasizes a commitment to
            providing prompt, reliable, and customer-focused support. It
            highlights efforts to ensure a seamless shopping experience,
            addressing customer needs with care and professionalism.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
