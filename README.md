## Put Request Using Express

### General information

Query strings do not count as part of the route path. Instead, the Express server parses them into a JavaScript object and attaches it to the request body as the value of req.query. The key: value relationship is indicated by the = character in a query string, and key-value pairs are separated by &. In our code route, the req.query object would be {Italy:{days:7, cost:1400}}. To add new destination query /destinations/Italy?days=7&cost=1400, we use app.put().




### Tools used

+ JavaScript
+ VS
+ Express
+ Node
+ Command line
