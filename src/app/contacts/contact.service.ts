import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  greating: string = "Hello";

  constructor() { }
}
