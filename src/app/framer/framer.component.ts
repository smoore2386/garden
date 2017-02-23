import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable } from 'rxjs/Observable';


import { __platform_browser_private__, 
         SafeResourceUrl,
         DomSanitizer } from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-framer',
    templateUrl: './framer.component.html',
    styleUrls: ['./framer.component.scss'],
    providers: [__platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS]
})

export class FramerComponent implements OnInit,OnDestroy {

    public src: string = "";
    public safeUrl: SafeResourceUrl;
    
    constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute) {
      this.sanitizer = sanitizer;
      this.route = route;
      this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.src);
      console.log("HERE");
    }
    setSrc(src:string){
      this.src = src;
      console.log(src);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
      console.log("HHHH");
    }
    ngOnInit() {
        
      this.route.data.subscribe(data => this.setSrc(data['framerPath']));
    }
    ngOnDestroy() {}
 
}
