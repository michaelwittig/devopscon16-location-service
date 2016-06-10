"use strict";

var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

exports.handler = function(event, context, cb) {
  console.log(JSON.stringify(event));
  dynamodb.putItem({
    "Item": {
      "id": {
        "S": event.id
      },
      "latitude": {
        "N": event.body.latitude.toString()
      },
      "longitude": {
        "N": event.body.longitude.toString()
      }
    },
    "TableName": "location"
  }, function(err) {
    if (err) {
      cb(err);
    } else {
      cb(null, {});
    }
  });
};
