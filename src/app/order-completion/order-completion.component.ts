import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-completion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-completion.component.html',
  styleUrl: './order-completion.component.scss',
})
export class OrderCompletionComponent {}
