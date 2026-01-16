import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="bg-indigo-500/10 border border-indigo-400/20 px-2 py-0.5 rounded-md text-[11px] font-bold text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 transition-all duration-300 flex items-center gap-1.5 cursor-default shadow-[0_0_10px_rgba(99,102,241,0.1)]">
      <ng-content></ng-content>
    </span>
  `,
  styles: []
})
export class UiBadgeComponent {}
