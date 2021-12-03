import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'synthesis',
    loadChildren: () => import('./synthesis/synthesis.module').then((m) => m.SynthesisModule),
  },
  {
    path: 'workflow',
    loadChildren: () => import('./workflow/workflow.module').then((m) => m.WorkflowModule),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
{
  path: 'home',
  component: HomeComponent
},*/
