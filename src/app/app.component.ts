import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillViewComponent } from './bill-view/bill-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery_billing-app';
}
