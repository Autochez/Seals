var SealImgs=["Seal1.jpeg","Seal2.jpeg","Seal3.jpeg","Seal4.jpeg","Seal5.jpeg"]
var NonSealImgs=["Beans1.jpeg","Beans2.jpeg","Beans3.jpeg","Beans4.jpeg","Beans5.jpeg"]
/*above needs heavily refining
AKA pulling from folder when ported to node*/
var SealOrNoSeal=[]
if (SealImgs.length!=NonSealImgs.length) {
	alert("Image error");
}
for (i=0;i<SealImgs.length;i++) {
	SealOrNoSeal.push(0);
}
//needs replacing with external text file when ported to node
var pointer=0
function back() {
	if (pointer!=0) {
		pointer=pointer-1;
		var flip=Math.random();
		if (flip<0.2) {
			SealOrNoSeal[pointer]=1;
		}
		//this data needs sending to the server
		if (SealOrNoSeal[pointer]==0) {
			document.getElementById("Seal").src=SealImgs[pointer];
		} else {
			document.getElementById("Seal").src=NonSealImgs[pointer];
		}
	}
	console.log(pointer);
}
function forward() {
	if (pointer!=SealImgs.length-1) {
		pointer=pointer+1;
		var flip=Math.random();
		if (flip<0.2) {
			SealOrNoSeal[pointer]=1;
		}
		//this data needs sending to the server
		if (SealOrNoSeal[pointer]==0) {
			document.getElementById("Seal").src=SealImgs[pointer];
		} else {
			document.getElementById("Seal").src=NonSealImgs[pointer];
		}
	}
	console.log(pointer);
}