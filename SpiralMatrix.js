/***********
Mohsen Tavakoli - Spiral Matrix
$node sprialMatrix - Jobber Q2.js input
************/

// Print the given Matrix(2D Array)
const printMatrix = (matrix) => {
    for (var i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' - ')); // In each itteration prints the array elements joining by ' - ' character. 1 - 2 - 3
    }
}

// Creates a I*I based on the Given n
const createMatrix = (n) => {
    let matrixSize = n;
    const matrix = []; //  Creates a sub array for the arrays of size n named matrix.
    while (matrixSize--){
        matrix.push(new Array(n));
    }
    return matrix; // returns a 2D array of size n * n.
}

// Creates the spiral
const createSpiral = (n) => {
    const spiralMatrix = createMatrix(n);
    let stream = 1; // First input.
    let i = 0; // i Index in the array.
    let j = 0; // j Index in the array.
    let di = 0; // direction for index i.
    let dj = 1; // direction for index j.

    while (stream <= n * n){ // while stream is smaller equal than max. 9 <= 3 * 3 => 1, 2, 3, ..., 8, 9
        spiralMatrix[i][j] = stream++; // assiging the input.
        if(dj + j === n || di + i === n || j + dj === -1 || spiralMatrix[i + di][j + dj]){ // Condition for changing direction and not re-inserting the element in the same position. if j + dj === n,i + dj === 3 => (2 + 1 === 3) or j + dj === -1, (0 + (-1) === -1 => which means that elements will be inserted in the outside of the array which is wrong so Direction must be swapped. if spiralMatrix[i][j] is not empty it means that an elements is in the array so direction must be changed.  
            let tmpDir = di;
            di = dj;
            dj = -tmpDir;
        }
        i += di;
        j += dj;
    }
    return spiralMatrix;
}

// Validates the user input.
const validation = (args) => {
    try{
        if (args[0] && !isNaN(args[0]) && args[0] >= 1) { // If the input is an integer and greater than 1 =>
            printMatrix(createSpiral(parseInt(args[0])));
        } else if (args[0] < 1){
            createMatrix(0);
        } else if (args[0]) { // Input Error!
            throw new Error ("Input must ba an integer. Please enter a valid input!\ne.g node createSpiral 5!\n");
        }
    } catch(e){
        console.log(e);
    }
}

args = process.argv.slice(2); // Slice the first 2 arguments out of CLI input. args = ['$node', 'ScriptName', 'input'] => args[0] = input.

validation(args);

module.exports.createSpiral = createSpiral;