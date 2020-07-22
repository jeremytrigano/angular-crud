import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  productForm: FormGroup;

  ngOnInit() {
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
    public crudService: CrudService
  ) {}
  submitForm() {
    this.crudService.create(this.productForm.value).subscribe((res) => {
      console.log('Product created!');
      this.router.navigateByUrl('/crud/home/');
    });
  }
}
