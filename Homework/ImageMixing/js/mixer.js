(function name(params) {
    let imx = new XMLHttpRequest();

    document.querySelector('#btnShow').onclick = function() {
        if (imx.readyState === 4) {
            if (imx.status === 200){ 
                let imgList = JSON.parse(imx.responseText);
                console.log(imgList)
                let newImages = document.querySelector('ul');
                for (let i= 0; i < imgList.length; i++) {
                    let imageLi = document.createElement('li');
                    let image = document.createElement('img')
                    image.src = ('http://web-training.lt/img_api/img/' + imgList[i]);
                    imageLi.appendChild(image);
                    newImages.appendChild(imageLi);
                    }
            }else{
                alert(imx.statusText);
            }

        }
        document.querySelector('#btnShow').style.display='none';
        document.querySelector('#btnShowSaved').style.display='none';
        document.querySelector('#btnSave').style.display='inline-block';
        document.querySelector('#btnMix').style.display='inline-block';
        document.querySelector('#btnClear').style.display='inline-block';
    }

    document.querySelector('#btnShowSaved').onclick = function() {
        if('gallery' in localStorage){
            let imgList = JSON.parse(localStorage.getItem('gallery'));
            console.log(imgList)
            let newImages = document.querySelector('ul');
            for (let i= 0; i < imgList.length; i++) {
                let imageLi = document.createElement('li');
                let image = document.createElement('img')
                image.src = ('http://web-training.lt/img_api/img/' + imgList[i]);
                imageLi.appendChild(image);
                newImages.appendChild(imageLi);
                }
                document.querySelector('#btnShow').style.display='none';
                document.querySelector('#btnShowSaved').style.display='none';
                document.querySelector('#btnSave').style.display='inline-block';
                document.querySelector('#btnMix').style.display='inline-block';
                document.querySelector('#btnClear').style.display='inline-block';
         }else{
            alert('No saved images');
         }
    }

    document.querySelector('#btnMix').onclick=function () {
        let gallery=document.querySelectorAll('img');
        console.log(gallery);
        let clear=document.querySelector('ul');
        clear.innerHTML = '';
        for (let i = 0; i < gallery.length; i++) {
            let j=Math.floor(Math.random()*i);
            let temp = gallery[i].src;
            gallery[i].src = gallery[j].src;
            gallery[j].src = temp;
        }
        console.log(gallery);
       
        let newImages=document.querySelector('ul');
        var g=gallery.length;
        while(g--){
            let image=document.createElement('img');
            image.src = gallery[g].src;
            newImages.appendChild(image);

        } 
    }
    
    document.querySelector('#btnSave').onclick=function () {
        let gallery=document.querySelectorAll('img');
        const imgs = [];
        for(let g=0; g<gallery.length; g++){
            var s = gallery.item(g).src;
            s = s.replace('http://web-training.lt/img_api/img/','')
            imgs.push(s);
        }
        localStorage.setItem('gallery', JSON.stringify(imgs))
        console.log(JSON.stringify(imgs));

    }

    document.querySelector('#btnClear').onclick=function () {
        if('gallery' in localStorage)
        {
            alert('Data has been removed');
            localStorage.removeItem('gallery');
        }
        else{
            alert('No saved images');
        }
    }

    imx.open('GET', 'http://web-training.lt/img_api/');
    imx.send();

})();