'use strict';

// This is a hash function matrix that I used for Count min Sketch problem.
let hash_functions_array = [
    [1,6,3,1],
    [1,2,4,6],
    [3,4,1,6],
    [6,2,4,1]
];

const letters = ['A', 'B', 'C', 'D'];
let sketch_table = Array(4).fill().map(() => Array(7).fill(0));

function hash_function(ch) {
    const idx = letters.indexOf(ch);
    for(let i in hash_functions_array[idx]) {
        const val = hash_functions_array[idx][i];
        sketch_table[i][val]+=1;
    }
}

function countMin(str) {
    for (const c of str)
        hash_function(c);
    console.log(sketch_table);
}

function find_iteration(ch){
    const idx = letters.indexOf(ch);
    let res_arr=[];
    for(let i in hash_functions_array[idx]) {
        const val = hash_functions_array[idx][i];
        res_arr.push(sketch_table[i][val]);
    }
    console.log("Min([" + res_arr + "]) = " + Math.min(...res_arr));
}
var prompt = require('prompt');

var prompt_attributes = ['streamed_data','iteration_for'];

prompt.start();

prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        var data = result.streamed_data
        var str = result.iteration_for;
        countMin(data);
        find_iteration(str);
    }
});
