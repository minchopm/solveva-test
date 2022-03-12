import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {fetchElement} from '../catalog/state/catalog.actions';
import {selectCurrentElement} from "../catalog/state/selectors";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  public data$ = this.store.select(selectCurrentElement);

  constructor(private store: Store, public router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((res) => {
      this.store.dispatch(fetchElement({id: res.id}));
    });
  }
}
