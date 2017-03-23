import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  constructor() { }
  getUser(){
    let user: User = {
      _id: "58d3d1e46eb3de184c384332",
      name: "Shane Moore",
      username: "smoore",
      location: "Maryland",
      created_at:"2016-04-26T01:22:13.584Z",
      updated_at:"2017-03-22T16:52:39.672Z",
      plants:[]
    }
    return user;
  }

}
