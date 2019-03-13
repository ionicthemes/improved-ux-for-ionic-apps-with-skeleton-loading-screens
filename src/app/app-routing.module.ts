import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  // Resolvers
  {
    path: 'blocking-resolver',
    loadChildren: './blocking-resolver/blocking-resolver.module#BlockingResolverPageModule'
  },
  {
    path: 'non-blocking-resolver',
    loadChildren: './non-blocking-resolver/non-blocking-resolver.module#NonBlockingResolverPageModule'
  },
  {
    path: 'progressive-shell-resolver',
    loadChildren: './progressive-shell-resolver/progressive-shell-resolver.module#ProgressiveShellResolverPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
