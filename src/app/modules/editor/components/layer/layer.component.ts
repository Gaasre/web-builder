import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @Input() block: Block;

  get hasChildren(): boolean {
    return this.block.children.length > 0;
  }

  Toggle(): void {
    this.block.open = !this.block.open;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
