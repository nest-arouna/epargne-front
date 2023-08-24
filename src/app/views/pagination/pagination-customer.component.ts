import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-customer',
  templateUrl: './pagination-customer.component.html',
  styleUrls: ['./pagination-customer.component.scss']
})
export class PaginationCustomerComponent implements OnChanges{
  @Input() totalList:number=0
  @Output() pageA :number=1
  nbItemPagination:any[]=[]
  @Output() page = new EventEmitter<number>();

  
ngOnChanges(changes: SimpleChanges): void {
  this.nbItemPagination =[]
  const size =Math.ceil(this.totalList/10)
 
    for (let i = 0; i < size; i++) {
      this.nbItemPagination.push(i+1);
      }

     
}
  onChoose(check: number){
  this.pageA=check 
  this.page.emit(check);
    
  }


}
