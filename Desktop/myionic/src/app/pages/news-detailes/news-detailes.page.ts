import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { NewsInterface } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-news-detailes',
  templateUrl: './news-detailes.page.html',
  styleUrls: ['./news-detailes.page.scss'],
})
export class NewsDetailesPage implements OnInit {

  id:string;
  news: NewsInterface=null;

  constructor(private newsService: NewsService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    //this.news=this.newsService.getNewsById(this.id);
    console.log('news',this.news);
  }

}
