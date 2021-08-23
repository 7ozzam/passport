import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { DataManagementService } from '../../services/data-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])

]
})
export class ProcessingPageComponent implements OnInit,AfterViewInit  {
  constructor(
    public dataManagementService: DataManagementService,
    private router: Router,
  ) {
    if (!this.dataManagementService.imgURL) {
      this.router.navigate(['']);
    }
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
