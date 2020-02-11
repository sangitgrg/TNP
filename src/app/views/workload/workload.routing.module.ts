import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkloadComponent } from './workload.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'workload'
      },
      {
        path: 'employee',
        component: WorkloadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkloadRoutingModule {}

