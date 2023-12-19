import React from 'react'
import { RateList as Wrapper } from '../../style/ProductPage'

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

export default RateList
