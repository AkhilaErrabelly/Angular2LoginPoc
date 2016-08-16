import { provideRouter, RouterConfig} from '@angular/router';

import {HomePageComponent} from './homePage/homePage.component';
import {SecondpageComponent} from './secondpage/secondpage.component';
import {AuthManager} from './authmanager';

export const appRoutes: RouterConfig = [
    {path: '', redirectTo: 'home'},
    {path: 'home', component:HomePageComponent, canActivate: [AuthManager]},
    {path: 'second', component:SecondpageComponent, canActivate: [AuthManager]}
];

export const AppRouterProvider = provideRouter(appRoutes);