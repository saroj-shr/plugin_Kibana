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

//all index for matrixbeat
const temp = new Object();
const indexs = [];



// client.search({
//   index: "metricbeat-*",
//   body: {
//     query: {
//       match_all: {}
//     }
//   }
// })
// .resolve();

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
    path: '/api/REST/result',
    method: "GET",
    handler(){
      let indexs = client.search({
        index: "metricbeat-*",
        body: {
          _source: "false",
          query:{            
            match_all:{}
          }
        }
      });

      return indexs;
    }
  }); 
}
