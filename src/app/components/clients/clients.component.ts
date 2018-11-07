import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;
  isLoaded: boolean = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients()
      .subscribe(clients => {
        this.clients = clients
        this.getTotalOwed();
        this.isLoaded = true;
      });
  }

  private getTotalOwed() {
    this.totalOwed = this.clients.reduce((sum, { balance }) => {
      return sum + Number(balance);
    }, 0);
  }
}
