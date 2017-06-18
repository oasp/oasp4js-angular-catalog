import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  columns: ITdDataTableColumn[] = [
      { name: 'food.name',  label: 'Dessert (100g serving)', sortable:true },
      { name: 'food.type', label: 'Type' },
      { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable:true },
      { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT, sortable:true },
      { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
      { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
      { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
      { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
      { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
    ];

    basicData: any[] = [
      {
        'id': 1,
        'food': {
          'name': 'Frozen yogurt',
          'type': 'Ice cream',
        },
        'calories': 159.0,
        'fat': 6.0,
        'carbs': 24.0,
        'protein': 4.0,
        'sodium': 87.0,
        'calcium': 14.0,
        'iron': 1.0,
        'comments': 'I love froyo!',
      }, {
        'id': 2,
        'food': {
          'name': 'Ice cream sandwich',
          'type': 'Ice cream',
        },
        'calories': 237.0,
        'fat': 9.0,
        'carbs': 37.0,
        'protein': 4.3,
        'sodium': 129.0,
        'calcium': 8.0,
        'iron': 1.0,
      }, {
        'id': 3,
        'food': {
          'name': 'Eclair',
          'type': 'Pastry',
        },
        'calories':  262.0,
        'fat': 16.0,
        'carbs': 24.0,
        'protein':  6.0,
        'sodium': 337.0,
        'calcium':  6.0,
        'iron': 7.0,
      },
    ];

  constructor(private _dialogService: TdDialogService) {}

  openPrompt(row: any, name: string): void {
    this._dialogService.openPrompt({
      message: 'Enter comment?',
      value: row[name],
    }).afterClosed().subscribe((value: any) => {
      if (value !== undefined) {
        row[name] = value;
      }
    });
  }

  ngOnInit() {
  }

}
