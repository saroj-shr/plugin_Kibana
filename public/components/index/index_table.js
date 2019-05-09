import React from "react";
import {
    EuiBasicTable  
  } from '@elastic/eui';

function IndexTable(props) {
    
    // console.log(props);
    const state = {};
    state.columns = [
        {
            field: '_id',
            name: '_id',
        },{
            field: '_index',
            name:'_index'
        },{
            field: '_type',
            name: '_type'
        }
    ];

    const items = [];

    const map = () => {

        props.indexs.map( i => {
            console.log(i);
        })
    }

    // props.indexs

  return(
      <div>
          <EuiBasicTable
            items={props.indexs}
            coloums={state.columns}
          />
          <button onClick={map}> click</button>
      </div>
  );
}

export default IndexTable;
