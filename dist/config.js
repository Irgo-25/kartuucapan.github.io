const button = document.querySelector('#tombol')
button.addEventListener('click', function () {
  Swal.fire({
    title: 'Selamat Ulang Tahun Gita Ayu Septina Rahman🤩🤩🤩😛',
    color: '#716add',
    imageUrl: 'dist/img16.jpg',
    imageWidth: 150,
    imageHeight: 200,
    confirmButtonText: 'Lanjut',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Sehat Selalu, dan tercapai segala cita-citamu i love yuu ❤️❤️ ',
        color: '#716add',
        imageUrl: 'dist/img15.jpg',
        imageWidth: 150,
        imageHeight: 200,
        confirmButtonText: 'Selesai',
      })
    }
  })
})
