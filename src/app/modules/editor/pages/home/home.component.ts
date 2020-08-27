import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Block } from 'src/app/shared/models/block.model';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile = false;
  selectedBlock = null;
  leftCollapsed = false;

  constructor(private data: StorageService, private clipboard: Clipboard) { }

  get Blocks() {
    return this.data.Blocks;
  }

  ngOnInit(): void {
    this.selectedBlock = this.data.selectedBlock();
  }

  setMobile(): void {
    this.isMobile = true;
  }

  setDesktop(): void {
    this.isMobile = false;
  }

  onSelectionChanged(block: Block) {
    this.selectedBlock = block;
  }

  newBlock() {
    this.data.newRootBlock();
  }

  copyJson() {
    this.clipboard.copy(JSON.stringify(this.Blocks));
  }

}
