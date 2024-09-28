import { Component, OnInit } from '@angular/core';
import { OfficeInfo } from '../../interfaces/office-info';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { FormsModule } from '@angular/forms';

const OFFICE_DATA: OfficeInfo[] = [
  {
    name: 'Enosis Solutions BD',
    location: 'https://maps.app.goo.gl/kyZbXzYAvcqZw6C68',
    link: 'https://www.enosisbd.com/',
    careerLink: 'https://enosisbd.pinpointhq.com/'
  },
  {
    name: 'Therap (BD) Ltd',
    location: 'https://maps.app.goo.gl/hRTvjgPe2QyP9pSRA',
    link: 'https://therapbd.com/',
    careerLink: 'https://therap.hire.trakstar.com/'
  },
  {
    name: 'Brain Station 23',
    location: 'https://maps.app.goo.gl/T8mVNFsqzDKiDUbu6',
    link: 'https://brainstation-23.com/',
    careerLink: 'https://brainstation-23.easy.jobs/'
  },
  {
    name: 'ReliSource Technologies Ltd.',
    location: 'https://maps.app.goo.gl/ZoRwWzQ7nWxuNvXi9',
    link: 'https://www.relisource.com/company/',
    careerLink: 'https://www.relisource.com/careers/'
  },
  {
    name: 'SELISE Digital Platforms',
    location: 'https://maps.app.goo.gl/3k62MQ6TbqTCg3gw6',
    link: 'https://selisegroup.com/',
    careerLink: 'https://selisegroup.com/join-the-team/'
  },
  {
    name: 'Kaz Software - Bangladesh',
    location: 'https://maps.app.goo.gl/cZbYvgg2tJqeQbGu8',
    link: 'https://kaz.com.bd/',
    careerLink: 'https://kaz.com.bd/ourwork2/category/job_post'
  },
  {
    name: 'TigerIT Bangladesh Ltd.',
    location: 'https://maps.app.goo.gl/645VYvJyT7PxNDhA7',
    link: 'https://www.tigerit.com/',
    careerLink: ''
  },
  {
    name: 'Ollyo',
    location: 'https://maps.app.goo.gl/xdx27Xh1eQ4G9zHNA',
    link: 'https://ollyo.com/',
    careerLink: 'https://ollyo.com/careers/'
  },
  {
    name: 'Optimizely Bangladesh',
    location: 'https://maps.app.goo.gl/1PCq1KRgZiowFQ1T7',
    link: 'https://www.optimizely.com/',
    careerLink: 'https://careers.optimizely.com/search/?optionsFacetsDD_country=BD'
  },
  {
    name: 'Cefalo Bangladesh Ltd.',
    location: 'https://maps.app.goo.gl/3ZzAk4VAEZMrXgiK6',
    link: 'https://www.cefalo.com/',
    careerLink: 'https://career.cefalo.com/#openJobs'
  },
  {
    name: 'Chaldal Ltd.',
    location: 'https://maps.app.goo.gl/aziJ4doeuoe4ohEy5',
    link: 'https://chaldal.com/',
    careerLink: 'https://chaldal.tech/'
  }
];


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

displayedColumns = ['name', 'location', 'link', 'careerLink' ];

  officeList: OfficeInfo[] = [];

  filterValue = '';
  filterValue$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.officeList = OFFICE_DATA;
    this.updateDataInit();
  }

  filterByName(value: string) {
    this.filterValue;
    this.filterValue$.next(value);
  }

  getFilteredValue() {
    return this.filterValue$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );
  }

  updateDataInit() {
    this.getFilteredValue().subscribe((result) => {
      this.officeList = OFFICE_DATA.filter(o => o.name.toLowerCase().includes(result.toLowerCase()));
    });
  }

}
