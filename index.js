"use strict";

var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

exports.handler = function(event, context, cb) {
  console.log(JSON.stringify(event));
  if (event.action === "get") {
    dynamodb.getItem({
      "Key": {
        "id": {
          "S": event.id
        }
      },
      "TableName": "location"
    }, function(err, data) {
      if (err) {
        cb(err);
      } else {
        if (data.Item === undefined) {
          cb(new Error("[NotFound] Location not found"));
        } else {
          console.log(JSON.stringify(data.Item));
          cb(null, {
            "body": {
              "id": data.Item.id.S,
              "latitude": parseFloat(data.Item.latitude.N),
              "longitude": parseFloat(data.Item.longitude.N)
            }
          });
        }
      }
    });
  } else if (event.action === "put") {
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
  }
};
