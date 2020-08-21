import { Injectable } from '@angular/core';
import { Bloc } from '../models/bloc.model';
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
      name: 'Bloc',
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

  Blocs: Bloc[] = [
    {
      id: 1,
      name: 'Bloc 1',
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
          name: 'Bloc 4',
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

  findBloc(id: number) {
    return findDeep(this.Blocs, (value, key) => key === 'id' && value === id)?.parent;
  }
}
