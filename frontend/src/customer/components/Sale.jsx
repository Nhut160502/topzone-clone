import React from "react";
import styled from "styled-components";

const Sale = () => {
  return (
    <Wrapper>
      <Top>
        <div className="image">
          <img
            src="https://cdn.tgdd.vn/mwgcart/topzone/images/icon-fs.png"
            alt=""
          />
        </div>
        <div className="endtime">
          <span className="end-title">Kết thúc trong</span>
          <span class="countdown-timer">
            <label id="hour">05</label>
            <label id="minute">55</label>
            <label id="second">00</label>
          </span>
        </div>
        <div className="listing-timeline">
          <div className="div"></div>
          <div className="div"></div>
        </div>
      </Top>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
`;
export default Sale;
