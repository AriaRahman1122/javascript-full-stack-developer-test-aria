// Algoritma pembuatan array dengan konsep kombinasi

// Kamus
    const arr = [1,2,3];
    const com = [];

// Algoritma
    // Cetak Array Utama
        console.log("Array Utama : ");
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    console.log("\n");

    // Logika kombinasi
        for(let i = 0; i < arr.length; i++) {
            console.log("Rangkaian Kombinasi ke-" + (i+1));
            for(let j = i; j < arr.length; j++) {
                console.log(arr[i]);
                console.log(arr[j] + "\n");
            }
            console.log("\n");
        }