import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { log } from 'util';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnInit {

  @Input() photoUrl: string;

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
      baseFont: "12px Montserrat",
      line: 20
    }

    let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    let canvas = this.canvasRef.nativeElement;

    let photo = this.photo.nativeElement;

    photo.onload = function() {
      ctx.drawImage(photo, 200, 0, 200, 600, 400, 0, 200, 600);
    }

    ctx.fillStyle = '#005166';
    ctx.fillRect(0, 0, d.width, d.height);

    // Nome, idade
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '34px Montserrat';
    ctx.fillText("Dandara,", d.padding_x, d.padding_y);
    const nameWidth = ctx.measureText("Dandara,");
    ctx.font = '24px Montserrat';
    ctx.fillText("21", nameWidth.width + 10, d.padding_y + 5);

    // Ocupação
    ctx.font = d.baseFont;
    ctx.fillText("Estudante", d.padding_x, d.padding_y + (d.line * 3));
    ctx.fillText("Sou a primeira da familia a me formar", d.padding_x, d.padding_y + (d.line * 4));

    // Criação
    ctx.font = '18px Montserrat';
    ctx.fillText("Criada(o) por", d.padding_x, d.padding_y + (d.line * 6) + 5);
    ctx.font = d.baseFont;
    ctx.fillText("Dona de casa e policial militar", d.padding_x, d.padding_y + (d.line * 8));

    // Mudança
    ctx.font = '18px Montserrat';
    ctx.fillText("Minha educação foi transformada com", d.padding_x, d.padding_y + (d.line * 10) - 5);
    ctx.font = d.baseFont;
    for (let index = 0; index < 8; index++) {
      ctx.fillText("Criação do ENEM e SiSu", d.padding_x, d.padding_y + (d.line * (11 + index)));
    }
  }

}
