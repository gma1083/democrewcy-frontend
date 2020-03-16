import * as React from 'react';

const HoirzontallyScrollable: React.FunctionComponent = ({ children }) =>
  <div
    style={{
      height: 'fit-content',
      overflowY: 'hidden',
      overflow: 'scroll',
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap'
    }}
    >
      {children}
  </div>

export default HoirzontallyScrollable;