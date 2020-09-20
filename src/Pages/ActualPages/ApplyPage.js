import React from "react";
import style from "styled-components";
const ApplyPageWrapper = style.div`
height: 100%;
width: 100%;
overflow: hidden;`;

function ApplyPage() {
  return (
    <ApplyPageWrapper>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shr7LFL2Rp1L62skX?backgroundColor=red"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="900"
        sx={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </ApplyPageWrapper>
  );
}

export default ApplyPage;
