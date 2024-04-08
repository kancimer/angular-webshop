import { Component } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
//import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CommonModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'Storefront';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  

  isHomePage(): boolean {
    //return true;
    const firstChild = this.activatedRoute.firstChild;
    if (firstChild !== null && firstChild !== undefined) {
        const routeConfig = firstChild.snapshot.routeConfig;
        if (routeConfig !== null && routeConfig !== undefined) {
            return routeConfig.path === '';
        }
    }
    return false;
}
}
