import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig  } from '../../../assets/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfileStatsService {

  constructor(private http : HttpClient, ) { }

  getProfileStats(id : string){
    return this.http.get(`http://localhost:8000/get-profile-stats/${id}`);
  }
}

