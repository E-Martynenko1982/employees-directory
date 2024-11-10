import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './index.scss';


const EmployeeSkeleton: React.FC = () => (
  <li className="employee-item">
    <div className="employee-content">
      <div className="employee-photocontainer">
        <Skeleton circle={true} height={72} width={72} />
      </div>
      <div className="employee-info">
        <h2 className="employee-name">
          <Skeleton width={144} height={16} />
        </h2>
        <span className="employee-tag">
          <Skeleton width={80} height={12} />
        </span>
      </div>
    </div>
  </li>
);


export default EmployeeSkeleton;
