import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileStatsService } from '../core/services/profile-stats.service';

@Component({
  selector: 'app-csgo-stats-view',
  templateUrl: './csgo-stats-view.component.html',
  styleUrls: ['./csgo-stats-view.component.scss']
})
export class CsgoStatsViewComponent implements OnInit {

  searchPlayerFormGroup! : FormGroup

  constructor(private _profileStatsService : ProfileStatsService,
              private _formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.searchPlayerFormGroup = this._formBuilder.group({
      searchText : [""]
    });
  }

  onSearchFormSubmit(){
    let dude = this.searchPlayerFormGroup.controls['searchText'].value;
    if(dude != ""){
      this.searchPlayer(dude);
    }
  }

  searchPlayer(id : string){
    this._profileStatsService.getProfileStats(id).subscribe(data => {console.log(data)})
  }

}
