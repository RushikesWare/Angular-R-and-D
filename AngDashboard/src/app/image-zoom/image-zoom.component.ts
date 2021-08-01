import { Component, OnInit } from '@angular/core';
import { Product,CategoryMaster } from '../shared/AllModel';
import { RandomProductURL,ProductURL} from '../shared/AllURL';
import {HttpmethodsService} from '../shared/service/httpmethods.service';
import { Router } from '@angular/router';
import Drift from 'drift-zoom';



declare var $: any;

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {

  productList: any[] = [];
  categoryList = Array<CategoryMaster>();
  shortDesc: any[] = [];

  constructor(private httpService: HttpmethodsService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();

    var demoTrigger = document.querySelector('.demo-trigger');

    new Drift(demoTrigger, {
      paneContainer: document.querySelector('.detail'),
      inlinePane: 900,
      inlineOffsetY: -85,
      containInline: true,
      sourceAttribute: 'href'
    });

  }
  getAllProduct() {
    this.httpService.getRequest(ProductURL).subscribe((data :any)=>{
      this.productList=data.result;
      
    // alert(JSON.stringify(this.productList[0].categoryModel.name));

    })
  }


}
