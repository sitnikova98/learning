var array = [];
var gener_but = document.getElementById("generate_but");
var sort_but = document.getElementById("sort_but");

function insertSort (arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = i; j>0 && arr[j-1]>arr[j]; j--) {
            var buf = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = buf;
        }
    }
    return arr;
};

gener_but.addEventListener("click", function () {
    var input_value = document.getElementById("input_size").value;
    document.getElementById("show_array").value = "";
    array = [];

    length = parseInt(input_value,10);
    for(var i = 0; i<length; i++) {
        array[i] = Math.floor(Math.random()*10+1);
    }
    document.getElementById("show_array").value = array;
});

sort_but.addEventListener("click", function () {
    document.getElementById("result").value = insertSort(array);
});
