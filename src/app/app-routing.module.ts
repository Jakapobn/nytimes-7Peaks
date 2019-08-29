import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/detail', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
