import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { NewsInterface } from 'src/app/interfaces/news.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: NewsInterface[]=null; 

  constructor(private newsService: NewsService , private router: Router) { }

  ngOnInit() {
    this.getAllNews();
    //console.log(this.newsService.getAllNews());
  
    //this.news=this.newsService.getAllNews();
  }
  ongotoDeatiales(id : string){
    console.log('id:', id);
    this.router.navigate(['/','news-detailes', id]);

  }
  async getAllNews() {
    await this.newsService.getAllNews()
      .subscribe((news: NewsInterface[]) => {
        console.log(news);
        this.news = news;
      }, err => {
        console.log(err);
      });
  }
}
