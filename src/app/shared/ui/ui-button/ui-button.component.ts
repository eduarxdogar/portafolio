import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onClick.emit($event)"
      [ngClass]="{
        'bg-neon-blue/90 hover:bg-neon-blue text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]': variant === 'primary',
        'border border-white/20 hover:bg-white/5 text-white hover:border-white/40': variant === 'outline',
        'w-full': fullWidth
      }"
      class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class UiButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() fullWidth: boolean = false;
  @Output() onClick = new EventEmitter<Event>();
}
