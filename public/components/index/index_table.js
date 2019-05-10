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
            // columns: props.indexs.body[0]
        }

        // if(this.props.response.length === 0) return null; 

        this.check();
    }

    check = () => {
        if(!this.props.responce){
            console.log('not ready');
            return ;
        }
    }


    render() {
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
