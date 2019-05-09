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
import IndexTable from '../index/index_table';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: []
    };
    this.getIndex();
  }  

  getIndex = () => {
    Axiox.get('../api/REST/result')
    .then( (response) =>{
      const indexs = response.data.body.hits.hits;
      this.setState({index : indexs });      
    })
    .catch(err => console.log(err));
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
                {title} Hello World!
              </h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>
                    Congratulations
                </h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>
                    You have successfully created your first Kibana Plugin!
                </h3>
                <p>
                    The server time (via API call) is {this.state.time || 'NO API CALL YET'}
                </p>
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>

          <EuiPageContent>
            <div>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiButton fill onClick={this.getIndex}>Request</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>          
          </EuiPageContent>

          <EuiPageContent>
            <div>
              
              <EuiFlexGroup>
                <IndexTable indexs={this.state.index} />  
              </EuiFlexGroup>

            </div>          
          </EuiPageContent>

        </EuiPageBody>

      </EuiPage>
    );
  }
}
