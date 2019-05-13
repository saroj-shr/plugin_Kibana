const { Client } = require("@elastic/elasticsearch");
const pdfTemplate = require('../document/pdfTemplate');
const pdf = require("html-pdf");
const client = new Client({ node: "http://localhost:9200" });

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

  server.route({
    path: '/api/REST/indexs',
    method: "GET",
    handler(){
      let indexs = client.cat.indices({format: "json"});
      return (indexs);
    }
  });

  server.route({
    path: '/api/REST/createPdf',
    method: "GET",
    handler(req, res){  

      client.cat.indices({format: "json"})
      .then( response => {

        pdf.create(pdfTemplate(response), {}).toFile(`result.pdf`,
          (err)=>{
            if(err){
              console.log(err);
            }
  
            Promise.resolve();
          }           
        );        
      });
      return res.file(`result.pdf`);
    }
  });
}
