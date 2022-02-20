
var resultMatrix=[]
var matrix1 = [
    [1,5],
    [-4,3]
]

var matrix2 = [
    [2,-1],
    [4,-1]
]

var row1=matrix1.length;
//console.log(row1);
var column1=matrix1[0].length;
//console.log(column1);

var row2=matrix2.length;
//console.log(row2);
var colum2=matrix2[0].length;
//console.log(colum2);

for(let i=0; i<matrix1.length;i++){
    //console.log(i);
    var emptyArray=[];
    for(let j=0; j<matrix1[i].length;j++){
        //console.log(j);
        console.log(matrix1[i][j],matrix2[i][j]);
        console.log(`[matrix1 [ (${i} ${j}) ${matrix1 [i][j]}] \t [matrix2 [ (${i} ${j}) ${matrix2 [i][j]}]`);

        var num1=matrix1[i][j];
        //console.log(num1);
        var num2 =matrix2[i][j];
        //console.log(num2);
        var value=num1+num2;
       // console.log(value);
        emptyArray.push(value)
        //console.log(emptyArray);
    }
    resultMatrix.push(emptyArray);
    //console.log(resultMatrix);
}

for(let k=0; k<resultMatrix.length;k++){
    //console.log(k);

    var sum='';
    for(let n=0; n<resultMatrix[k].length;n++){
        //console.log(n);
        var result=resultMatrix[k][n];
        //console.log(result);
        sum=sum+result +'\t'
    }
    console.log(sum);
    
}

