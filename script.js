
	 function calculateMinCost() {
     let str = document.querySelector("#rope-lengths").value;
    let arr = str.split(", ");

    for(let i in arr){
        arr[i] =  Number(arr[i]);
    }
     let mincost=0;
    while(arr.length!=1){
        arr.sort( function (a,b){
            return a-b;
        });
        let cost= arr[0] + arr[1];
        mincost+=cost;
        arr.splice(0,2);
        arr.push(cost);
    }


    document.querySelector("#result").innerHTML=mincost;
 }