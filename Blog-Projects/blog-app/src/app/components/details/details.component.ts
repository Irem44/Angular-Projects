import { Component, OnInit } from '@angular/core';
import { ListarticlesService } from '../../services/listarticles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  article: any;
  constructor(
    private route: ActivatedRoute,
    public list: ListarticlesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.article = this.list.getArticleById(id);
  }
}
