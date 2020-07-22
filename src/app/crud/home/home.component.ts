import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getAll().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(id) {
    this.crudService.delete(id).subscribe((res) => {
      if (Object.keys(res).length === 0) {
        this.products = this.products.filter((x) => {
          return x.id !== id;
        });
      }
    });
  }
}
