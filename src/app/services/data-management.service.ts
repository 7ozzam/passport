import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LandingPageListModel, LandingPageModel } from '../models/dashboard';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  landingAnimation = false;
  loading = false;
  loadingData = true;
  croppedImage: any;
  imgURL: any;
  landingPageData: LandingPageModel;
  landingPageList: LandingPageListModel[];
  landingPagesData: LandingPageModel[];

  constructor(
    private api: RestApiService,
    private sanitizer: DomSanitizer,
  ) { }

  startLoadingData() {
    this.loadingData = true;
  }

  stopLoadingData() {
    this.loadingData = false;
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }

  async removeBackground(formData: FormData) {
    this.startLoading();
    await this.api.cropImage(formData).toPromise().then((imageBlob)=> {
      const imageObjectURL = URL.createObjectURL(imageBlob);
      this.croppedImage = this.sanitizer.bypassSecurityTrustResourceUrl(imageObjectURL);
      this.stopLoading()
    });
    return this.croppedImage;
  }

  async getAllLandingPagesList() {
    this.startLoadingData();
    this.landingPageList = await this.api.getAllLandingPagesList().toPromise();
    this.stopLoadingData();
  }

  async getAllLandingPages() {
    this.startLoadingData();
    this.landingPagesData = await this.api.getAllLandingPages().toPromise();
    this.landingPageData = this.landingPagesData[0];
    this.stopLoadingData();
  }

}
