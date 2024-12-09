import React from 'react';

const EpochToDate = ({ epochTime }) => {
  const convertEpochToDate = (time) => {
    const epochTimeInSeconds = time < 2000000000 ? time : time / 1000;
    return new Date(epochTimeInSeconds * 1000).toLocaleString();
  };

  return <div>{convertEpochToDate(epochTime)}</div>;
};

export default EpochToDate;
