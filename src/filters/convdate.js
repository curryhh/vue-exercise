
export const convdate=(sDate)=>{
	var sArr = sDate.split("-");
	 console.log(sArr);
	var sRDate = parseInt(new Date(sArr[0], sArr[1], sArr[2])/24/60/60/1000);
	//console.log((sRDate));
	return sRDate;
}