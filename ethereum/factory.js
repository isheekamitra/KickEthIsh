import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
 "0xBf72D397e9FD70eD2F3e33794d6D12A459E7AAbb"
);


export default instance;
