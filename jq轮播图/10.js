window.onload=function{
	var box=document.getElementById('container');
	var imgs=document.getElementsByTagName('img');
	var imgWidth = imgs[0].offsetWidth;
	var outwidth=180;
	var boxwidth=imgWidth+(imgs.length-1)*outwidth+'px';
	box.style.width=boxwidth;

	function setpos(){
		for (var i = 1,len=imgs.length; i <len; i++) {
			imgs[i].style.left=imgWidth+outwidth*(i-0)+'px';
		}
	};
	setpos();


	var translate=imgwidth-outwidth;

	for(var i = 1,len=imgs.length; i <len; i++){
		(function(i){
			img[i].onmouseover=function () {
				setpos();
				for (var j=1;j<i;j++){
					img[j].style.left=parseInt(imgs[j].style.left, 10) - translate + 'px';
				}
				
			};
		})(i);
	}


	//自动播放
	setTimeout(function(){
		alert("lalalal")
	},500)

};