import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { log } from 'util';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('photo') photo: ElementRef;
  png: string;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    const d = {
      width: 600,
      height: 600,
      padding_x: 5,
      padding_y: 50,
      baseFont: "12px Montserrat"
    }

    let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    let canvas = this.canvasRef.nativeElement;
    let photo = this.photo.nativeElement;

    // ctx.drawImage(photo, 0, 0);
    
    ctx.fillStyle = '#005166';
    ctx.fillRect(0, 0, d.width, d.height);

    // Nome, idade
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '34px Montserrat';
    ctx.fillText("Dandara,", d.padding_x, d.padding_y);
    const nameWidth = ctx.measureText("Dandara,");
    ctx.font = '24px Montserrat';
    ctx.fillText("21", nameWidth.width + 10, d.padding_y + 5);

    this.png = canvas.toDataURL('image/png');
  }

}
