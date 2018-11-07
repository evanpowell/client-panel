import { Component, OnInit, ViewChild } from '@angular/core';

import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  isBalanceDisabledOnAdd: boolean = true;
  @ViewChild('clientForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.isBalanceDisabledOnAdd) {
      value.balance = 0;
    }

    if(!valid) {

    } else {
      // Add new client
      // Show message
      // Redirect to dash
    }
  }
}
