import React, { Component } from 'react'
import {
    EuiBasicTable,
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink
  } from '@elastic/eui';

export class IndexTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns: [],
            items:[]
        }

        this.columns();
        console.log(this.state.columns);              
    }

    columns = () =>{ 
        let array =[];
        Object.keys(this.props.response.body[0]).forEach( (element) => {
            let temp = {
                field: element,
                name: element
            };            
            array.push(temp);                    
        });

        console.log(array);
        this.setState({columns: array});
    }

    render() {
        console.log(this.props.response);
        return (
            <div>
                {/* <EuiBasicTable
                    items={this.props.indexs}
                    columns={this.state.columns}
                /> */}
            </div>
        )
    }
}

export default IndexTable
