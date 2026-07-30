import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../core/components/header/header.component';
import { ButtonComponent } from '../core/library/button/button.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mercare');
}
