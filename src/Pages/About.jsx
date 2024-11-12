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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            excepturi! Est?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            beatae quia atque officiis dolorum inventore cupiditate eligendi
            repudiandae debitis et libero, dolore temporibus explicabo nemo
            facere consequatur accusamus dolor illum!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fuga,
            iste aut commodi consequatur est dicta nam saepe excepturi cum
            aliquid earum molestias asperiores, iure neque exercitationem
            obcaecati, eum eos.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            quisquam, adipisci totam provident neque consequuntur repudiandae
            necessitatibus odio eveniet, explicabo dolores! Iste, blanditiis
            molestias dolores repellendus consectetur inventore. Totam,
            eligendi?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            rem repellat. Quidem deleniti, a enim hic perspiciatis ducimus,
            tempore accusantium voluptate amet cumque quas omnis illo quos?
            Placeat ex esse cum excepturi. Mollitia velit necessitatibus
            praesentium enim quod sequi tempora delectus?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Placeat ex esse cum excepturi. Mollitia velit necessitatibus
            praesentium enim quod sequi tempora delectus?
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
