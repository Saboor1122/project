import React, { useEffect, useRef } from 'react';
import './Business.css';

const Business = () => {
  const businessRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const business = businessRef.current;
      if (business && window.scrollY + window.innerHeight >= business.offsetTop) {
        business.classList.add('animate');
      } else {
        business.classList.remove('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='business' ref={businessRef}>
      <div className="classes">
        <h1>Business Intelligence</h1>
        <p>Benchmark your market share against competitors across different user segments. Go beyond superficial metrics like web traffic by analyzing crypto and NFT investors' onchain activities and asset holdings.</p>
      </div>
      <div className="classes">
        <h1>Customer Intelligence</h1>
        <p>Get a clear view of your customers on-chain, their usage of other products and services, and your performance across different customer segments compared to competitors. Develop strategies for customized products, services, and offerings to attract and retain more customers.</p>
      </div>
      <div className="classes">
        <h1>Ecosystem Growth</h1>
        <p>Gain insight into your ecosystem, including user activities, overall performance, and user segments. Evaluate your ecosystem’s success against others. Develop strategies to drive new users and grow your chain.</p>
      </div>
      <div className="classes">
        <h1>Investment</h1>
        <p>Get access to Nansen's underlying data, including our proprietary indicators, to test your investment and trading strategies. Integrate Nansen Query in your data pipeline.</p>
      </div>
    </div>
  );
}

export default Business;
