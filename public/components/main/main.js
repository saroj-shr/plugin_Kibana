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



export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    // console.log(httpClient);
    httpClient.get('../api/REST/example').then((resp) => {
      this.setState({ time: resp.data.time });
    });
  }

  sendRequest = () => {
    Axiox.get('../api/REST/URL')
    .then( (response) =>{
      console.log(response.data);
    })
    .catch(err => console.log(err));
  }

  // sendRequest2 = () => {
  // to send request 
  //   const { httpClient } = this.props;
  //   httpClient.get('../api/REST/URL')
  //   .then( (res) => {
  //     console.log(res);
  //   })
  // }
  
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
                    <EuiButton fill onClick={this.sendRequest}>
                        Request
                    </EuiButton>
                </EuiFlexItem>      
              </EuiFlexGroup>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                    <EuiButton fill onClick={this.sendRequest2}>
                        Request
                    </EuiButton>
                </EuiFlexItem>      
              </EuiFlexGroup>

            </div>          
          </EuiPageContent>
        </EuiPageBody>

      </EuiPage>
    );
  }
}
