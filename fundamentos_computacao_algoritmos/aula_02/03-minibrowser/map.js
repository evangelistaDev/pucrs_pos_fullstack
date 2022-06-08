//TDD - Test Driven Development

var novoMapa = new Map();

class HistoryMap {

};

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL',{ title: 'Título 1', url: 'Url do Site 1'});
novoMapa.set('11/11/2011 - 23:30 - URL',{ title: 'Título 2', url: 'Url do Site 2'});
novoMapa.set('11/11/2011 - 23:30 - URL',{ title: 'Título 3', url: 'Url do Site 3'});
novoMapa.set('11/11/2011 - 23:30 - URL',{ title: 'Título 4', url: 'Url do Site 4'});
novoMapa.set('11/11/2011 - 23:31 - URL',{ title: 'Título 5', url: 'Url do Site 5'});
novoMapa.set('11/11/2011 - 23:31 - URL',{ title: 'Título 6', url: 'Url do Site 6'});
novoMapa.set('11/11/2011 - 23:32 - URL',{ title: 'Título 7', url: 'Url do Site 7'});


// Sempre retorna o valor mais recente da chave, caso esta se repita;
var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado);
var resultado = novoMapa.get('11/11/2011 - 23:31 - URL');
console.log(resultado);
var resultado = novoMapa.get('11/11/2011 - 23:32 - URL');
console.log(resultado);