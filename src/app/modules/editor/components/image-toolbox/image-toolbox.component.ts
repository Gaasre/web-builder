import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-image-toolbox',
  templateUrl: './image-toolbox.component.html',
  styleUrls: ['./image-toolbox.component.scss']
})
export class ImageToolboxComponent implements OnInit {

  @Input() selectedBlock: Block;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  editContent(content: string) {
    this.selectedBlock.content = content;
    this.storage.updateBlock(this.selectedBlock);
  }

  getStyle(name: string) {
    const style = this.selectedBlock.style.find(x => x.name === name);
    return style ? style.value : null;
  }

  updateStyle(name: string, value: string): void {
    const found = this.selectedBlock.style.find(x => x.name === name);
    if (found) {
      found.value = value;
    }
    this.storage.updateBlock(this.selectedBlock);
  }

}
