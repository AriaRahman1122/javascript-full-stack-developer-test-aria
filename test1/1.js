// Algoritma mencari data yang mengalami duplikasi

// Kamus
    const arr = [1, 2, 3, 4, 1];
    var duplicate;

// Algoritma
    // Cetak Array
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

    // Pencarian duplikasi
        for(let i = arr.length-1; i >= 0; i--) {
            for (let j = 0; j < arr.length; j++) {
                // cek posisi duplikasi
                if(arr[j] == arr[i]) {
                    // posisi alamat tidak boleh sama
                    if(j != i) {
                        duplicate = arr[j];
                    }
                }
            }
        }

        console.log("The Duplicate Element is : " + duplicate);

    
