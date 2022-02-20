var matrix=[
    [2,4,6,8],
    [1,3,5,7],
    [9,7,5,4],
    
]

// for(let bairerArray=0; bairerArray<matrix.length;bairerArray++){
//     //console.log(matrix[bairerArray]);
//     for(vitrerArray=0; vitrerArray < matrix[bairerArray].length; vitrerArray++){
//         console.log(matrix[bairerArray][vitrerArray]);
//     }
// }

for(let row=0; row<matrix.length;row++){
    console.log(row);
    for(let column=0; column < matrix[row].length;column++){
        console.log(column);
       console.log(matrix[row][column]);
    }
}