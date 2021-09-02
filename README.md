#What is is?

Implementation of mssql / msnodesqlv8

I had hard time to find a good implementation on node+mssql that can execute queries and SPs via PoolPromise implementation.
This one works, it is not compiled, i just put the code from a project so there are lots of mistakes but you'll figure it out fast.


The implementation is in ./models/db.js
There you have query and execute (also works with output params well).

The examples are in the index.js controller - names are not correlated but as I said, you'll figure it out.


!! Check the packages, I trimmed some of them and maybe it will not work or have to many packages that you'll never user.


#Starting

npm install

node app.ks

nodemom app.js

npm start

/// Alternative for local nodemon via packages js

npm start


//Scan for vulns

npm audit

snyk test

snyk wizard



