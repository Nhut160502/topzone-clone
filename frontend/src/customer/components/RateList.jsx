import React from 'react'
import { styled } from 'styled-components'

const RateList = () => {
  return (
    <Wrapper>
      <ul className="rate-list">
        <li>
          <div className="number-star">
            <span>5</span>
            <i className="iconcmt-blackstar"></i>
          </div>
          <div className="timeline-star">
            <p className="timing" style={{ width: '100%' }}></p>
          </div>
          <span className="number-percent">100%</span>
        </li>
        <li>
          <div className="number-star">
            <span>4</span>
            <i className="iconcmt-blackstar"></i>
          </div>
          <div className="timeline-star">
            <p className="timing" style={{ width: '0%' }}></p>
          </div>
          <span className="number-percent">0%</span>
        </li>
        <li>
          <div className="number-star">
            <span>3</span>
            <i className="iconcmt-blackstar"></i>
          </div>
          <div className="timeline-star">
            <p className="timing" style={{ width: '0%' }}></p>
          </div>
          <p className="number-percent dsp">0%</p>
        </li>
        <li>
          <div className="number-star">
            <span>2</span>
            <i className="iconcmt-blackstar"></i>
          </div>
          <div className="timeline-star">
            <p className="timing" style={{ width: '0%' }}></p>
          </div>
          <p className="number-percent dsp">0%</p>
        </li>
        <li>
          <div className="number-star">
            <span>1</span>
            <i className="iconcmt-blackstar"></i>
          </div>
          <div className="timeline-star">
            <p className="timing" style={{ width: '0%' }}></p>
          </div>
          <p className="number-percent dsp">0%</p>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 20px;
  ul {
    width: 300px;
    li {
      display: flex;
      align-items: center;
      .timeline-star {
        background-color: #eee;
        border-radius: 20px;
        height: 6px;
        position: relative;
        width: calc(100% - 60px);

        .timing {
          background-color: #ff9f00;
          border-radius: 20px;
          left: 0;
          height: 6px;
          position: absolute;
          top: 0;
        }
      }
      .number-percent {
        color: #323232;
        font-size: 12px;
        font-weight: bold;
        line-height: 15px;
        padding-left: 10px;
        text-align: left;
        width: 35px;
      }
      .iconcmt-blackstar {
        background-image: url(//cdn.tgdd.vn/mwgcart/avacomment/images/icon_comment_2x.png?v=2);
        background-repeat: no-repeat;
        display: inline-block;
        line-height: 30px;
        vertical-align: middle;
        background-size: 200px 150px;
        background-position: -160px -65px;
        height: 11px;
        width: 12px;
      }
      .number-star {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin-right: 6px;
      }
    }
  }
`

export default RateList
