const https = require("http");
const config = require("../config/config");
var request = require("request");
/**
 * apply fabric token
 *  
 * {
    token: 'Bearer 262f194ddf1b61d2e0a6d9d1ecf5ecb7',
    effectiveDate: '20250822150824',
    expirationDate: '20250822160824'
   }
 * 
 * 
 * @returns token info
 */
function applyFabricToken() {
    return new Promise((resolve, reject) => {
        var options = {
            method: "POST",
            url: config.baseUrl + "/payment/v1/token",
            headers: {
                "Content-Type": "application/json",
                "X-APP-Key": config.fabricAppId,
            },
            rejectUnauthorized: false, //add when working with https sites
            requestCert: false, //add when working with https sites
            agent: false, //add when working with https sites
            body: JSON.stringify({
                appSecret: config.appSecret,
            }),
        };
        request(options, function(error, response) {
            console.log("response", response)
            console.log("error", error)
            if (response) {
                let result = JSON.parse(response.body);
                console.log("result", result)
                resolve(result);
            }
        });
    });
}

module.exports = applyFabricToken;