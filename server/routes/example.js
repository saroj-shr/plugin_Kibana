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



        
        let table = '';
        for(let i = 0; i < response.body.length; i++){
        let items = Object.values(response.body[i]);
          let cols = Object.keys(response.body[i]);
          for(let i = 0; i < items.length; i++){
              table += `<tr><td>${cols[i]}</td><td>${items[i]}</td></tr>`
              table += "<hr>"
          }
      }        

        // let items = Object.values(response.body[0]);
        // let cols = Object.keys(response.body[0]);
        // for(let i = 0; i < items.length; i++){
        //     table += `<tr><td>${cols[i]}</td><td>${items[i]}</td></tr>`
            
        // }
        
        // console.log(table);
        
        // let data = Object.values(response.body[0]);
        // let cols = Object.keys(response.body[0]);
        // let arr = [];
        // for(let i = 0; i < data.length; i++){
        //   arr[cols[i]] = data[i];
        // }
        // // console.log(data, cols);

        // console.log(arr);
        // for(let i = 0; i < data.length; i++){
        //   let t = cols[i]
        //   console.log(data[i]);
        // }
        

      //   let dataString = '';
      //   Object.keys(response.body[0]).forEach((k,i) =>{
      //     // console.log(i);
      //     dataString += k;
      //     dataString += i;
      //     dataString += ':';
      //     dataString += response.body[0].i;
      //     console.log(response.body[0].i);
      //     dataString += '<br>';
      // }); 

      // console.log(dataString)

      // console.log(response.body);
        pdf.create(pdfTemplate(response), {}).toFile(`result.pdf`,
          (err)=>{
            if(err){
              console.log(err);
            }
  
            Promise.resolve();
          }           
        );
        
      });
        // return 'ehy';
      return res.file(`result.pdf`);
    }
  });
}




// let string = "";
// // console.log(response.body);
// response.body.map( i => {
//   string += i.index
// });
// console.log(string);
