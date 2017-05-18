// Stream is a flow of values that will be arriving whenever they feel like
// Why: when you need to process a pi of data that is so huge
// that you cannot fit all of it in memory and need to do some transformation on each row

var hl = require('highland');

// server is a stream of req-res tupels
var server = hl('request', httpServer, ['req', 'res']);
// this branch process POST
server.fork().filter(function(reqRes) { return reqRes.req.method === 'POST'; })
  .map(function(reqResPosts) {
    hl(reqRes.req).pipe(fs.createWriteStream(toFilename(reqRes.req.url)));
    return reqRes.res;
  }).each(function(res) {
    res.writeHead(201);
    res.end();
  });
// this one GET
server.fork().filter(function(reqRes) { return reqRes.req.method === 'GET'; })
  .each(function(reqRes) {
    fs.createReadStream(toFilename(reqRes.req.url)).pipe(reqRes.res);
  });
