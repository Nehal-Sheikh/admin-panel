import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', RouterLinkActive: ['/'] },
      { label: 'User', icon: 'pi pi-user', routerLink: ['/user-list'] },
      { label: 'Product', icon: 'pi pi-briefcase', routerLink: ['/user-list'] }
    ]; 
  }
}
