import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Block } from 'src/app/shared/models/block.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile = false;
  selectedBlock = null;

  constructor(private data: StorageService) { }

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

}
