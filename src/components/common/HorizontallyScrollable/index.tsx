import * as React from './node_modules/react';

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