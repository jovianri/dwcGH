let paises = [
    { 'pais': 'España', 'codigo': 34, 'ciudades': ['Valencia', 'Madrid', 'Sevilla'] },
    { 'pais': 'EEUU', 'codigo': 1, 'ciudades': ['Stanford', 'Nueva York', 'Filadelfia'] }
];

paises.map(function(n) {
    console.log(n.pais);
    console.log(n.codigo);
    console.log(n.ciudades.map(function(m){console.log(m);}));
});
