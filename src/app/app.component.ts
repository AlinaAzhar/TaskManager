import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'action-list';
  constructor(private common: CommonServiceService){
    this.common.setTasks();
  }
}
