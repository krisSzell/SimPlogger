import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriesService {

  categoriesUrl = "http://localhost:55150/api/categories";

  constructor(private _http: Http) { }

  getCategories() {
    return this._http.get(this.categoriesUrl)
      .map(res => res.json());
  }

}
