import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagementService } from '../../services/data-management.service';
import { LandingPageModel } from '../../models/dashboard';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('scaleAnimation', [
      state('true', style({ transform: 'scale(10)', opacity: 1 })),
      state('false', style({ transform: 'scale(0)', opacity: 0 })),
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('1000ms', style({ transform: 'scale(10)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(10)', opacity: 1 }),
        animate('500ms', style({ transform: 'scale(0)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  landingId: number;
  features: { title: string; description: string, icon: string }[] = [
    {
      title: 'Convenience',
      description:
        'Digital photo within a few seconds or printouts shipping to your home',
      icon: 'assets/images/icons/confidence.png'
    },
    {
      title: 'Professional service',
      description:
        'Over 1,000,000 people have used our services within 7 years.',
      icon: 'assets/images/icons/camera.png'
    },
    {
      title: 'Guarantee of acceptance',
      description:
        'If your photo is rejected by authorities, we will refund you twice the price you paid',
      icon: 'assets/images/icons/money-back-guarantee.png'
    },
    {
      title: 'Satisfaction guarantee',
      description:
        'Take as many photo shots as you want - you pay only when you are satisfied',
      icon: 'assets/images/icons/satisfaction.png'
    },
  ];
  loader = false;
  constructor(
    private router: Router,
    private aroute: ActivatedRoute,
    public dataManagementService: DataManagementService,
    public api: RestApiService
  ) {
    this.dataManagementService.landingAnimation = false;
  }

  async ngOnInit() {
    await this.dataManagementService.getAllLandingPages();
    this.landingId = +this.aroute.snapshot.paramMap.get('slug');
    if (!!this.landingId) {
      let landingIndex = this.dataManagementService.landingPagesData.findIndex((a)=>{return a.id === this.landingId});
      if  (landingIndex !== -1) {
        this.dataManagementService.landingPageData = this.dataManagementService.landingPagesData[landingIndex];
      }
      else {
        this.router.navigate(['/']);
      }
    }
    else {
      this.router.navigate(['/']);
    }

  }

  animationDone(event: AnimationEvent) {
    setTimeout(() => {
      this.navigateToResultPage();
    }, 500);
  }

  startProcess() {
    this.dataManagementService.landingAnimation = true;
  }

  navigateToResultPage() {
    console.log('Started');
    this.router.navigate(['result']);
  }
}
