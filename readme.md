to run this project run following command
npm run dev

npm run dev will run front end at 3000 and backend at 5000

To run apis from postman hit following end points.
http://localhost:5000/api/orders/v2
http://localhost:5000/api/configurations/v2

There is no need to set ant header in the postman. Bearer token is set in the service call (node js code) itself.

from front end
click on the get configuration button to get the configuration
fill in the order details and click omn the order button to get token
