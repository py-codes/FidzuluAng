import { ZuluService } from './../service/zulu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fidzulu',
  templateUrl: './fidzulu.component.html',
  styleUrls: ['./fidzulu.component.css']
})
export class FidzuluComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceZulu: ZuluService) { }

  serviceName: string = " ";
  result: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serviceName = params['name'];
      this.result = this.serviceZulu.getData("3021/books").subscribe
    });
  }


}
