import { Component, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../post';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnChanges {

  @Input() photoUrl: string;
  @Input() post: Post;

  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('logo') logo: ElementRef;
  png: string;

  constructor(
    private http: Http
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.post !== 'undefined' &&
        typeof changes.post.currentValue !== 'undefined') {
      
      const d = {
        width: 600,
        height: 600,
        padding_x: 20,
        padding_y: 20,
        fontA: 'bold 34px Montserrat',
        fontB: 'bold 18px Montserrat',
        fontC: '14px Montserrat',
        fontD: 'bold 14px Montserrat',
        line: 20
      }

      let canvas = this.canvasRef.nativeElement;
      let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
      ctx.textBaseline = 'top';

      let photo = this.photo.nativeElement;
      let logo = this.logo.nativeElement;

      // photo.onload = function() {
      //   console.log('carregou img');
        ctx.drawImage(photo, 200, 0, 200, 600, 400, 0, 200, 600);
      // }

      ctx.fillStyle = '#005166';
      ctx.fillRect(0, 0, 400, d.height);

      // Nome, idade
      ctx.fillStyle = '#FFFFFF'
      ctx.font = d.fontA;
      ctx.fillText(this.post.user.firstName, d.padding_x, d.padding_y);
      // const nameWidth = ctx.measureText(this.post.user.firstName + ',');
      // ctx.font = '24px Montserrat';
      // ctx.textBaseline = 'bottom';
      // ctx.fillText(this.post.user.age, nameWidth.width + 24, 60);
      
      // Ocupação
      ctx.textBaseline = 'top';
      ctx.font = d.fontC;
      ctx.fillText(this.post.occupation, d.padding_x, d.padding_y + (d.line * 2));
      if (this.post.firstGraduated) {
        ctx.fillText('Sou a(o) primeira(o) da família a me formar', d.padding_x, d.padding_y + (d.line * 4));
      }

      // Criação
      ctx.font = d.fontB;
      ctx.fillText('Criada(o) por', d.padding_x, d.padding_y + (d.line * 6) + 5);
      ctx.font = d.fontC;
      ctx.fillText(this.post.whoIAmToFamily, d.padding_x, d.padding_y + 5 + (d.line * 7));

      // Mudança
      ctx.font = d.fontB;
      ctx.fillText('Minha educação foi transformada com', d.padding_x, d.padding_y + (d.line * 10) - 5);
      ctx.font = d.fontC;
      for (let index = 0; index < this.post.eduPrograms.length; index++) {
        ctx.fillText(this.post.eduPrograms[index], d.padding_x, d.padding_y + (d.line * (11 + index)));
      }

      // Rodapé 
      ctx.fillStyle = '#fff';
      ctx.fillRect(d.padding_x, 450, 400 - (d.padding_x * 2), 24);

      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#005166';
      ctx.font = d.fontD;
      ctx.fillText('Quero isso para mais ' + this.post.user.firstName + 's', 200, 462);

      ctx.drawImage(logo, 190, 480);

      ctx.textBaseline = 'top';
      ctx.textAlign = 'right';
      ctx.fillStyle = '#87bbc8';
      ctx.fillText('Essa e outras histórias em', 400 - d.padding_x, 540);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('pramaisgente.info', 400 - d.padding_x, 540 + d.line);

      this.png = canvas.toDataURL("image/png"); 
    }
  }

  save() {
    try {
      const url = this.png.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
      window.open(url);
    } catch (e) {
        console.log("Storage failed: " + e);
    }
  }

}
