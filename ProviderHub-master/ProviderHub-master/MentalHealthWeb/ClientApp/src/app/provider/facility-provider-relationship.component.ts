import { Component, OnInit, Input } from '@angular/core';
import { MentalHealthService } from '../service/mental.health.service';
import { FormGroup, FormControl } from "@angular/forms";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { NavbarService } from '../service/navbarservice';

@Component({
  selector: 'facility-provider-relationship',
  templateUrl: './facility-provider-relationship.component.html',
  styleUrls: ['./facility-provider-relationship.component.css']
})
export class FacilityProviderRelationshipComponent  implements OnInit {
  facilityProviderRelationship: any = [];
  provider: any = [];
  facility: any = [];
  facilityAddress: any = [];

  constructor(private mentalHealthService: MentalHealthService) {
   
  }
  ngOnInit() {
    this.mentalHealthService.getFacilityProviderRelationshipData().map(results => {
      this.facilityProviderRelationship = results;
      if (results.provider == undefined) {
        this.provider = results;
      }
      else {
        this.provider = results.provider;
        this.facility = results.facility;
        this.facilityAddress = results.facility.facilityAddress;
      }

    });
  }

}
