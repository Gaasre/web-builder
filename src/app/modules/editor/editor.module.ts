import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayersComponent } from './components/layers/layers.component';
import { LayerComponent } from './components/layer/layer.component';
import { LayersViewComponent } from './components/layers-view/layers-view.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BlockToolboxComponent } from './components/block-toolbox/block-toolbox.component';
import { ImageToolboxComponent } from './components/image-toolbox/image-toolbox.component';
import { TextToolboxComponent } from './components/text-toolbox/text-toolbox.component';
import { IconToolboxComponent } from './components/icon-toolbox/icon-toolbox.component';


@NgModule({
  declarations: [HomeComponent, LayersComponent, LayerComponent,
    LayersViewComponent, BlockToolboxComponent, ImageToolboxComponent,
     TextToolboxComponent,
     IconToolboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzSelectModule,
    NzCheckboxModule,
    NzPopoverModule,
    DragDropModule,
    NzInputNumberModule,
    NzDividerModule,
    SharedModule
  ]
})
export class EditorModule { }
