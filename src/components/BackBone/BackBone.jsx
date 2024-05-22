import React from 'react';
import CountUp from 'react-countup'; // Import CountUp library
import './BackBone.css';

const BackBone = () => {
  return (
    <div className='backbone'>
      <div className="bone-top">
          <h2>The Backbone for Blockchain Data</h2>
      </div>
      <div className="bone-middle">
          <p>Follow the Smart Money, see where funds are moving to, identify new projects or tokens, and trace transactions down to the most granular level.</p>
      </div>
      <div className="bone-bottom">
          <div className="stats-item">
              <h2>
                <CountUp start={0} end={300} duration={5} suffix="m+" />
              </h2>
              <p>Labelled addresses</p>
          </div>
          <div className="stats-item">
              <h2>
                <CountUp start={0} end={95} duration={5} suffix="%" />
              </h2>
              <p>Of all onchain TVL</p>
          </div>
          <div className="stats-item">
              <h2>
                <CountUp start={0} end={500} duration={5} suffix="TB" />
              </h2>
              <p>Data processed daily</p>
          </div>
      </div>
    </div>
  )
}

export default BackBone;
