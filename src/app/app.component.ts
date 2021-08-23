import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './classes/route-animation';
import { DataManagementService } from './services/data-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  constructor(public dataManagementService: DataManagementService) {}

  async ngOnInit() {

  }
  title = 'Passport-Ai';
}
