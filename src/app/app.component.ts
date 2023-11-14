import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoiceui';
  selectedFile: File| null = null;
  dataSource = [
    { sno: 1, name: 'John Doe', empid: 30, emptype: 'Contractor', 
  mode: 'OUT', date: '2023-09-01', time: '18:05:00', location: 'WH_VIJAYAWADA 1_JPND_OUT',
locationcode: 'LC11', locationname: 'WH_JPND' },
    { sno: 1, name: 'John Doe', empid: 30, emptype: 'Contractor', 
    mode: 'IN', date: '2023-09-01', time: '10:05:00', location: 'WH_VIJAYAWADA 1_JPND_OUT',
  locationcode: 'LC11', locationname: 'WH_JPND' },
    // ... other data
  ];

  displayedColumns: string[] = ['sno','name', 'empid', 'emptype', 'mode' ,'date' ,'time',
'location','locationcode','locationname'];

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe((result) => 
        console.log('File uploaded successfully'))
        }
        this.selectedFile = null;
        this.fileUploadService.getData().subscribe((result:any)=>{
        this.dataSource = result
  });
  }
}
