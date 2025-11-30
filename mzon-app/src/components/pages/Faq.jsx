import React from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import FaqCard from "../FaqCard";
import FaqAnsCard from "../faqAnsCard";
import RightBottom from "../MainSection/RightSection/RightBottom";

const Faq = () => {
  return (
    <div>
      <RightTopNav title="Faq" />

      <RightBottom>
        <div className="p-5">
          <FaqAnsCard
            q="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FaqCard
            q="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <FaqCard
            q="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <FaqCard
            q="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <FaqCard
            q="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            a="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </RightBottom>
    </div>
  );
};

export default Faq;
