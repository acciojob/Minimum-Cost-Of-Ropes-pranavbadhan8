function calculateMinCost() {
  var inputData = document.querySelector("#rope-lengths").value;
	var inputArr = inputData.split(',');
	for(var i=0;i<inputArr.length;i++) {
		inputArr[i] = Number(inputArr[i]);
	}
	var cost = 0;
	inputArr.sort(function (a,b) { return a-b; });
	while(inputArr.length > 1) {
		var num = inputArr[0] + inputArr[1];
		cost += num;
		inputArr.splice(0,2);
		inputArr.unshift(num);
		inputArr.sort(function (a,b) { return a-b; });
	}
	document.querySelector("#result").textContent = cost;
}  
  
