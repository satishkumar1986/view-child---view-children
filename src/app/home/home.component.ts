import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  //@ViewChild(CounterComponent) contComp:CounterComponent
  @ViewChildren(CounterComponent) contComp:QueryList<CounterComponent>

  //@ViewChild(ColorDirective) ColorDir:ColorDirective
  @ViewChildren(ColorDirective) ColorDir:QueryList<ColorDirective>


  //@ViewChild('input') el:ElementRef;
  //@ViewChild('btn', {static:true}) elBtn:ElementRef;

  @ViewChildren('input') el:QueryList<ElementRef>
  @ViewChildren('btn') elBtn:QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
    //this.elBtn.nativeElement.style.background="red" 
  }

  increase() {
    //this.contComp.increaseByOne()
    //this.contComp.forEach(list=>list.increaseByOne())
    //this.contComp.first.increaseByOne()
    //this.contComp.last.increaseByOne()
    //this.contComp.find(fd=>fd.name==='two').increaseByOne()
    this.contComp.filter(fl=>fl.name=='three').forEach(list=>list.increaseByOne())
  }

  decrease() {
    //this.contComp.decreaseByOne()
    //this.contComp.forEach(list=>list.decreaseByOne())
    //this.contComp.first.decreaseByOne()
    //this.contComp.last.decreaseByOne()
    //this.contComp.find(fd=>fd.name==='two').decreaseByOne()
    this.contComp.filter(fl=>fl.name==='three').forEach(list=>list.decreaseByOne())
  }

  onChange(col){
    //this.ColorDir.changeBackground(col)
    //this.ColorDir.forEach(list=>list.changeBackground(col))
    //this.ColorDir.first.changeBackground(col)
    //this.ColorDir.last.changeBackground(col)
    //this.ColorDir.find(fd=>fd.name==='two').changeBackground(col)
    this.ColorDir.filter(fl=>fl.name==='two').forEach(list=>list.changeBackground(col))
    
  }

  ngAfterViewInit(){
    //this.el.nativeElement.style.background='yellow';
    this.el.forEach(list=>list.nativeElement.style.background='yellow')
    //this.el.first.nativeElement.style.background='yellow'
    //this.el.last.nativeElement.style.background='yellow'

    //this.elBtn.nativeElement.style.background="red" 
    this.elBtn.forEach(list=>list.nativeElement.style.background='red')
    //this.elBtn.first.nativeElement.style.background='red'
    //this.elBtn.last.nativeElement.style.background='red'
  }


}
