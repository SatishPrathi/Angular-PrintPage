import { Component, ViewChild } from '@angular/core';
import { PrintComponent } from './print/print.component'; // Import the PrintComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('printComponent') printComponent!: PrintComponent; // ViewChild to access the PrintComponent

  print(): void {
    this.printComponent.printDocument(); // Call the printDocument() method of the PrintComponent
  }
}
