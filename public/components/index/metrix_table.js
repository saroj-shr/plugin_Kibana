import React, { Component } from 'react'
import {
    EuiBasicTable,
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink
  } from '@elastic/eui';

export class MetrixTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    field: '_id',
                    name: '_id'
                },{
                    field: '_index',
                    name: '_index'
                },{
                    field: '_type',
                    name:'_type'
                }
            ]
        }
    }

    render() {
    return (
        <div>
            <EuiBasicTable
                items={this.props.indexs}
                columns={this.state.columns}
            />
        </div>
    )
  }
}

export default MetrixTable
