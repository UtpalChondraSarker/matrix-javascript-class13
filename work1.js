var matrix3=[
    [4,5,6],
    [2,3,4]
]
var matrix4=[
    [2,4,6],
    [1,2,3]
]
var matrixValue=[];

var row1=matrix3.length;
//console.log(row1);
var column1=matrix3[0].length;
//console.log(column1);

var row2=matrix4.length;
//console.log(row1);
var column2=matrix4[0].length;
//console.log(column1);

for(let i=0;i<matrix3.length;i++){
    //console.log(i);
    var emptyArray=[];
    for(let j=0; j<matrix3[i].length;j++){
        //console.log(j);
        console.log(`[ matrix3 [ ( ${i} ${j}) ${matrix3[i][j]}] matrix4 [ ( ${i} ${j}) ${matrix4[i][j]}] ]`);

        var number1=matrix3[i][j];
        var number2=matrix4[i][j]
        var sub=number1-number2;
        emptyArray.push(sub);
        
    }
    matrixValue.push(emptyArray);
    console.log(matrixValue);
}

for(let i=0; i<matrixValue.length;i++){
    
    res='';
    for(let j=0; j<matrixValue[i].length;j++){
        var result5=matrixValue[i][j];
        //console.log(result5);
        res=res+result5 +'\t';
        
    }
    console.log(res);
}