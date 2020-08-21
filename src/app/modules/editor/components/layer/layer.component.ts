import { Component, OnInit, Input } from '@angular/core';
import { Bloc } from 'src/app/shared/models/bloc.model';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @Input() bloc: Bloc;

  get hasChildren(): boolean {
    return this.bloc.children.length > 0;
  }

  Toggle(): void {
    this.bloc.open = !this.bloc.open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
