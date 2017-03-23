import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const JSONDIR = './json/';

export function httpFactory(backend:MockBackend, options: BaseRequestOptions){
      
  
  backend.connections.subscribe((connection: MockConnection) => {
    // Setting timeout
    setTimeout(() => {

      
      if (connection.request.url === ('/user') 
          && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify({ name: 'Sonya Reichel',
			         username: 'admin',
			         password: 'admin',
			         location: 'Rhode Island',
			         created_at: '2016-04-26T01:22:13.584Z',
			         updated_at: '2017-03-22T16:52:39.672Z',
			         _id: '58d3d1e46eb3de184c384332',
			         plants: ['Snap Peas','Broccolli'] })})))
      }

      // logout
      if (connection.request.url.endsWith('/user/logout') 
          && connection.request.method === RequestMethod.Get) {
          connection.mockRespond(new Response( new ResponseOptions({
            body: JSON.stringify("1")})));
      }

    }, 500);
  });

  return new Http(backend, options);
}
export let mockServerProvider = {
  // provide http for mock backend
  provide: Http,
  useFactory: httpFactory,
  deps: [MockBackend, BaseRequestOptions]
};

