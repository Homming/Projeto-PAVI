import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EletronicosService} from '../../eletronicos/eletronicos.service'
import {Observable} from 'rxjs/Observable'
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private eletronicosService: EletronicosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.eletronicosService.reviewsOfEletronico(this.route.parent.snapshot.params['id'])
  }

}
