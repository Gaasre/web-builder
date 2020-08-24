import { Injectable } from '@angular/core';
import { Block } from '../models/block.model';
import { Type } from '../models/type.model';
import { findDeep, mapValuesDeep } from 'deepdash-es/standalone';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  Types: Type[] = [
    {
      id: 1,
      name: 'Block',
      defaultStyle: [
        { name: 'background', value: '#fff' },
        { name: 'padding-top', value: 0 },
        { name: 'padding-right', value: 0 },
        { name: 'padding-bottom', value: 0 },
        { name: 'padding-left', value: 0 },
        { name: 'margin-top', value: 0 },
        { name: 'margin-right', value: 0 },
        { name: 'margin-bottom', value: 0 },
        { name: 'margin-left', value: 0 },
        { name: 'text-align', value: 'left' },
        { name: 'border-width', value: 0 },
        { name: 'border-style', value: 'solid' },
        { name: 'border-color', value: '#fff' },
        { name: 'border-top-left-radius', value: 0 },
        { name: 'border-top-right-radius', value: 0 },
        { name: 'border-bottom-left-radius', value: 0 },
        { name: 'border-bottom-right-radius', value: 0 },
        { name: 'shadow-x', value: 0 },
        { name: 'shadow-y', value: 0 },
        { name: 'shadow-blur', value: 0 },
        { name: 'shadow-size', value: 0 },
        { name: 'shadow-color', value: '#000' },
        { name: 'shadow-inset', value: false },
      ]
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
      style: [
        { name: 'background', value: '#fff' },
        { name: 'padding-top', value: 0 },
        { name: 'padding-right', value: 0 },
        { name: 'padding-bottom', value: 0 },
        { name: 'padding-left', value: 0 },
        { name: 'margin-top', value: 0 },
        { name: 'margin-right', value: 0 },
        { name: 'margin-bottom', value: 0 },
        { name: 'margin-left', value: 0 },
        { name: 'text-align', value: 'left' },
        { name: 'border-width', value: 0 },
        { name: 'border-style', value: 'solid' },
        { name: 'border-color', value: '#fff' },
        { name: 'border-top-left-radius', value: 0 },
        { name: 'border-top-right-radius', value: 0 },
        { name: 'border-bottom-left-radius', value: 0 },
        { name: 'border-bottom-right-radius', value: 0 },
        { name: 'shadow-x', value: 0 },
        { name: 'shadow-y', value: 0 },
        { name: 'shadow-blur', value: 0 },
        { name: 'shadow-size', value: 0 },
        { name: 'shadow-color', value: '#000' },
        { name: 'shadow-inset', value: false },
      ],
      hoverStyle: [],
      content: '',
      open: false,
      selected: false,
      children: [
        {
          id: 2,
          name: 'Button 1',
          type: this.Types[3],
          style: [],
          hoverStyle: [],
          content: '',
          open: false,
          selected: false,
          children: []
        },
        {
          id: 3,
          name: 'Text 1',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          selected: false,
          children: []
        },
        {
          id: 4,
          name: 'Text 2',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          selected: false,
          children: []
        },
        {
          id: 5,
          name: 'Text 3',
          type: this.Types[1],
          style: [],
          hoverStyle: [],
          content: 'Testing',
          open: false,
          selected: true,
          children: []
        }
      ]
    }
  ];

  findBlock(id: number) {
    return findDeep(this.Blocks, (value, key) => key === 'id' && value === id)?.parent;
  }

  selectedBlock() {
    return findDeep(this.Blocks, (value, key) => key === 'selected' && value === true)?.parent as any;
  }

  updateBlock(block: Block) {
    this.Blocks = mapValuesDeep(this.Blocks, (value) => {
      if (value.id === block.id) {
        return block;
      }
      return value;
    }, { childrenPath: ['children'] });
  }

  unselectBlocks() {
    this.Blocks = mapValuesDeep(this.Blocks, (value) => {
      if (value.selected === true) {
        value.selected = false;
      }
      return value;
    }, { childrenPath: ['children'] });
  }

  selectBlock(block: Block) {
    this.Blocks = mapValuesDeep(this.Blocks, (value) => {
      if (value.id === block.id) {
        value.selected = true;
      }
      return value;
    }, { childrenPath: ['children'] });
  }
}
