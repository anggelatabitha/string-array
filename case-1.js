const namaLama = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const bersihinNama = namaLama.trim();

const arrayNama = bersihinNama.split(",");

const namaBaru = arrayNama.map(function(nama) {
    return nama.trim().toLowerCase();
});

const result = namaBaru.join(" | ");

console.log(result);