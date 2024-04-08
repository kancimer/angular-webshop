import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { StartPageComponent } from './start/start-page/start-page.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'about-us',
        loadChildren:()=>import('./modules/about-us/about-us.module')
        .then((m)=>m.AboutUsModule
        ),
    },
    {
        path:'product-page/:productId',
        component:ProductPageComponent,
    },
    {
        path:'',
        component:StartPageComponent,
    }
];
