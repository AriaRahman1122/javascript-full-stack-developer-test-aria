// Algoritma mencari sub array 4 alamat berurut yang memiliki hasil perkalian terbesar

// Kamus
    const arr = [-6, 4, -5, 8, -10, 0, 8];
    var hasil;
    var y;
    var h = [];
    const arhas = [];
    const sub = [];

// Algoritma
    // Cetak Data Array
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

    // Logika pencarian sub array
        for (let i = 0; i < arr.length; i++) {
            hasil = 1;
            if (i <= (arr.length - 4)) {
                for (let j = i; j <= (i + 3); j++) {
                    hasil = hasil * arr[j];
                }
                arhas[i] = hasil;
            }
        }

    // Cetak Data Arhas
        console.log("\n")
        for (let i = 0; i < arhas.length; i++) {
            console.log(arhas[i]);
            h[i] = arhas[i];
        }

    // logika pencari hasil terbesar
        for (let i = 1; i <= arhas.length; i++) {
            for (let j = 0; j < i; j++) {
                if (arhas[j] >= arhas[i]) {
                    // pertukaran tempat
                    temp = arhas[j];
                    arhas[j] = arhas[i];
                    arhas[i] = temp;
                }
            }
        }

    // Pencarian letak sub array terbesar
        for (let i = 1; i <= h.length; i++) {
            if(h[i] ==  arhas[arr.length - 4]) {
                y = i;
            }
        }
    
        // Baca lagi array menggunakan posisi yang sudah diketahui untuk disimpan
            for (let i = 0; i < arr.length; i++) {
                if (i <= y) {
                    let p = 0;
                    for (let j = i; j <= (i + 3); j++) {
                      sub[p] = arr[j];
                      p++;
                    }
                }
            }
    
        // Hasil akhir
            console.log("\nThe Maximum Product Sub-Array is :");
            // Data Sub Array
            for (let i = 0; i < sub.length; i++) {
                console.log(sub[i]);
            }

            console.log("Having product : " + arhas[arr.length - 4]);
    
