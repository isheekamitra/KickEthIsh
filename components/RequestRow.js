import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  state={
    loading:'',
    loading1:''
    

    
  };
    onApprove = async () => {
        const campaign = Campaign(this.props.address);
        this.setState({ loading1: true });
      try{
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
          from: accounts[0]
        });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
      }catch (err) {
      console.log(err);
      }
  
      this.setState({ loading1: false });
      };
      onFinalize = async () => {
        
        const campaign = Campaign(this.props.address);
        this.setState({ loading: true});
        try{
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
          from: accounts[0]
        });
        
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
      }catch (err) {
        console.log(err);
      }
  
      this.setState({ loading: false });
      };
    render()
    {  const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
        return(
            <Row disabled={request.complete}
             positive={readyToFinalize && !request.complete}
            >
              <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="green" basic
              loading={this.state.loading1} 
            onClick={this.onApprove}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic 
            loading={this.state.loading}
            onClick={this.onFinalize}

            >
              Finalize
            </Button>
          )}
        </Cell>
            </Row>
        );
    }
}
export default RequestRow;