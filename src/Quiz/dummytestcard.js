import React from "react";
import LawyerCard from "./LawyerCard.js";

function dummytestcard() {
  return (
    <div>
      <LawyerCard
        name="John"
        phone="555"
        email="asdlfj@email.com"
        location="Houston"
        language="English"
        race="Asian"
        expertise1="eat"
        expertise2="code"
        expertise3="sleep"
      />
    </div>
  );
}

export default dummytestcard;
