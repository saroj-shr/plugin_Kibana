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

    componentWillMount(){
        this.check();
    }

    check = () => {        
        console.log(this.props.response.body, 'ok');        
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
