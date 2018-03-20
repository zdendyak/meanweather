import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnChanges {

  @Input()
  city: string;

  data: any;

  constructor(private twitterService: TwitterService) { }


  ngOnChanges(changes: SimpleChanges) {
    this.getTweets(changes.city.currentValue);
  }

  private getTweets(cityName) {
    this.twitterService.getTweets(cityName)
      .subscribe(data => {
        this.data = data;
      })
  }
 

}
