import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cade-material-table',
  templateUrl: './cade-material-table.component.html',
  styleUrls: ['./cade-material-table.component.scss']
})
export class CadeMaterialTableComponent implements OnInit {
  private readonly excludedColumns = ['select', 'loanStatus'];
  private readonly columnDisplayNames: { [key: string]: string } = {
    borrowerName: 'Borrower Name',
    date: 'Date/Time - Updated'
  };

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Output() selectChanged = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  getDisplayedColumns(): string[] {
    return this.displayedColumns.filter(
      (column) => !this.excludedColumns.includes(column)
    );
  }

  getStatusClass(status: string): string {
    return status?.toLowerCase().replace(/\s+/g, '-');
  }

  getColumnDisplayName(columnName: string): string {
    return this.columnDisplayNames[columnName] || columnName;
  }

  onSelectChange(selectedElement: any) {
    if (!selectedElement) return;

    this.selectChanged.emit(selectedElement);
  }
}
