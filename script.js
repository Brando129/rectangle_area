// Create a function that is able to tell a user what the area of a rectangle is

function find_area(length, width){
    var length = length
    var width = width
    var area = Math.round(length * width)

    return area
}
console.log(find_area(20.5, 8.7))