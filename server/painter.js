const Canvas = require('canvas');

exports.draw = function(post) {

  return new Promise(function(resolve, reject) {
    const d = {
      width: 600,
      height: 600,
      padding_x: 5,
      padding_y: 5,
      baseFont: "12px Montserrat"
    }
    var
      canvas = new Canvas(d.width, d.height),
      ctx = canvas.getContext('2d'),
      line = 20;

    // // Quadro geral
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#005166';
    ctx.fillRect(0, 0, d.width, d.height);

    // Nome, idade
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '34px Montserrat bold';
    ctx.fillText("Dandara,", d.padding_x, d.padding_y);
    var nameWidth = ctx.measureText("Dandara,");
    ctx.font = '24px Montserrat';
    ctx.fillText("21", nameWidth.width + 10, d.padding_y + 5);

    // Ocupação
    ctx.font = d.baseFont;
    ctx.fillText("Estudante", d.padding_x, d.padding_y + (line * 3));
    ctx.fillText("Sou a primeira da familia a me formar", d.padding_x, d.padding_y + (line * 4));

    // Criação
    ctx.font = '18px Montserrat';
    ctx.fillText("Criada(o) por", d.padding_x, d.padding_y + (line * 6) + 5);
    ctx.font = d.baseFont;
    ctx.fillText("Dona de casa e policial militar", d.padding_x, d.padding_y + (line * 8));

    // Mudança
    ctx.font = '18px Montserrat';
    ctx.fillText("Minha educação foi transformada com", d.padding_x, d.padding_y + (line * 10) - 5);
    ctx.font = d.baseFont;
    for (let index = 0; index < 8; index++) {
      ctx.fillText("Criação do ENEM e SiSu", d.padding_x, d.padding_y + (line * (11 + index)));
    }

    // Rodapé
    
    canvas.toDataURL('image/png', function(err, png) {
      if (err) reject('Erro ao criar imagem');

      resolve(png);
    });
  });

}