import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class UiCardComponent {}
