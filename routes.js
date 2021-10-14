const routes=require('next-routes')();
routes    //if a user goes here   //display this
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

  //: means that it is variable

module.exports= routes;