import React, { Component } from 'react'
import {
    EuiBasicTable
  } from '@elastic/eui';

export class IndexTable extends Component {

    constructor(props){
        super(props);

        this.columns = [];
        this.items = this.props.response.body;

        Object.keys(this.props.response.body[0]).forEach( (element) => {
            let temp = {
                field: element,
                name: element
            };            
            this.columns.push(temp);                    
        });
    }

    render() {        
        return (
            <div>
                <EuiBasicTable
                    items={this.items}
                    columns={this.columns}
                /> 
            </div>
        )
    }
}

export default IndexTable
