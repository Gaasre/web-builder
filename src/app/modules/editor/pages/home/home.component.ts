import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile = false;

  constructor(private data: StorageService) { }

  get Blocks() {
    return this.data.Blocks;
  }

  ngOnInit(): void {
  }

  setMobile(): void {
    this.isMobile = true;
  }

  setDesktop(): void {
    this.isMobile = false;
  }

}
