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

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, LayersComponent, LayerComponent, LayersViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    SharedModule
  ]
})
export class EditorModule { }
