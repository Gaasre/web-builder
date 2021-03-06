import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @Input() block: Block;
  @Output() selectionChanged = new EventEmitter<Block>();
  @ViewChild('contextmenu') elementRef;

  contextMenuOpen = false;
  isDragOver = false;
  isDragStart = false;
  dragBottom = false;
  dragTop = false;
  currentDrag: any;

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.closeContextMenu();
    }
  }

  get hasChildren(): boolean {
    return this.block.children.length > 0;
  }

  Toggle(): void {
    this.block.open = !this.block.open;
  }

  constructor(private data: StorageService) { }

  ngOnInit(): void {
  }

  selectBlock(block: Block): void {
    this.data.unselectBlocks();
    this.data.selectBlock(block);
    this.selectionChanged.emit(block);
  }

  onSelect(block: Block) {
    this.selectionChanged.emit(block);
  }

  onRightClick(target: Block) {
    this.contextMenuOpen = true;
    return false;
  }

  newBlock() {
    this.data.newBlock(1, this.block);
    this.closeContextMenu();
  }

  newText() {
    this.data.newBlock(2, this.block);
    this.closeContextMenu();
  }

  newPicture() {
    this.data.newBlock(3, this.block);
    this.closeContextMenu();
  }

  newButton() {
    this.data.newBlock(4, this.block);
    this.closeContextMenu();
  }

  newIcon() {
    this.data.newBlock(5, this.block);
    this.closeContextMenu();
  }

  deleteBlock(block: Block) {
    this.data.deleteBlock(block);
  }

  closeContextMenu() {
    this.contextMenuOpen = false;
  }

  drop(event: CdkDragDrop<Block[]>, block) {
    // tslint:disable-next-line:triple-equals
    if (event.previousContainer.id == block.id) {
      moveItemInArray(block.children, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        block.children,
        event.previousIndex,
        event.currentIndex);
    }
  }

  editStart(block: Block) {
    block.editing = true;
  }

  confirmEdit(block: Block) {
    block.editing = false;
  }

  duplicateBlock(block: Block) {
    this.data.duplicateBlock(block);
  }

  allIds() {
    return this.data.allIds(this.currentDrag);
  }

  changeDrag(e) {
    this.currentDrag = e.source.data;
  }
}
