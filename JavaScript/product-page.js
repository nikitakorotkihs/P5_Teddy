fetch('http://localhost:3000/api/teddies')
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.querySelector('body').appendChild(img);
    });