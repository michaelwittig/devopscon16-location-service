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
        "N": event.latitude.toString()
      },
      "longitude": {
        "N": event.longitude.toString()
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
