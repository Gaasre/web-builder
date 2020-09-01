import { Injectable } from '@angular/core';
import { Block } from '../models/block.model';
import { Type } from '../models/type.model';
import { findDeep, mapValuesDeep, filterDeep, mapDeep, forEachDeep } from 'deepdash-es/standalone';

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
      {
        id: 5,
        name: 'Icon',
        defaultStyle: []
      },
    ];
    /*this.Blocks = [
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
          { name: 'border-position', value: '' },
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
        editing: false,
        children: []
      }
    ];*/
    // Facebook banner
    this.Blocks = [{
      id: 1,
      name: 'Root',
      type: {
        id: 1,
        name: 'Block',
        defaultStyle: [
          {
            name: 'background',
            value: '#fff'
          },
          {
            name: 'padding-top',
            value: 0
          },
          {
            name: 'padding-right',
            value: 0
          },
          {
            name: 'padding-bottom',
            value: 0
          },
          {
            name: 'padding-left',
            value: 0
          },
          {
            name: 'margin-top',
            value: 0
          },
          {
            name: 'margin-right',
            value: 0
          },
          {
            name: 'margin-bottom',
            value: 0
          },
          {
            name: 'margin-left',
            value: 0
          },
          {
            name: 'text-align',
            value: 'left'
          },
          {
            name: 'border-width',
            value: 1
          },
          {
            name: 'border-style',
            value: 'solid'
          },
          {
            name: 'border-color',
            value: '#ffffff00'
          },
          {
            name: 'border-top-left-radius',
            value: 0
          },
          {
            name: 'border-top-right-radius',
            value: 0
          },
          {
            name: 'border-bottom-left-radius',
            value: 0
          },
          {
            name: 'border-bottom-right-radius',
            value: 0
          },
          {
            name: 'shadow-x',
            value: 0
          },
          {
            name: 'shadow-y',
            value: 0
          },
          {
            name: 'shadow-blur',
            value: 0
          },
          {
            name: 'shadow-size',
            value: 0
          },
          {
            name: 'shadow-color',
            value: '#000'
          },
          {
            name: 'shadow-inset',
            value: false
          },
          {
            name: 'flexbox',
            value: false
          },
          {
            name: 'flex-direction',
            value: 'row'
          },
          {
            name: 'flex-wrap',
            value: 'wrap'
          },
          {
            name: 'justify-content',
            value: 'flex-start'
          }
        ]
      },
      isRoot: true,
      style: [
        {
          name: 'background',
          value: '#242526'
        },
        {
          name: 'padding-top',
          value: '5'
        },
        {
          name: 'padding-right',
          value: '10'
        },
        {
          name: 'padding-bottom',
          value: '0'
        },
        {
          name: 'padding-left',
          value: '10'
        },
        {
          name: 'margin-top',
          value: 0
        },
        {
          name: 'margin-right',
          value: 0
        },
        {
          name: 'margin-bottom',
          value: 0
        },
        {
          name: 'margin-left',
          value: 0
        },
        {
          name: 'text-align',
          value: 'left'
        },
        {
          name: 'border-position',
          value: 'bottom'
        },
        {
          name: 'border-width',
          value: '0'
        },
        {
          name: 'border-style',
          value: 'solid'
        },
        {
          name: 'border-color',
          value: '#393a3b'
        },
        {
          name: 'border-top-left-radius',
          value: 0
        },
        {
          name: 'border-top-right-radius',
          value: 0
        },
        {
          name: 'border-bottom-left-radius',
          value: 0
        },
        {
          name: 'border-bottom-right-radius',
          value: 0
        },
        {
          name: 'shadow-x',
          value: 0
        },
        {
          name: 'shadow-y',
          value: 0
        },
        {
          name: 'shadow-blur',
          value: 0
        },
        {
          name: 'shadow-size',
          value: 0
        },
        {
          name: 'shadow-color',
          value: '#000'
        },
        {
          name: 'shadow-inset',
          value: false
        },
        {
          name: 'flexbox',
          value: true
        },
        {
          name: 'flex-direction',
          value: 'row'
        },
        {
          name: 'flex-wrap',
          value: 'wrap'
        },
        {
          name: 'justify-content',
          value: 'space-between'
        }
      ],
      hoverStyle: [],
      content: '',
      open: true,
      selected: true,
      editing: false,
      children: [
        {
          id: 20,
          name: 'Navbar_left',
          type: {
            id: 1,
            name: 'Block',
            defaultStyle: [
              {
                name: 'background',
                value: '#fff'
              },
              {
                name: 'padding-top',
                value: 0
              },
              {
                name: 'padding-right',
                value: 0
              },
              {
                name: 'padding-bottom',
                value: 0
              },
              {
                name: 'padding-left',
                value: 0
              },
              {
                name: 'margin-top',
                value: 0
              },
              {
                name: 'margin-right',
                value: 0
              },
              {
                name: 'margin-bottom',
                value: 0
              },
              {
                name: 'margin-left',
                value: 0
              },
              {
                name: 'text-align',
                value: 'left'
              },
              {
                name: 'border-width',
                value: 1
              },
              {
                name: 'border-style',
                value: 'solid'
              },
              {
                name: 'border-color',
                value: '#ffffff00'
              },
              {
                name: 'border-top-left-radius',
                value: 0
              },
              {
                name: 'border-top-right-radius',
                value: 0
              },
              {
                name: 'border-bottom-left-radius',
                value: 0
              },
              {
                name: 'border-bottom-right-radius',
                value: 0
              },
              {
                name: 'shadow-x',
                value: 0
              },
              {
                name: 'shadow-y',
                value: 0
              },
              {
                name: 'shadow-blur',
                value: 0
              },
              {
                name: 'shadow-size',
                value: 0
              },
              {
                name: 'shadow-color',
                value: '#000'
              },
              {
                name: 'shadow-inset',
                value: false
              },
              {
                name: 'flexbox',
                value: false
              },
              {
                name: 'flex-direction',
                value: 'row'
              },
              {
                name: 'flex-wrap',
                value: 'wrap'
              },
              {
                name: 'justify-content',
                value: 'flex-start'
              }
            ]
          },
          style: [
            {
              name: 'background',
              value: '#ffffff00'
            },
            {
              name: 'padding-top',
              value: '0'
            },
            {
              name: 'padding-right',
              value: '0'
            },
            {
              name: 'padding-bottom',
              value: '0'
            },
            {
              name: 'padding-left',
              value: '0'
            },
            {
              name: 'margin-top',
              value: 0
            },
            {
              name: 'margin-right',
              value: 0
            },
            {
              name: 'margin-bottom',
              value: 0
            },
            {
              name: 'margin-left',
              value: 0
            },
            {
              name: 'text-align',
              value: 'left'
            },
            {
              name: 'border-position',
              value: ''
            },
            {
              name: 'border-width',
              value: 1
            },
            {
              name: 'border-style',
              value: 'solid'
            },
            {
              name: 'border-color',
              value: '#ffffff00'
            },
            {
              name: 'border-top-left-radius',
              value: 0
            },
            {
              name: 'border-top-right-radius',
              value: 0
            },
            {
              name: 'border-bottom-left-radius',
              value: 0
            },
            {
              name: 'border-bottom-right-radius',
              value: 0
            },
            {
              name: 'shadow-x',
              value: 0
            },
            {
              name: 'shadow-y',
              value: 0
            },
            {
              name: 'shadow-blur',
              value: 0
            },
            {
              name: 'shadow-size',
              value: 0
            },
            {
              name: 'shadow-color',
              value: '#000'
            },
            {
              name: 'shadow-inset',
              value: false
            },
            {
              name: 'flexbox',
              value: true
            },
            {
              name: 'flex-direction',
              value: 'row'
            },
            {
              name: 'flex-wrap',
              value: 'wrap'
            },
            {
              name: 'justify-content',
              value: 'flex-start'
            }
          ],
          hoverStyle: [],
          content: 'New Block 20',
          open: true,
          selected: false,
          editing: false,
          children: [
            {
              id: 21,
              name: 'Logo',
              type: {
                id: 3,
                name: 'Image',
                defaultStyle: []
              },
              style: [
                {
                  name: 'height',
                  value: '35'
                },
                {
                  name: 'width',
                  value: '35'
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'border-width',
                  value: 0
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                }
              ],
              hoverStyle: [],
              content: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512',
              open: false,
              selected: false,
              editing: false,
              children: []
            },
            {
              id: 22,
              name: 'Search_bar',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#3a3b3c'
                },
                {
                  name: 'padding-top',
                  value: '3'
                },
                {
                  name: 'padding-right',
                  value: '30'
                },
                {
                  name: 'padding-bottom',
                  value: '3'
                },
                {
                  name: 'padding-left',
                  value: '5'
                },
                {
                  name: 'margin-top',
                  value: '3'
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: '5'
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: '0'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: '30'
                },
                {
                  name: 'border-top-right-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-left-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-right-radius',
                  value: '30'
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: true
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 22',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 23,
                  name: 'New Icon 23',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '15'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    },
                    {
                      name: 'color',
                      value: '#a1a3a7'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: '5'
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'search',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                },
                {
                  id: 24,
                  name: 'New Text 24',
                  type: {
                    id: 2,
                    name: 'Text',
                    defaultStyle: [
                      {
                        name: 'color',
                        value: '#000'
                      },
                      {
                        name: 'font-size',
                        value: 12
                      },
                      {
                        name: 'font-weight',
                        value: '500'
                      }
                    ]
                  },
                  style: [
                    {
                      name: 'color',
                      value: '#a1a3a7'
                    },
                    {
                      name: 'font-size',
                      value: '13.5'
                    },
                    {
                      name: 'font-weight',
                      value: '400'
                    }
                  ],
                  hoverStyle: [],
                  content: 'Rechercher sur Facebook',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 6,
          name: 'Navbar_middle',
          type: {
            id: 1,
            name: 'Block',
            defaultStyle: [
              {
                name: 'background',
                value: '#fff'
              },
              {
                name: 'padding-top',
                value: 0
              },
              {
                name: 'padding-right',
                value: 0
              },
              {
                name: 'padding-bottom',
                value: 0
              },
              {
                name: 'padding-left',
                value: 0
              },
              {
                name: 'margin-top',
                value: 0
              },
              {
                name: 'margin-right',
                value: 0
              },
              {
                name: 'margin-bottom',
                value: 0
              },
              {
                name: 'margin-left',
                value: 0
              },
              {
                name: 'text-align',
                value: 'left'
              },
              {
                name: 'border-width',
                value: 1
              },
              {
                name: 'border-style',
                value: 'solid'
              },
              {
                name: 'border-color',
                value: '#ffffff00'
              },
              {
                name: 'border-top-left-radius',
                value: 0
              },
              {
                name: 'border-top-right-radius',
                value: 0
              },
              {
                name: 'border-bottom-left-radius',
                value: 0
              },
              {
                name: 'border-bottom-right-radius',
                value: 0
              },
              {
                name: 'shadow-x',
                value: 0
              },
              {
                name: 'shadow-y',
                value: 0
              },
              {
                name: 'shadow-blur',
                value: 0
              },
              {
                name: 'shadow-size',
                value: 0
              },
              {
                name: 'shadow-color',
                value: '#000'
              },
              {
                name: 'shadow-inset',
                value: false
              },
              {
                name: 'flexbox',
                value: false
              },
              {
                name: 'flex-direction',
                value: 'row'
              },
              {
                name: 'flex-wrap',
                value: 'wrap'
              },
              {
                name: 'justify-content',
                value: 'flex-start'
              }
            ]
          },
          style: [
            {
              name: 'background',
              value: '#ffffff00'
            },
            {
              name: 'padding-top',
              value: '5'
            },
            {
              name: 'padding-right',
              value: 0
            },
            {
              name: 'padding-bottom',
              value: '0'
            },
            {
              name: 'padding-left',
              value: 0
            },
            {
              name: 'margin-top',
              value: '0'
            },
            {
              name: 'margin-right',
              value: 0
            },
            {
              name: 'margin-bottom',
              value: '0'
            },
            {
              name: 'margin-left',
              value: '0'
            },
            {
              name: 'text-align',
              value: 'left'
            },
            {
              name: 'border-position',
              value: ''
            },
            {
              name: 'border-width',
              value: '0'
            },
            {
              name: 'border-style',
              value: 'solid'
            },
            {
              name: 'border-color',
              value: '#ffffff00'
            },
            {
              name: 'border-top-left-radius',
              value: 0
            },
            {
              name: 'border-top-right-radius',
              value: 0
            },
            {
              name: 'border-bottom-left-radius',
              value: 0
            },
            {
              name: 'border-bottom-right-radius',
              value: 0
            },
            {
              name: 'shadow-x',
              value: 0
            },
            {
              name: 'shadow-y',
              value: 0
            },
            {
              name: 'shadow-blur',
              value: 0
            },
            {
              name: 'shadow-size',
              value: 0
            },
            {
              name: 'shadow-color',
              value: '#000'
            },
            {
              name: 'shadow-inset',
              value: false
            },
            {
              name: 'flexbox',
              value: true
            },
            {
              name: 'flex-direction',
              value: 'row'
            },
            {
              name: 'flex-wrap',
              value: 'wrap'
            },
            {
              name: 'justify-content',
              value: 'flex-start'
            }
          ],
          hoverStyle: [],
          content: 'New Block 6',
          open: true,
          selected: false,
          editing: false,
          children: [
            {
              id: 7,
              name: 'home_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#ffffff00'
                },
                {
                  name: 'padding-top',
                  value: '0'
                },
                {
                  name: 'padding-right',
                  value: '40'
                },
                {
                  name: 'padding-bottom',
                  value: '5'
                },
                {
                  name: 'padding-left',
                  value: '40'
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: 'bottom'
                },
                {
                  name: 'border-width',
                  value: '2'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#2d88ff'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 7',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 8,
                  name: 'New Icon 8',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '24'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    },
                    {
                      name: 'color',
                      value: '#2d88ff'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'home',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 10,
              name: 'team_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#ffffff00'
                },
                {
                  name: 'padding-top',
                  value: 0
                },
                {
                  name: 'padding-right',
                  value: '40'
                },
                {
                  name: 'padding-bottom',
                  value: '5'
                },
                {
                  name: 'padding-left',
                  value: '40'
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: 1
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 10',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 13,
                  name: 'New Icon 13',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '24'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    },
                    {
                      name: 'color',
                      value: '#a1a3a7'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'team',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 11,
              name: 'play_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#ffffff00'
                },
                {
                  name: 'padding-top',
                  value: 0
                },
                {
                  name: 'padding-right',
                  value: '40'
                },
                {
                  name: 'padding-bottom',
                  value: '5'
                },
                {
                  name: 'padding-left',
                  value: '40'
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: 1
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 11',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 14,
                  name: 'New Icon 14',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '24'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    },
                    {
                      name: 'color',
                      value: '#a1a3a7'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'play-square',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 12,
              name: 'store_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#ffffff00'
                },
                {
                  name: 'padding-top',
                  value: 0
                },
                {
                  name: 'padding-right',
                  value: '40'
                },
                {
                  name: 'padding-bottom',
                  value: '5'
                },
                {
                  name: 'padding-left',
                  value: '40'
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: 1
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 12',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 15,
                  name: 'New Icon 15',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '24'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    },
                    {
                      name: 'color',
                      value: '#a1a3a7'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'shop',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 16,
          name: 'Navbar_right',
          type: {
            id: 1,
            name: 'Block',
            defaultStyle: [
              {
                name: 'background',
                value: '#fff'
              },
              {
                name: 'padding-top',
                value: 0
              },
              {
                name: 'padding-right',
                value: 0
              },
              {
                name: 'padding-bottom',
                value: 0
              },
              {
                name: 'padding-left',
                value: 0
              },
              {
                name: 'margin-top',
                value: 0
              },
              {
                name: 'margin-right',
                value: 0
              },
              {
                name: 'margin-bottom',
                value: 0
              },
              {
                name: 'margin-left',
                value: 0
              },
              {
                name: 'text-align',
                value: 'left'
              },
              {
                name: 'border-width',
                value: 1
              },
              {
                name: 'border-style',
                value: 'solid'
              },
              {
                name: 'border-color',
                value: '#ffffff00'
              },
              {
                name: 'border-top-left-radius',
                value: 0
              },
              {
                name: 'border-top-right-radius',
                value: 0
              },
              {
                name: 'border-bottom-left-radius',
                value: 0
              },
              {
                name: 'border-bottom-right-radius',
                value: 0
              },
              {
                name: 'shadow-x',
                value: 0
              },
              {
                name: 'shadow-y',
                value: 0
              },
              {
                name: 'shadow-blur',
                value: 0
              },
              {
                name: 'shadow-size',
                value: 0
              },
              {
                name: 'shadow-color',
                value: '#000'
              },
              {
                name: 'shadow-inset',
                value: false
              },
              {
                name: 'flexbox',
                value: false
              },
              {
                name: 'flex-direction',
                value: 'row'
              },
              {
                name: 'flex-wrap',
                value: 'wrap'
              },
              {
                name: 'justify-content',
                value: 'flex-start'
              }
            ]
          },
          style: [
            {
              name: 'background',
              value: '#ffffff00'
            },
            {
              name: 'padding-top',
              value: 0
            },
            {
              name: 'padding-right',
              value: 0
            },
            {
              name: 'padding-bottom',
              value: 0
            },
            {
              name: 'padding-left',
              value: 0
            },
            {
              name: 'margin-top',
              value: 0
            },
            {
              name: 'margin-right',
              value: 0
            },
            {
              name: 'margin-bottom',
              value: 0
            },
            {
              name: 'margin-left',
              value: 0
            },
            {
              name: 'text-align',
              value: 'left'
            },
            {
              name: 'border-position',
              value: ''
            },
            {
              name: 'border-width',
              value: 1
            },
            {
              name: 'border-style',
              value: 'solid'
            },
            {
              name: 'border-color',
              value: '#ffffff00'
            },
            {
              name: 'border-top-left-radius',
              value: 0
            },
            {
              name: 'border-top-right-radius',
              value: 0
            },
            {
              name: 'border-bottom-left-radius',
              value: 0
            },
            {
              name: 'border-bottom-right-radius',
              value: 0
            },
            {
              name: 'shadow-x',
              value: 0
            },
            {
              name: 'shadow-y',
              value: 0
            },
            {
              name: 'shadow-blur',
              value: 0
            },
            {
              name: 'shadow-size',
              value: 0
            },
            {
              name: 'shadow-color',
              value: '#000'
            },
            {
              name: 'shadow-inset',
              value: false
            },
            {
              name: 'flexbox',
              value: true
            },
            {
              name: 'flex-direction',
              value: 'row'
            },
            {
              name: 'flex-wrap',
              value: 'wrap'
            },
            {
              name: 'justify-content',
              value: 'flex-start'
            }
          ],
          hoverStyle: [],
          content: 'New Block 16',
          open: true,
          selected: false,
          editing: false,
          children: [
            {
              id: 17,
              name: 'Profil_name',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#ffffff00'
                },
                {
                  name: 'padding-top',
                  value: '5'
                },
                {
                  name: 'padding-right',
                  value: 0
                },
                {
                  name: 'padding-bottom',
                  value: 0
                },
                {
                  name: 'padding-left',
                  value: 0
                },
                {
                  name: 'margin-top',
                  value: 0
                },
                {
                  name: 'margin-right',
                  value: 0
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: 0
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: 1
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: 0
                },
                {
                  name: 'border-top-right-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-left-radius',
                  value: 0
                },
                {
                  name: 'border-bottom-right-radius',
                  value: 0
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: true
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 17',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 18,
                  name: 'profil_picture',
                  type: {
                    id: 3,
                    name: 'Image',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'height',
                      value: '25'
                    },
                    {
                      name: 'width',
                      value: '25'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: '5'
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    },
                    {
                      name: 'border-width',
                      value: 0
                    },
                    {
                      name: 'border-style',
                      value: 'solid'
                    },
                    {
                      name: 'border-color',
                      value: '#ffffff'
                    },
                    {
                      name: 'border-top-left-radius',
                      value: '30'
                    },
                    {
                      name: 'border-top-right-radius',
                      value: '30'
                    },
                    {
                      name: 'border-bottom-left-radius',
                      value: '30'
                    },
                    {
                      name: 'border-bottom-right-radius',
                      value: '30'
                    }
                  ],
                  hoverStyle: [],
                  // tslint:disable-next-line:max-line-length
                  content: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/52602960_2435479846479697_6336471238696763392_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeHvm9FC1kD3N36ZQYN9Ac67x_MARdR4C2vH8wBF1HgLa6kHgNE2gvkV3U65ckG00Y5avkYghJ9UuHxIkMqhJA6X&_nc_ohc=onUl0uDIPWoAX8wztXd&_nc_ht=scontent-mad1-1.xx&oh=2d36b131feba9e78b089ea6c501a17cc&oe=5F6E1806',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                },
                {
                  id: 19,
                  name: 'profil_name',
                  type: {
                    id: 2,
                    name: 'Text',
                    defaultStyle: [
                      {
                        name: 'color',
                        value: '#000'
                      },
                      {
                        name: 'font-size',
                        value: 12
                      },
                      {
                        name: 'font-weight',
                        value: '500'
                      }
                    ]
                  },
                  style: [
                    {
                      name: 'color',
                      value: '#e4e6eb'
                    },
                    {
                      name: 'font-size',
                      value: '13.5'
                    },
                    {
                      name: 'font-weight',
                      value: '500'
                    }
                  ],
                  hoverStyle: [],
                  content: 'Amine',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 25,
              name: 'plus_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#3a3b3c'
                },
                {
                  name: 'padding-top',
                  value: '3'
                },
                {
                  name: 'padding-right',
                  value: '8'
                },
                {
                  name: 'padding-bottom',
                  value: '3'
                },
                {
                  name: 'padding-left',
                  value: '8'
                },
                {
                  name: 'margin-top',
                  value: '2'
                },
                {
                  name: 'margin-right',
                  value: '6'
                },
                {
                  name: 'margin-bottom',
                  value: 0
                },
                {
                  name: 'margin-left',
                  value: '12'
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: '0'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: '30'
                },
                {
                  name: 'border-top-right-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-left-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-right-radius',
                  value: '30'
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 25',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 29,
                  name: 'New Icon 29',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '14'
                    },
                    {
                      name: 'font-weight',
                      value: '600'
                    },
                    {
                      name: 'color',
                      value: '#fff'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'plus',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 26,
              name: 'messages_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#3a3b3c'
                },
                {
                  name: 'padding-top',
                  value: '3'
                },
                {
                  name: 'padding-right',
                  value: '8'
                },
                {
                  name: 'padding-bottom',
                  value: '3'
                },
                {
                  name: 'padding-left',
                  value: '8'
                },
                {
                  name: 'margin-top',
                  value: '2'
                },
                {
                  name: 'margin-right',
                  value: '6'
                },
                {
                  name: 'margin-bottom',
                  value: '0'
                },
                {
                  name: 'margin-left',
                  value: '0'
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: '0'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: '30'
                },
                {
                  name: 'border-top-right-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-left-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-right-radius',
                  value: '30'
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 26',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 31,
                  name: 'New Icon 31',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '14'
                    },
                    {
                      name: 'font-weight',
                      value: '600'
                    },
                    {
                      name: 'color',
                      value: '#fff'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'message',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 27,
              name: 'bell_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#3a3b3c'
                },
                {
                  name: 'padding-top',
                  value: '3'
                },
                {
                  name: 'padding-right',
                  value: '8'
                },
                {
                  name: 'padding-bottom',
                  value: '3'
                },
                {
                  name: 'padding-left',
                  value: '8'
                },
                {
                  name: 'margin-top',
                  value: '2'
                },
                {
                  name: 'margin-right',
                  value: '6'
                },
                {
                  name: 'margin-bottom',
                  value: '0'
                },
                {
                  name: 'margin-left',
                  value: '0'
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: '0'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: '30'
                },
                {
                  name: 'border-top-right-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-left-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-right-radius',
                  value: '30'
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 27',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 32,
                  name: 'New Icon 32',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '14'
                    },
                    {
                      name: 'font-weight',
                      value: '600'
                    },
                    {
                      name: 'color',
                      value: '#fff'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'bell',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            },
            {
              id: 28,
              name: 'down_logo',
              type: {
                id: 1,
                name: 'Block',
                defaultStyle: [
                  {
                    name: 'background',
                    value: '#fff'
                  },
                  {
                    name: 'padding-top',
                    value: 0
                  },
                  {
                    name: 'padding-right',
                    value: 0
                  },
                  {
                    name: 'padding-bottom',
                    value: 0
                  },
                  {
                    name: 'padding-left',
                    value: 0
                  },
                  {
                    name: 'margin-top',
                    value: 0
                  },
                  {
                    name: 'margin-right',
                    value: 0
                  },
                  {
                    name: 'margin-bottom',
                    value: 0
                  },
                  {
                    name: 'margin-left',
                    value: 0
                  },
                  {
                    name: 'text-align',
                    value: 'left'
                  },
                  {
                    name: 'border-width',
                    value: 1
                  },
                  {
                    name: 'border-style',
                    value: 'solid'
                  },
                  {
                    name: 'border-color',
                    value: '#ffffff00'
                  },
                  {
                    name: 'border-top-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-top-right-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-left-radius',
                    value: 0
                  },
                  {
                    name: 'border-bottom-right-radius',
                    value: 0
                  },
                  {
                    name: 'shadow-x',
                    value: 0
                  },
                  {
                    name: 'shadow-y',
                    value: 0
                  },
                  {
                    name: 'shadow-blur',
                    value: 0
                  },
                  {
                    name: 'shadow-size',
                    value: 0
                  },
                  {
                    name: 'shadow-color',
                    value: '#000'
                  },
                  {
                    name: 'shadow-inset',
                    value: false
                  },
                  {
                    name: 'flexbox',
                    value: false
                  },
                  {
                    name: 'flex-direction',
                    value: 'row'
                  },
                  {
                    name: 'flex-wrap',
                    value: 'wrap'
                  },
                  {
                    name: 'justify-content',
                    value: 'flex-start'
                  }
                ]
              },
              style: [
                {
                  name: 'background',
                  value: '#3a3b3c'
                },
                {
                  name: 'padding-top',
                  value: '3'
                },
                {
                  name: 'padding-right',
                  value: '8'
                },
                {
                  name: 'padding-bottom',
                  value: '3'
                },
                {
                  name: 'padding-left',
                  value: '8'
                },
                {
                  name: 'margin-top',
                  value: '2'
                },
                {
                  name: 'margin-right',
                  value: '6'
                },
                {
                  name: 'margin-bottom',
                  value: '0'
                },
                {
                  name: 'margin-left',
                  value: '0'
                },
                {
                  name: 'text-align',
                  value: 'left'
                },
                {
                  name: 'border-position',
                  value: ''
                },
                {
                  name: 'border-width',
                  value: '0'
                },
                {
                  name: 'border-style',
                  value: 'solid'
                },
                {
                  name: 'border-color',
                  value: '#ffffff00'
                },
                {
                  name: 'border-top-left-radius',
                  value: '30'
                },
                {
                  name: 'border-top-right-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-left-radius',
                  value: '30'
                },
                {
                  name: 'border-bottom-right-radius',
                  value: '30'
                },
                {
                  name: 'shadow-x',
                  value: 0
                },
                {
                  name: 'shadow-y',
                  value: 0
                },
                {
                  name: 'shadow-blur',
                  value: 0
                },
                {
                  name: 'shadow-size',
                  value: 0
                },
                {
                  name: 'shadow-color',
                  value: '#000'
                },
                {
                  name: 'shadow-inset',
                  value: false
                },
                {
                  name: 'flexbox',
                  value: false
                },
                {
                  name: 'flex-direction',
                  value: 'row'
                },
                {
                  name: 'flex-wrap',
                  value: 'wrap'
                },
                {
                  name: 'justify-content',
                  value: 'flex-start'
                }
              ],
              hoverStyle: [],
              content: 'New Block 28',
              open: false,
              selected: false,
              editing: false,
              children: [
                {
                  id: 33,
                  name: 'New Icon 33',
                  type: {
                    id: 5,
                    name: 'Icon',
                    defaultStyle: []
                  },
                  style: [
                    {
                      name: 'font-size',
                      value: '14'
                    },
                    {
                      name: 'font-weight',
                      value: '600'
                    },
                    {
                      name: 'color',
                      value: '#fff'
                    },
                    {
                      name: 'margin-top',
                      value: 0
                    },
                    {
                      name: 'margin-right',
                      value: 0
                    },
                    {
                      name: 'margin-bottom',
                      value: 0
                    },
                    {
                      name: 'margin-left',
                      value: 0
                    }
                  ],
                  hoverStyle: [],
                  content: 'caret-down',
                  open: false,
                  selected: false,
                  editing: false,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }];
  }
  nextId = 40;

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
    // delete children too
    this.Blocks = filterDeep(this.Blocks, (value) => {
      if (value.id !== block.id) {
        return true;
      }
      return false;
    }, { childrenPath: ['children'], onFalse: { skipChildren: true } });
  }

  duplicateBlock(block: Block) {
    const found = findDeep(this.Blocks, (value, key) => value.id === block.id, { childrenPath: ['children'] }) as any;
    let child = JSON.parse(JSON.stringify(block));
    if (found.context.depth > 1) {
      child.id = this.nextId;
      child = mapValuesDeep(child, (value) => {
        value.id = this.nextId;
        this.nextId++;
        return value;
      }, { childrenPath: ['children'] });
      found.parent.children = [...found.parent.children, child];
      this.updateBlock(found.parent);
    } else {
      child = mapValuesDeep(child, (value) => {
        value.id = this.nextId;
        this.nextId++;
        return value;
      }, { childrenPath: ['children'] });
      this.newRootBlock(child);
    }
  }

  newBlock(typeID: number, parent: Block): void {
    const defaultStyle = JSON.parse(JSON.stringify(this.Types[typeID - 1].defaultStyle));
    const newBlock = {
      id: this.nextId,
      name: 'New ' + this.Types[typeID - 1].name + ' ' + this.nextId,
      type: { ...this.Types[typeID - 1] },
      style: defaultStyle,
      hoverStyle: [],
      content: typeID === 5 ? 'question' : 'New ' + this.Types[typeID - 1].name + ' ' + this.nextId,
      open: false,
      selected: false,
      editing: false,
      children: []
    };
    parent.children = [...parent.children, newBlock];
    this.updateBlock(parent);
    this.nextId++;
  }

  newRootBlock(block?: Block) {
    if (block) {
      this.Blocks = [...this.Blocks, block];
    } else {
      const defaultStyle = JSON.parse(JSON.stringify(this.Types[0].defaultStyle));
      const newBlock = {
        id: this.nextId,
        name: 'New ' + this.Types[0].name + ' ' + this.nextId,
        type: { ...this.Types[0] },
        style: defaultStyle,
        hoverStyle: [],
        content: 'New Block ' + this.nextId,
        open: false,
        selected: false,
        editing: false,
        children: []
      };
      this.Blocks = [...this.Blocks, newBlock];
      this.nextId++;
    }
  }

  allIds(block) {
    const finalVals = [];
    const vals = mapDeep(this.Blocks, (value) => {
      if (value.children.length > 0 && value.id !== 1) {
        return `${value.id}`;
      }
    }, { childrenPath: ['children'] });
    vals.forEach(x => {
      if (x) {
        finalVals.push(x);
      }
    });
    // console.log(block);
    if (block && block.children.length > 0) {
      finalVals.push('1');
    }
    return finalVals;
  }

  // HTML & CSS
  getHtmlRec(entry: Block) {
    if (entry.children.length === 0) {
      if (entry.type.id === 1) {
        return `<div name="${entry.name}" id="id${entry.id}"></div>`;
      } else if (entry.type.id === 2) {
        return `<p name="${entry.name}" id="id${entry.id}">${entry.content}</p>`;
      } else if (entry.type.id === 3) {
        return `<img name="${entry.name}" id="id${entry.id}">`;
      } else if (entry.type.id === 4) {
        return `<button type="button" name="${entry.name}" id="id${entry.id}">${entry.content}</button>`;
      } else if (entry.type.id === 5) {
        return `<img src="/icons/${entry.content}.svg" name="${entry.name}" id="id${entry.id}">`;
      }
    }
    if (entry.type.id === 1) {
      let val = '';
      entry.children.forEach(child => val += this.getHtmlRec(child));
      return `<div name="${entry.name}" id="id${entry.id}">${val}</div>`;
    } else {
      return '';
    }
  }

  toCssStyle(block: Block) {
    const css = {};
    const shadow = {};
    block.style.forEach(b => {
      if (b.name === 'shadow-x' || b.name === 'shadow-y' || b.name === 'shadow-blur'
        || b.name === 'shadow-size' || b.name === 'shadow-color' || b.name === 'shadow-inset') {
        shadow[b.name] = isNaN(b.value) || typeof b.value === 'boolean' ? b.value : b.value + 'px';
      } else if (b.name === 'flexbox') {
        // tslint:disable-next-line:no-string-literal
        css['display'] = b.value ? 'flex' : 'block';
      } else if (b.name === 'border-position') {
        return;
      } else if (b.name === 'border-width' || b.name === 'border-style' || b.name === 'border-color') {
        const position = block.style.find(x => x.name === 'border-position');
        if (position) {
          const parsedBorder = position.value === '' ? 'border' : 'border-' + position.value;
          css[b.name.replace('border', parsedBorder)] = isNaN(b.value) ? b.value : b.value + 'px';
        }
      } else {
        css[b.name] = isNaN(b.value) || b.name === 'font-weight' ? b.value : b.value + 'px';
      }
    });
    // tslint:disable-next-line:max-line-length
    css['box-shadow'] = `${shadow['shadow-inset'] ? 'inset' : ''} ${shadow['shadow-x']} ${shadow['shadow-y']} ${shadow['shadow-x']} ${shadow['shadow-blur']} ${shadow['shadow-color']}`;
    return css;
  }

  getHtml() {
    console.log(this.getHtmlRec(this.Blocks[0]));
  }

  getCss() {
    let css = '';
    forEachDeep(this.Blocks, (value: Block) => {
      css += `#id${value.id} ${JSON.stringify(this.toCssStyle(value)).replace(/"/g, '').replace(/,/g, ';')}\n`;
    }, { childrenPath: ['children'] });
    console.log(css);
  }
}

/*
TODO
icon: margin, color, icon preview, icon search
picture: margin, border, border radius
block: border position
layers: edit the name
*/
