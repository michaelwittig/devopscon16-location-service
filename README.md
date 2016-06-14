# DevOpsCon 2016: The Life of a Serverless Microservice on AWS

Location service can save and retrieve a user's position.

## Usage

```
curl -vvv -X PUT -d '{"latitude": 52.520645, "longitude": 13.409779}' -H "Content-Type: application/json"  -H "Authorization: 123" "https://rjwrmogq8i.execute-api.us-east-1.amazonaws.com/v1/location/123"
```

## See also

* https://github.com/michaelwittig/devopscon16-auth-service
* https://github.com/michaelwittig/devopscon16-profile-service
* https://github.com/michaelwittig/devopscon16-global
