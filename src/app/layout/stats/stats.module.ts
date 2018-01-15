import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, StatsRoutingModule, PageHeaderModule],
    declarations: [StatsComponent]
})
export class StatsModule {}
