import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {CatalogState} from "../../catalog/state/catalog.reducer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-catalog-info',
  templateUrl: './catalog-info.component.html',
  styleUrls: ['./catalog-info.component.scss']
})
export class CatalogInfoComponent implements OnInit {
  @Input() data: any;
  constructor(private store: Store) { }

  detailsForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl(''),
    value: new FormControl(''),
    variant: new FormControl(0),
  });
  ngOnInit(): void {
    this.detailsForm.patchValue(this.data);
  }

}
