import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PoolStatsService } from '../../shared/services/pool-stats.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
    animations: [routerTransition()]
})
export class StatsComponent implements OnInit {
    poolStats;
    poolHashRateFormatted;
    networkHashRateFormatted;

    constructor(private poolStatsService: PoolStatsService) {
    }

    ngOnInit() {
        this.poolStatsService.getPoolStats().subscribe(p=> {
            this.poolStats = p;
            this.poolHashRateFormatted = this.poolStatsService.toSI(p.hashRate * environment.poolHashRateScale, 6, 'H/s');
            this.networkHashRateFormatted = this.poolStatsService.toSI(p.networkStats.hashRate, 6, 'H/s');
        });
        
    }
}
