import { Component, OnInit, Input } from '@angular/core';
import { Bloc } from 'src/app/shared/models/bloc.model';

@Component({
  selector: 'app-layers-view',
  templateUrl: './layers-view.component.html',
  styleUrls: ['./layers-view.component.scss']
})
export class LayersViewComponent implements OnInit {

  @Input() bloc: Bloc;

  get hasChildren(): boolean {
    return this.bloc.children.length > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleBloc(bloc: Bloc): void {
    bloc.open = !bloc.open;
  }

  isInlineBlock(bloc: Bloc): boolean {
    return bloc.type.id !== 1 && bloc.type.id !== 2;
  }

}
