import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkloadModel } from '../../model/workload.model';

@Injectable()
export class WorkloadService {
  private apiUrl = environment.apiURL;
  constructor(private router: Router) {
  }

  protected getCommonOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  getWorkload(): WorkloadModel {
    return this.testData;
    // return this.httpClient.get(`${this.apiUrl}/login/`,data, this.getCommonOptions());
  }

  testData: WorkloadModel =
    {
      "Year": "2020",
      "Month": "02",
      "WorkloadData": [
        {
          "Id": 1,
          "Name": "Gonzalez",
          "WorkLoad":[
          {
            Day: "1",
            Weight: 100,
          },
          {
            Day:"2",
            Weight:125,
          },
          {
            Day:"3",
            Weight:0,
          },
          {
            Day:"4",
            Weight:80,
          },
          {
            Day: "5",
            Weight: 100,
          },
          {
            Day:"6",
            Weight:155,
          },
          {
            Day:"7",
            Weight:90,
          },
          {
            Day:"8",
            Weight:95,
          },
          {
            Day: "9",
            Weight: 100,
          },
          {
            Day:"10",
            Weight:115,
          },
          {
            Day:"11",
            Weight:88,
          },
          {
            Day:"12",
            Weight:80,
          },
          {
            Day: "13",
            Weight: 100,
          },
          {
            Day:"14",
            Weight:125,
          },
          {
            Day:"15",
            Weight:70,
          },
          {
            Day:"16",
            Weight:140,
          }
        ],
        },
        {
          "Id": 1,
          "Name": "Heisenberg",
          "WorkLoad":[
            {
              Day: "1",
              Weight: 100,
            },
            {
              Day:"2",
              Weight:125,
            },
            {
              Day:"3",
              Weight:0,
            },
            {
              Day:"4",
              Weight:80,
            },
            {
              Day: "5",
              Weight: 100,
            },
            {
              Day:"6",
              Weight:150,
            },
            {
              Day:"7",
              Weight:0,
            },
            {
              Day:"8",
              Weight:60,
            },
            {
              Day: "9",
              Weight: 100,
            },
            {
              Day:"10",
              Weight:75,
            },
            {
              Day:"11",
              Weight:90,
            },
            {
              Day:"12",
              Weight:100,
            }
          ]
        }
      ]
    }
}




