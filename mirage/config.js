export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

   //this.urlPrefix = `http://localhost:8000`;    // make this `http://localhost:8080`, for example, if your API is on a different server
    //this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
    //this.timing = 1000;      // delay for each request, automatically set to 0 during testing
    //this.get('/posts', { timing: 4000 });
    this.get('/businesses', {timing: 1000});
    this.post('/businesses');
    this.get('/businesses/:id');
    this.patch('/businesses/:id'); // or this.patch
    this.del('/businesses/:id');
    this.passthrough('/assets/vendor.js');
    this.passthrough('/assets/vendor.map');
}
