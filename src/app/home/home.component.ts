import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../service/image-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(private imageService: ImageApiService) { }

  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        order: [1, 'DESC'], // Sort by last uploadDate
        ajax: (dataTablesParameters: any, callback) => this.imageService.getDataTable(dataTablesParameters).subscribe((res) => {
          console.log(dataTablesParameters);
          console.log( res.json());
          callback({
            data: res.json().data,
            draw: res.json().draw,
            error: res.json().error,
            recordsFiltered: res.json().recordsFiltered,
            recordsTotal: res.json().recordsTotal
          });
        }),
        columns: [{ data: 'url' }, { data: 'uploadDate' }, { data: 'person.personId'},
          {data: 'person.name'}, {data: 'person.surname'}, {data: 'person.gender'}, {data: 'person.age'}],
        rowCallback: (row: Node, data: any[] | Object, index: number) => {
            let node = row.firstChild;
            const url = node.textContent;
            node.textContent = '';
            const temp = new Image();
            node.appendChild( temp);
            this.imageService.image(url).subscribe((res) => {
              const readerBest = new FileReader();
              readerBest.readAsDataURL(res.blob()); // read file as data url
              readerBest.onload = ((e) => { // called once readAsDataURL is completed
                temp.src = readerBest.result;
              });
            });
            node = node.nextSibling;
            node.textContent = '' + new Date(Number(node.textContent));
            node = node.nextSibling;
            node = node.nextSibling;
            node = node.nextSibling;
            node = node.nextSibling;
            node.textContent = node.textContent ? 'Male' : 'Female';
            return row;
        }
    };

  }

}
