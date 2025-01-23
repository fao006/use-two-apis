import { Component } from '@angular/core';
import {productsList} from '../usemock/usemock.mock'

@Component({
  selector: 'app-usemock',
  templateUrl: './usemock.component.html',
  styleUrls: ['./usemock.component.css'],
})
export class UsemockComponent {
  productsList = productsList;
}
