addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let url = new URL(request.url);
  let newUrl = "http://114.250.83.203:7777" + url.pathname;
  return fetch(newUrl, {
    headers: request.headers
  });
}
