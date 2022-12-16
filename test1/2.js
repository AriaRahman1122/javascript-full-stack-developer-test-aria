// algoritma mengurutkan data

// Kamus
    const arr = [0,1,2,2,1,0,0,2,0,1,1,0];
    var temp;   // kursi kosong sementara (temporer)

// Algoritma
    // Cetak Array
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

    // Logika pengurutan data
        for(let i = 1; i <= arr.length; i++) {
            for (let j = 0; j < i; j++) {
                if(arr[j] > arr[i]) {
                    // pertukaran tempat
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }

    console.log("\nSetelah diurutkan");
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }