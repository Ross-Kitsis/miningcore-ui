import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PoolStatsService } from '../../shared/services/pool-stats.service'

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
    animations: [routerTransition()]
})
export class StatsComponent implements OnInit {
    poolStats;

    constructor(private poolStatsService: PoolStatsService) {
    }

    ngOnInit() {
        this.poolStats = this.poolStatsService.getPoolStats().subscribe(p=>this.poolStats = p);
    }
}
