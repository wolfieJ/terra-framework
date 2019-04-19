import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import SonOfDataGrid from 'terra-son-of-data-grid/lib/SonOfDataGrid';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const layout = () => (
  <SonOfDataGrid
    fill
    style={{ height: '150px', border: '1px solid black' }}
    headerConfig={
      (
        <div
          style={{
            width: '100%',
            maxWidth: '100%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              // minHeight: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '100 0 auto',
              width: '100px',
            }}
          >
            wallaby wallaby wallaby wallaby wallaby
          </div>
          <div
            style={{
              border: '1px solid black',
              // minHeight: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '100 0 auto',
              width: '100px',
            }}
          >
            wallaby wallaby
          </div>
          <div
            style={{
              border: '1px solid black',
              // minHeight: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              overflow: 'hidden',
              wordBreak: 'break-word',
              flex: '100 0 auto',
              width: '100px',
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
            backgroundColor: 'darksalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '200 1 auto',
              width: '200px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'lightsalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'darksalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '100 0 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              // height: '50px',
              // width: '100%',
              // backgroundColor: 'pink',
              // margin: '5px',
              flex: '200 0 auto',
              width: '200px',
            }}
          >
            Spicy Kittens Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'lightsalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'darksalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'lightsalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
        <div
          style={{
            width: '100%',
            backgroundColor: 'darksalmon',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens Spicy Kittens
          </div>
          <div
            style={{
              border: '1px solid black',
              flex: '100 1 auto',
              width: '100px',
            }}
          >
            Spicy Kittens
          </div>
        </div>,
      ])
    }
  />
);

export default layout;
