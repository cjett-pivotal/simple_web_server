var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response){
  console.log(JSON.stringify(request.headers['cookie']));
  response.writeHead(200, {'Content-type':'text/plan',
  'customHeader':'myCustomHeader',
  // 'Set-Cookie':'myCookie=Cookies!',
  // 'Set-Cookie':'JSESSIONID=E7BB55477DB45B2CD3DE81FF394B3FF6'
  'Set-Cookie': ['myCookie=Cookies!', 'JSESSIONID=E7BB55477DB45B2CD3DE81FF394B3FF6', request.headers['cookie']],

  });
  response.write(request.headers['cookie']);
  response.end( );

   // pathName= url.parse(request.url).pathname;
   // query= url.parse(request.url).query;
   // if (!pathName.includes('favicon')){
   // console.log('pathName: ' + pathName);
   // console.log('query: ' + query);
 // }
}).listen(process.env.PORT || 7000);
