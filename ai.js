export default {
  async fetch(request) {
    let url = new URL(request.url);
    url.hostname = "114.250.83.203";
    url.port = "7777";
    url.pathname = "/" + url.pathname;

    let modifiedRequest = new Request(url, request);
    return fetch(modifiedRequest);
  }
};
