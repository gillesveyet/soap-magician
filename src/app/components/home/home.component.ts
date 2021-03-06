import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    files: string[];

    constructor(public service: ElectronService) {
    }

    ngOnInit() {
        console.log('HomeComponent.ngOnInit');

        if (this.service.isElectron) {
            console.log(`args:[${process.argv}]`);

            this.files = this.service.fs.readdirSync(__dirname);
            console.log(`__dirname:${__dirname} Files=>`, this.files);
        }
    }

}
