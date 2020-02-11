// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkloadComponent } from './workload.component';
import { WorkloadRoutingModule } from './workload.routing.module'
import { WorkloadService } from './workload-services';
import { RouterModule } from '@angular/router';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    WorkloadRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    WorkloadComponent
  ],
  providers: [WorkloadService]
})
export class WorkloadModule { }
