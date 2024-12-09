import React from 'react';
import classNames from 'classnames';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className, height, width }) => {
  return (
    <div
      className={classNames(
        'animate-pulse bg-gray-300',
        className,
        height && `h-${height}`,
        width && `w-${width}`
      )}
    />
  );
};

export default Skeleton;
