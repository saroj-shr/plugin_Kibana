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
  EuiFlexItem
} from '@elastic/eui';
import Table from '../table/table';
import MetrixTable from '../index/metrix_table';
import IndexTable from '../index/index_table';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: [],
      indexTable:[],
      indexTableCol:[],
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
    let i = Axiox.get('../api/REST/indexs');
    i.then( (response ) =>{  
      this.setState({indexTableCol: response});
     console.log( response);
    })
    
  }
 
  getPDF = () => {
    console.log('Pdf')
  }

  render() {
    const { title } = this.props;
    const cols = this.state.indexTable;
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>
                {title} Hello World!
              </h1>
            </EuiTitle>
          </EuiPageHeader>          

          <EuiPageContent>
            <div>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiButton fill onClick={this.getMetrix}>Metrix</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>          
            <div>
            <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiButton fill onClick={this.getIndex}>INdexs</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>
          </EuiPageContent>

          <EuiPageContent>
            <div>
              
              <EuiFlexGroup>
                <MetrixTable indexs={this.state.index} />  
              </EuiFlexGroup>

            </div>          
          </EuiPageContent>

          <EuiPageContent>
            <div>
              
              <EuiFlexGroup>
                <IndexTable response={this.state.indexTable} ></IndexTable>
              </EuiFlexGroup>

            </div>          
          </EuiPageContent>


          {/* <EuiPageContent>
            <div>
              
              <EuiFlexGroup>
                <Table indexs={this.state.index} />  
              </EuiFlexGroup>

            </div>          
          </EuiPageContent> */}

        </EuiPageBody>

      </EuiPage>
    );
  }
}
