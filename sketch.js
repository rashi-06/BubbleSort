let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0 ; i<= windowWidth ; i++)
  {
    arr[i] = random(height - 200);
  }
}





function BubbleSort(firstLoop){  
  let b;
  
  for(b = 0 ; b < arr.length - firstLoop - 1 ; b++)
  {
   if(arr[b] > arr[b+1])
    {
      swap(arr , b ,b+1);
    }
  }
  firstLoop++;  
  if(firstLoop > arr.length)
  {
    noLoop();
  }
        
}

        
function swap(arr,a ,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function draw() {
  background(255);
  for (let i = 0; i < arr.length; i++) {
    stroke(0);
    line(i, height , i , height - arr[i]);
  }
  BubbleSort(0);
}
