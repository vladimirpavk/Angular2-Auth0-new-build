# Angular2 Skeleton - new libs
Node, Express, TypeScript, Gulp, BrowserSync, Angular2 application.


Application contains backend server based on nodejs express with RESTFull interface and front-end angular2 application
which implements Auth0 from authentification and authorization over JWTs (implemented as a service **auth.service**) and
service to communicate with RESTFull interface. Angular2 application has routing and route guards implemented (**AuthGuard.ts** and 
**usernewcandeactivateguard**).


**AuthGuard** prevents user navigation to proteced in-app routes.
**usercandeactivateguard** prevents user to re-route from **usernewcomponent.ts** when form is not pristine.


### Prerequisites
Must have node and npm installed


### How to use
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings install
```

Start application with 
```sh
$ gulp
```

Application will be initialy compiled and started. By default the server is listening on port 3036 and browser-sync is proxying from port 3000.
Navigate to
´´´
http://localhost:3000
´´´
to start the application.


