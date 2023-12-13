import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeMaterialTableComponent } from './cade-material-table.component';

describe('CadeMaterialTableComponent', () => {
  let component: CadeMaterialTableComponent;
  let fixture: ComponentFixture<CadeMaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadeMaterialTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial input properties', () => {
    expect(component.displayedColumns).toEqual([]);
    expect(component.dataSource).toEqual([]);
  });

  it('should filter out excluded columns', () => {
    component.displayedColumns = [
      'borrowerName',
      'date',
      'select',
      'loanStatus'
    ];
    expect(component.getDisplayedColumns()).toEqual(['borrowerName', 'date']);
  });

  it('should return correct class for status', () => {
    expect(component.getStatusClass('Active Loan')).toEqual('active-loan');
    expect(component.getStatusClass('')).toEqual('');
  });

  it('should return display name for columns', () => {
    expect(component.getColumnDisplayName('borrowerName')).toEqual(
      'Borrower Name'
    );
    expect(component.getColumnDisplayName('date')).toEqual(
      'Date/Time - Updated'
    );
  });

  it('should emit selected element', () => {
    spyOn(component.selectChanged, 'emit');
    const mockElement = { id: 1, name: 'Test' };
    component.onSelectChange(mockElement);
    expect(component.selectChanged.emit).toHaveBeenCalledWith(mockElement);
  });

  it('should not emit if selected element is null', () => {
    spyOn(component.selectChanged, 'emit');
    component.onSelectChange(null);
    expect(component.selectChanged.emit).not.toHaveBeenCalled();
  });
});
