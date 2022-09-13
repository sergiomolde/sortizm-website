import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValorankService } from 'src/app/services/valorank.service';
import { exampledata } from '../../interfaces/exampleDataApi.interface';

@Component({
  selector: 'app-valorank',
  templateUrl: './valorank.component.html',
  styleUrls: ['./valorank.component.scss']
})
export class ValorankComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ValorankService) { }
  requestmade = '';
  example = true;
  exampledata = JSON.stringify(exampledata, undefined, 2);
  trueData: any = undefined;
  form = this.fb.group({
    language: ['', Validators.required],
    region: ['', [Validators.required]],
    riotname: ['', Validators.required],
    riotid: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  recieveData(){
    let formData: any = {
      language: `${this.form.get('language')?.value}`,
      region: `${this.form.get('region')?.value}`,
      riotname: `/${this.form.get('riotname')?.value}`,
      riotid: `/${this.form.get('riotid')?.value}`
    }
    this.requestmade = `http://www.sortizm-dev.es/valorank${this.form.get('language')?.value}${this.form.get('region')?.value}/${this.form.get('riotname')?.value}/${this.form.get('riotid')?.value}`
    this.apiService.getValorankData(formData).subscribe((resp) => {
    console.log(this.trueData);
    this.trueData = JSON.stringify(resp, undefined, 2);
    })

    
  }

}
