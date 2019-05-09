import React, { Component } from 'react';
import {
    EuiBasicTable  
  } from '@elastic/eui';



export class Table extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: [
                {
                    firstName: 'Saroj',
                    lastName : 'Shrestha'
                },{
                    firstName: 'Diwash',
                    lastName: 'Shrestha'
                }
            ],
            columns: [
                {
                    field: 'firstName',
                    name: 'First Name'
                },{
                    field: 'lastName',
                    name: 'Last Name'
                }
            ]
        }
    }

    render() {
    return (
      <div>
        <EuiBasicTable
            items={this.state.items}
            columns={this.state.columns}
        />
      </div>
    )
  }
}

export default Table
