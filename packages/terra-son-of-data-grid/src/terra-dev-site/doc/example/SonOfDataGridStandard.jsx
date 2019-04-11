import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import SonOfDataGrid from 'terra-son-of-data-grid/lib/SonOfDataGrid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const layout = () => (
  <SonOfDataGrid
    headerConfig={
      (
        <div
          style={{
            width: '100%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              minHeight: '50px',
              // width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '0 1 auto',
            }}
          >
            wallaby
          </div>
          <div
            style={{
              minHeight: '50px',
              // width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '0 1 auto',
            }}
          >
            wallaby
          </div>
          <div
            style={{
              minHeight: '50px',
              // width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '0 1 auto',
            }}
          >
            wallaby
          </div>
        </div>
      )
    }
    childConfig={
      ([
        <div
          style={{
            width: '100%',
            backgroundColor: 'green',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              height: '50px',
              width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
            }}
          />
          <div
            style={{
              height: '50px',
              width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
            }}
          />
          <div
            style={{
              height: '50px',
              width: '100%',
              backgroundColor: 'pink',
              margin: '5px',
            }}
          />
        </div>,
        <div
          style={{
            height: '50px',
            width: '100%',
            backgroundColor: 'orange',
          }}
        />,
        <div
          style={{
            height: '50px',
            width: '100%',
            backgroundColor: 'green',
          }}
        />,
      ])
    }
  />
);

export default layout;
