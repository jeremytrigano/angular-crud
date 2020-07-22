import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(private route: ActivatedRoute, public crudService: CrudService) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('productId');
    this.crudService.getById(this.productId).subscribe((res) => {
      this.product = res;
    });
  }
}
