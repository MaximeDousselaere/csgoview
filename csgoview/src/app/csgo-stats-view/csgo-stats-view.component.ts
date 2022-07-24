import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileStatsService } from '../core/services/profile-stats.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-csgo-stats-view',
  templateUrl: './csgo-stats-view.component.html',
  styleUrls: ['./csgo-stats-view.component.scss']
})
export class CsgoStatsViewComponent implements OnInit {

  // vars
  searchPlayerFormGroup! : FormGroup // basically the formgroup 
  isLoadingData : boolean = false; // spinner till we don't have the data
  doWeFoundTheBoy! : boolean; // use to know if we found the boy we search for
  dataRecieved! : any; // the data we got

  constructor(private _profileStatsService : ProfileStatsService,
              private _formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.searchPlayerFormGroup = this._formBuilder.group({
      searchText : [""]
    });
  }

  // On search player form submit
  onSearchFormSubmit(){
    let dude = this.searchPlayerFormGroup.controls['searchText'].value;
    if(dude != ""){
      this.searchPlayer(dude);
    }
  }

  // calls the service
  searchPlayer(id : string){
    this.isLoadingData = true;
    this._profileStatsService.getProfileStats(id)
    .pipe(finalize(() => {this.isLoadingData = false;}))
    .subscribe(
      (data : any) => {
        console.log(data);
        this.dataRecieved = data;
        if(data.errors){
          this.doWeFoundTheBoy = false;
          return;
        }
        this.doWeFoundTheBoy = true;
      }
    );
  }

}
