import React from 'react';
const EpochToDate = ({ epochTime }) => {
    const convertEpochToDate = (time) => {
        const epochTimeInSeconds = time < 2000000000 ? time : time / 1000;
        return new Date(epochTimeInSeconds * 1000).toLocaleString();
    };
    return React.createElement("div", null, convertEpochToDate(epochTime));
};
export default EpochToDate;
