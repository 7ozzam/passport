import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManagementService } from 'src/app/services/data-management.service';
import { RestApiService } from 'src/app/services/rest-api.service';
@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {
  uploadForm: FormGroup;
  formData = new FormData();
  reader = new FileReader();
  @Output() onStart = new EventEmitter();
  @Output() onDone = new EventEmitter();
  @Output() onError = new EventEmitter();
  // file = new HTMLCanvasElement();


  constructor(
    private formBuilder: FormBuilder,
    private api: RestApiService,
    public dataManagementService: DataManagementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      image: ['']
    });
  }

  resetData() {
    this.formData.delete('image');
    this.dataManagementService.imgURL = '';
    this.dataManagementService.croppedImage = null;
    this.uploadForm.get('image').setValue('');
  }

  async submitImage() {
    await this.dataManagementService.removeBackground(this.formData);
  }

  onStartEmit() {
    this.onStart.emit();
  }

  onDoneEmit() {
    this.onDone.emit();
  }

  onFileSelect(event) {
    this.resetData();
    this.onStartEmit();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append("image", file);
      this.reader.readAsDataURL(file);
      this.reader.onload = async (_event) => {
      this.dataManagementService.imgURL = this.reader.result;
      await this.submitImage();
      this.onDoneEmit();
    }
    }
  }
}
