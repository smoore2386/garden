import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const JSONDIR = './json/';

export function httpFactory(backend:MockBackend, options: BaseRequestOptions){
      
  
  backend.connections.subscribe((connection: MockConnection) => {
    // Setting timeout
    setTimeout(() => {

      
      if (connection.request.url === ('/user') 
          && connection.request.method === RequestMethod.Post) {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify({data:'1'})})))
      }

      if (connection.request.url === ('/user/login') && connection.request.method === RequestMethod.Post) {
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify()})));
      }  
      // logout
      if (connection.request.url.endsWith('/user/logout') 
          && connection.request.method === RequestMethod.Get) {
          connection.mockRespond(new Response( new ResponseOptions({
            body: JSON.stringify("1")})));
      }


      if (connection.request.url.endsWith('roboadmin/advancedOptions') 
          && connection.request.method === RequestMethod.Get) {
          
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify({eventRetention:{connection:90,file:10},replicationFactor:2})})));
      }

      if (connection.request.url.endsWith('pjb/list/getPageData') 
          && connection.request.method === RequestMethod.Get) {
          
      
        connection.mockRespond(new Response( new ResponseOptions({
          body: JSON.stringify()})));
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

