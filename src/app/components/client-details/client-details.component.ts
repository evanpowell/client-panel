import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  isBalanceUpdateInputShown: boolean = false;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params.id;
    //Get client
    this.clientService.getClient(this.id)
      .subscribe(client => {
        if (client != null) {
          if (client.balance > 0) {
            this.hasBalance = true;
          }
        }
        this.client = client;
      });
  }

  onDeleteClick() {

  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance Updated', {
      cssClass: 'alert-success',
      timeout: 4000
    });
  }
}
