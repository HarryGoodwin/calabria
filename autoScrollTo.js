var scrollY = 0;
var distance = 10;
var speed = 24;
div1TopOffset = 10;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).getBoundingClientRect().top;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')', 5);

	if(yPos > bodyHeight){
		clearTimeout(animator);
		console.log(yPos);
        
        return
	}
    
    if (targetY > div1TopOffset) {
        scrollY = currentY+distance;
        window.scroll(0, scrollY);
        console.log(yPos);
    }
    else {
        clearTimeout(animator);
        console.log(yPos);
    }
}		

