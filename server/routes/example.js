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
}
