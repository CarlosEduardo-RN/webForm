export const sendNotification = function(data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8; Access-Control-Allow-Origin: POST",
      "Authorization": "Basic MDI4OGVmZWItZWE0Ni00MjVjLThlNmEtMGMxN2RjYmQxM2E2"
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    var https = require('https');
    var req = https.request(options, function(res) {
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  