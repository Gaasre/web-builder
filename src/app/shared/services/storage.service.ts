import { Injectable } from '@angular/core';
import { Block } from '../models/block.model';
import { Type } from '../models/type.model';
import { findDeep, mapValuesDeep, filterDeep } from 'deepdash-es/standalone';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.Types = [
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
          { name: 'border-width', value: 1 },
          { name: 'border-style', value: 'solid' },
          { name: 'border-color', value: '#ffffff00' },
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
          { name: 'flexbox', value: false },
          { name: 'flex-direction', value: 'row' },
          { name: 'flex-wrap', value: 'wrap' },
          { name: 'justify-content', value: 'flex-start' },
        ]
      },
      {
        id: 2,
        name: 'Text',
        defaultStyle: [
          { name: 'color', value: '#000' },
          { name: 'font-size', value: 12 },
          { name: 'font-weight', value: '500' },
        ]
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
    this.Blocks = [
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
          { name: 'border-width', value: 1 },
          { name: 'border-style', value: 'solid' },
          { name: 'border-color', value: '#ffffff00' },
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
          { name: 'flexbox', value: false },
          { name: 'flex-direction', value: 'row' },
          { name: 'flex-wrap', value: 'wrap' },
          { name: 'justify-content', value: 'flex-start' },
        ],
        hoverStyle: [],
        content: '',
        open: false,
        selected: false,
        children: []
      }
    ];
  }
  nextId = 2;

  Types: Type[] = [];

  Blocks: Block[] = [];

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
      } else {
        return value;
      }
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

  deleteBlock(block: Block) {
    this.Blocks = filterDeep(this.Blocks, (value) => {
      if (value.id !== block.id) {
        return true;
      }
      return false;
    }, { childrenPath: ['children'] });
  }

  newBlock(typeID: number, parent: Block): void {
    let defaultStyle = [];
    if (typeID === 1) {
      defaultStyle = [
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
        { name: 'border-width', value: 1 },
        { name: 'border-style', value: 'solid' },
        { name: 'border-color', value: '#ffffff00' },
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
        { name: 'flexbox', value: false },
        { name: 'flex-direction', value: 'row' },
        { name: 'flex-wrap', value: 'wrap' },
        { name: 'justify-content', value: 'flex-start' },
      ];
    } else if (typeID === 2) {
      defaultStyle = [
        { name: 'color', value: '#000' },
        { name: 'font-size', value: 12 },
        { name: 'font-weight', value: '500' },
      ];
    } else {
      defaultStyle = [];
    }
    const newBlock = {
      id: this.nextId,
      name: 'New ' + this.Types[typeID - 1].name + ' ' + this.nextId,
      type: { ...this.Types[typeID - 1] },
      style: defaultStyle,
      hoverStyle: [],
      content: 'New ' + this.Types[typeID - 1].name + ' ' + this.nextId,
      open: false,
      selected: false,
      children: []
    };
    parent.children = [...parent.children, newBlock];
    this.updateBlock(parent);
    this.nextId++;
  }
}
