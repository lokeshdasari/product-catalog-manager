import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    {path:'', component: ProductListComponent},
    {path: 'product-list', component: ProductListComponent},
    {path:'add-product', component: ProductFormComponent}
];
