import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  res: any
  data: any

  _id: any
  name: any
  slug: any

  cat = {
    name: '',
    slug: '',
  }


  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {

    this._id = ''
    this.name = ''
    this.slug = ''

    this.cat = {
      name: '',
      slug: '',
    }

    this.getCategories()
  }

  getCategories() {
    this._categoryService.getCategories()
      .subscribe(
        res => {
          this.res = res
          this.data = this.res.datas
          // console.log(this.res)
        },
        err => console.log(err)
      )
  }

  getCategory(id: any) {
    this._categoryService.getCategory(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  createCategory() {

    this.cat.name = this.name
    this.cat.slug = this.slug

    this._categoryService.addCategory(this.cat)
      .subscribe(
        res => {
          // console.log(res)
          this.ngOnInit()
        },
        err => console.log(err)
      )
  }

  editCategory(cat : any) {
    this._id = cat._id
    this.name = cat.name
    this.slug = cat.slug

  }

  updateCategory() {

    this.cat.name = this.name
    this.cat.slug = this.slug

    this._categoryService.updateCategory(this._id, this.cat)
      .subscribe(
        res => {
          // console.log(res)
          this.ngOnInit()
        },
        err => console.log(err)
      )
  }

  deleteCategory(category: any) {
    if(window.confirm('Are you sure you want to delete this category?')) {
      this._categoryService.deleteCategory(category)
        .subscribe(
          res => {
            // console.log(res)
            this.ngOnInit()
          },
          err => console.log(err)
        )
    }
  }
}
