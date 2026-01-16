import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-default">
      <ng-content></ng-content>
    </span>
  `,
  styles: []
})
export class UiBadgeComponent {}
