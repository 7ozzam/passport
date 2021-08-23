export class LandingPageModel {
    constructor(
      public id: number,
      public name: string,
      public country: string,
      public dpi: number,
      public width: number,
      public height: number,
      public sizeUnit: string,
      public bgColor: string,
      public headHeight: number,
      public hairToTop: number,
      public headUnit: string,
      public isOnline: boolean,
      public isPrintable: boolean,
      public introText: string,
      public differencesText: string,
      public requirementsText: string,
      public aboutText: string
    ){}
}

export class LandingPageListModel {
  constructor(
    public id: number,
    public name: string,
    public country: string,
    public imageUrl: string
  ){}
}
