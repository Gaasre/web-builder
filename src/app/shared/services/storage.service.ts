import { Injectable } from '@angular/core';
import { Block } from '../models/block.model';
import { Type } from '../models/type.model';
import { findDeep } from 'deepdash-es/standalone';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  Types: Type[] = [
    {
      id: 1,
      name: 'Block',
      defaultStyle: []
    },
    {
      id: 2,
      name: 'Text',
      defaultStyle: []
    },
    {
      id: 3,
      name: 'Image',
      defaultStyle: []
    },
    {
      id: 4,
      name: 'Button',
      defaultStyle: []
    },
  ];

  Blocks: Block[] = [
    {
      id: 1,
      name: 'Block 1',
      type: this.Types[0],
      style: [],
      hoverStyle: [],
      content: '',
      open: false,
      children: [
        {
          id: 2,
          name: 'Button 1',
          type: this.Types[3],
          style: [],
          hoverStyle: [],
          content: '',
          open: false,
          children: []
        },
        {
          id: 3,
          name: 'Block 4',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          children: []
        },
        {
          id: 4,
          name: 'Block 4',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          children: []
        },
        {
          id: 5,
          name: 'Block 4',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          children: []
        }
      ]
    }
  ];

  findBlock(id: number) {
    return findDeep(this.Blocks, (value, key) => key === 'id' && value === id)?.parent;
  }
}
