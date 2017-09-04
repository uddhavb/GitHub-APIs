# HW1

# REST 
I have included each code(along with its output) in a separate .js file with its respective name.

# About Me 
[About me](https://pages.github.ncsu.edu/ubhosle/HW1/)

# Concepts 

####	Explain some additional concerns related to using REST apis.
-	The REST(Representational State Transfer) is an Application Programming Interface(api) that makes calls from the client to the server and gets back data over the HTTP protocol. 
-	There are only a few HTTP requests like GET,POST etc and some may not be supported by the client or server side machines.
-	The failures in the code are many times very difficult to point out. The output maybe a simple error message. But why it went wrong and what exactly went wrong is many a times very challenging to find.
-	The message content is HTTP and hence is not independent of the channel. This may cause problems and bottlenecks.
- The codemust be such that it is platform independent and can be run on all computers.
- Since it is a client server based architecture,  all the concerns of the client server protocol apply here as well.
- The names given to functions and items must be consistent and their category must be predictable. 
####	Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. See http://graphql.org/ for details.
-	A graph query language passes queries thst could be convert to JSON. But in RESTful architecture the queries have to be in JSON.
-	Graph ql is much more clearly defined than RESTful architecture.
-	Graph ql prefers larger individual requests and hence reducing the overall overhead from all individual requests.
