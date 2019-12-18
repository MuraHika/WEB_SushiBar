import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-store',
  templateUrl: './file-store.component.html',
  styleUrls: ['./file-store.component.less']
})
export class FileStoreComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.updateFiles()
  }

  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];

      const formData = new FormData();
      formData.append('file', file, file.name);

      this.http.post('http://localhost:5000/api/1.0/files/save', formData, { withCredentials: true })
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        );
    }
  }

  private files = [[]]

  updateFiles(){
    this.http.post('http://localhost:5000/api/1.0/files/getList_files', {}, {withCredentials: true}).subscribe((data:Array<Array<string>>)=>{
      this.files = []
      console.log(data)
      data.forEach(element => {
        element[0] = "http://localhost:5000/api/1.0/files/file_download_on_computer/" + element[0]
        this.files.push(element)
      });
    });
  }
}
