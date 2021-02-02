import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  @Output()
  public myOutput = new EventEmitter<MouseEvent>();

  public handleClick(event: MouseEvent) {
    this.myOutput.emit(event);
}

  title = 'Quotes';
  quoteCount= 0;
}
