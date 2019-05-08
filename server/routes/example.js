const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

// client.ping({
//   // ping usually has a 3000ms timeout
//   requestTimeout: 1000
// }, function (error) {
//   if (error) {
//     console.trace('elasticsearch cluster is down!');
//   } else {
//     console.log('All is well');
//   }
// });

client.search(
  {
    index: "metricbeat-*",
    body: {
      query: {
        match_all: {}
      }
    }
  },
  (err, result) => {
    if (err) console.log(err);

    console.log(result.body.hits.hits);   
  }
);

export default function(server) {
  server.route({
    path: "/api/REST/example",
    method: "GET",
    handler() {
      return { time: new Date().toISOString() };
    }
  });

  server.route({
    path: "/api/REST/URL",
    method: "GET",
    handler() {
      return {
        URL: server.info.uri
      };
    }
  });

  server.route({
    path: "/api/REST/search",
    method: "GET",
    handler() {
      client.search(
        {
          index: "metricbeat-*",
          body: {
            query: {
              match_all: {}
            }
          }
        },
        (err, result) => {
          if (err) console.log(err);

          // console.log(result);
          typeof(result);
          return {
            body: result
          }
        }
      );

      
    }
  });
}
