function calculateMinCost() {
   const input = document.getElementById("rope-lengths").value;
  
  // Convert the comma-separated string to an array of integers
  const ropeLengths = input.split(",").map((length) => parseInt(length));
  
  // Sort the array of rope lengths in non-decreasing order
  ropeLengths.sort((a, b) => a - b);
  
  // Initialize the minimum cost and total cost to 0
  let minCost = 0;
  let totalCost = 0;
  
  // Keep connecting the two shortest ropes until there is only one rope left
  while (ropeLengths.length > 1) {
    // Take the two shortest ropes
    const shortestRope1 = ropeLengths.shift();
    const shortestRope2 = ropeLengths.shift();
    
    // Calculate the cost of connecting the two shortest ropes
    const cost = shortestRope1 + shortestRope2;
    
    // Update the minimum cost and total cost
    minCost += cost;
    totalCost += cost;
    
    // Add the new rope to the array of rope lengths
    ropeLengths.push(cost);
    
    // Sort the array of rope lengths in non-decreasing order
    ropeLengths.sort((a, b) => a - b);
  }
  
  // Display the minimum cost in the result div
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `The minimum cost of connecting the ropes is ${minCost}.`;
}  
  
