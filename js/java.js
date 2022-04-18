let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.button2').addEventListener('click',function(){
        offset = offset + 256;
        if (offset > 2048){
                offset = 0
        }
        sliderLine.style.left = -offset + 'px';
});
document.querySelector('.button1').addEventListener('click',function(){
        offset = offset - 256;
        if (offset < 0){
                offset = 2048
        }
        sliderLine.style.left = -offset + 'px';
});




var width=1500, r=100;
                    
                    setTimeout('ff()', 2);
                    function ff() {
                    d=document.getElementById('dd');
                    
                    if(d.width>2&&r==1){
                        d.style.left=(parseInt(d.style.left)+1)+"px";
                        d.width=d.width-2;
                    }else if(d.width<width&&r==0){
                        d.style.left=(parseInt(d.style.left)-1)+"px";
                        d.width=d.width+2;
                    }else {r=(r==1?0:1);}
                    setTimeout('ff()', 2);
                    }
