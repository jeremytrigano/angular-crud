import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  product: Product;

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('productId');
    this.crudService.getById(this.productId).subscribe((res) => {
      this.product = res;
      this.productForm.patchValue(this.product);
    });
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService,
    private route: ActivatedRoute
  ) {}
  submitForm() {
    this.crudService
      .update(this.productId, this.productForm.value)
      .subscribe((res) => {
        console.log('Product updated!');
        this.router.navigateByUrl('/crud/home');
      });
  }
}
