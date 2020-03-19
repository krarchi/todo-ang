import { Component, OnInit } from '@angular/core';
import {Elem} from '../elem';
import {ApiService} from '../api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
   items = [];
   formGroup = new FormGroup({
     name: new FormControl()
   });


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getItem().subscribe((data: any[]) => {
      console.log(data);
      this.items = data;
    });
  }

  add() {
     this.api.addItem(this.formGroup.value).subscribe(res => {
       console.log(res);
       this.items.push(res.data);
     });
  }
  delete(id){
    this.api.delete(id).subscribe(res => {
      this.items = res.data;
      }
    );
  }
  update(id,itemName) {
    this.api.update(id, itemName).subscribe(res => {
      console.log(res);
      this.items = res.data;
    });
  }

}
