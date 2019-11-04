import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbProgressBarModule, NbInputModule } from '@nebular/theme';
import { SmartTableComponent } from './smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BkLineChartModule } from '@uibakery/kit';

@NgModule({
  declarations: [SmartTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbProgressBarModule,
    Ng2SmartTableModule,
    BkLineChartModule,
    NbInputModule
  ],
  exports: [NbCardModule, NbButtonModule, NbIconModule, NbProgressBarModule, SmartTableComponent, Ng2SmartTableModule, BkLineChartModule, NbInputModule]
})
export class SharedModule { }
