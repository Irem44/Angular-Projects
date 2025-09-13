import { Component } from '@angular/core';
import { ListarticlesService } from '../../services/listarticles.service';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  constructor(public list: ListarticlesService) {}
}
