//your JS code here. If required.
const submitBtn=document.getElementById("submit-btn");
submitBtn.addEventListener("click",()=>{
     const inputNum=document.querySelector("#block-id").value;
     const color=document.querySelector("#color-id").value;	

	for(let i=1;i<=9;i++){
		document.getElementById(i.toString()).style.backgroundColor='transparent';
	}

	if(inputNum>=1 && inputNum<=9 && color){
		const targetDiv=document.getElementById(inputNum);
		if(targetDiv){
		  targetDiv.style.backgroundColor=color;	
		}
	}else{
		alert('Please enter a valid ID (1-9) and a color.');
	}		
})
const resetBtn = document.getElementById(reset_button);
for(let i=1;i<=9;i++){
	document.getElemntById(i.toString()).style.backgroundColor="transparent";
}

