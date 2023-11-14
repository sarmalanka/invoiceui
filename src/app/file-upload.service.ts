// file-upload.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post('https://localhost:7091/api/Invoice', formData);
  }
  getData(){
    return this.http.get('https://localhost:7091/api/Invoice');
  }
}
