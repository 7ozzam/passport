import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../../../services/data-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dataManagementService:DataManagementService,
  ) { }

  async ngOnInit(){
    await this.dataManagementService.getAllLandingPagesList();
  }

}
