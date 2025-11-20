import React, { useState } from "react";
import RightTopNav from "../MainSection/RightSection/RightTopNav";
import FaqCard from "../FaqCard";

const Faq = () => {
  const [openid, setOpenid] = useState(null);

  const toggleFAQ = (id) => {
    setOpenid(openid === id ? null : id);
  };

  return (
    <div>
      <RightTopNav title="Faq" />

      <div className="px-5 py-5">

        <FaqCard
          q="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          a="This is the answer for the first question."
          id={0}
          openid={openid}
          toggleFAQ={toggleFAQ}
        />

        <FaqCard
          q="Why do we use Lorem Ipsum?"
          a="Because it is a placeholder text used in the printing industry."
          id={1}
          openid={openid}
          toggleFAQ={toggleFAQ}
        />

        <FaqCard
          q="Where does it come from?"
          a="It comes from sections of classical Latin literature."
          id={2}
          openid={openid}
          toggleFAQ={toggleFAQ}
        />

        <FaqCard
          q="Is Lorem Ipsum safe to use?"
          a="Yes, it is perfectly safe since it is simply dummy text."
          id={3}
          openid={openid}
          toggleFAQ={toggleFAQ}
        />

      </div>
      
    </div>
  );
};

export default Faq;
