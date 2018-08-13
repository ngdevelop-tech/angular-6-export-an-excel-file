import { Component } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private excelService: ExcelService) {

  }

  generateExcel() {
    this.excelService.generateExcel();
  }

}
