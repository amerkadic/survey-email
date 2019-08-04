var localtunnel = require('localtunnel');
   
 localtunnel(5000, { subdomain: 'oadgadkamag' }, function(err, tunnel) {
      console.log('LT running')
    });