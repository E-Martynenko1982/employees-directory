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
        <Skeleton className="employee-name" width={144} height={16} />
        <Skeleton className="employee-tag" width={80} height={12} />
      </div>
    </div>
  </li>
);


export default EmployeeSkeleton;
