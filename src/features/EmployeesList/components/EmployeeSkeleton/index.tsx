import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const EmployeeSkeleton: React.FC = () => {
  return (
    <li className="employee-item">
      <div className="employee-content">
        <div className="employee-photocontainer">
          <Skeleton circle={true} height={72} width={72} />
        </div>
        <div className="employee-info">
          <div className="employee-header">
            <h2 className="employee-name">
              <Skeleton width={150} />
            </h2>
            <span className="employee-tag">
              <Skeleton width={50} />
            </span>
          </div>
          <p className="employee-role">
            <Skeleton width={100} />
          </p>
        </div>
      </div>
    </li>
  );
};

export default EmployeeSkeleton;
