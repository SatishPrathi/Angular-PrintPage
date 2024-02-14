import { Component, ViewChild } from '@angular/core';
import { PrintComponent } from './print/print.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('printComponent') printComponent!: PrintComponent; 
  print(): void {
    this.printComponent.printDocument(); 
  }
}
