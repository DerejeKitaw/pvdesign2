import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMasterComponent } from './components/layout-master/layout-master.component';
import { LayoutSimpleComponent } from './components/layout-simple/layout-simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMasterComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule'
      },
      // {
      //   path: 'equipments',
      //   loadChildren: './components/equipments/equipments.module#EquipmentsModule'
      // }
    ]
  },
  {
    path: 'pages',
    component: LayoutSimpleComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './components/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
