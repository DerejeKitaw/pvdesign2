import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LayoutMasterComponent } from './components/layout-master/layout-master.component';
import { LayoutSimpleComponent } from './components/layout-simple/layout-simple.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppAsideComponent } from './components/app-aside/app-aside.component';
import { AppHeaderSubComponent } from './components/app-header-sub/app-header-sub.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';

// constants
const APP_LAYOUTS = [
  // All Layout component listed here
  LayoutMasterComponent,
  LayoutSimpleComponent
];


const APP_COMPONENTS = [
  // All component in this module listed here
  AppHeaderComponent
];

const APP_DIRECTIVES = [
  // All component in this module listed here
];
@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    AppFooterComponent,
    AppAsideComponent,
    AppHeaderSubComponent,
    AppSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
