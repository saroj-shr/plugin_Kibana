import React from 'react';
import Axiox from 'axios';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContentHeaderSection
} from '@elastic/eui';

import IndexTable from '../index/index_table';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: [],
      indexTable:[]  
    };
    
    // this.getMetrix();
    this.getIndex();
  }  

  getMetrix = () => {
    Axiox.get('../api/REST/result')
    .then( (response) =>{
      const indexs = response.data.body.hits.hits;      
      this.setState({index : indexs });        
    })
    .catch(err => console.log(err));
  }

  getIndex = () =>{
    Axiox.get('../api/REST/indexs')
    .then( (response ) =>{  
      this.setState({indexTable: response.data});
    })    
  }
 
  getPDF = () => {
    console.log('Pdf')
  }

  render() {
    const { title } = this.props;      
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>
                {title}
              </h1>
            </EuiTitle>
          </EuiPageHeader>          
            <EuiPageContent>
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>All Index</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
                
                <EuiPageContentHeaderSection>
                  <EuiFlexGroup gutterSize="s" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiButton
                        onClick={() => window.alert('Button clicked')}
                        iconType="exportAction"
                      >
                        PDF
                      </EuiButton>
                    </EuiFlexItem>              
                  </EuiFlexGroup>                   
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              
              <EuiPageContentBody>
                <EuiFlexGroup>
                    {this.state.indexTable && this.state.indexTable.body && this.state.indexTable.body.length > 0 &&  <IndexTable response={this.state.indexTable}  ref={this.tableRef}></IndexTable> }
                </EuiFlexGroup>
              </EuiPageContentBody>
            
          
          </EuiPageContent>

        </EuiPageBody>

      </EuiPage>
    );
  }
}
