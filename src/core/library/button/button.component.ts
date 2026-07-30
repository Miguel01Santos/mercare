import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonTheme = 'outline' | 'filled';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() theme: ButtonTheme = 'filled';

  @Input() size: ButtonSize = 'small';
  @Input() disabled = false;
  @Input() text = '';

  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
