export default function (server) {

  server.route({
    path: '/api/REST/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
