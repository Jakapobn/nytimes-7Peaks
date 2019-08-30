import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleDetailResolverService } from './article/article-detail/article-detail.resolver.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/detail', component: ArticleDetailComponent, resolve: { article: ArticleDetailResolverService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
