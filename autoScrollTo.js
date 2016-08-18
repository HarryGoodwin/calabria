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
    
    console.log("CurrentY:"+currentY+", targetY:"+targetY+", BodyHeight:"+bodyHeight+", Ypos:"+yPos)

	if(yPos >= bodyHeight){
		clearTimeout(animator);
		console.log(yPos);
        
        console.log("ypos bigger than bodyHeight - returning")
        return
	}
    
    if (targetY > div1TopOffset) {
        console.log("targety bigger than div§ToppOffset")
        console.log("TargetY:"+targetY)
        scrollY = currentY+distance;
        console.log("scrollY:"+scrollY)
        window.scroll(0, scrollY);
        console.log("yPos:"+yPos);
    }
    else {
        "targetY less than div1Offset - clearingTimeout"
        clearTimeout(animator);
        console.log(yPos);
    }
}		


