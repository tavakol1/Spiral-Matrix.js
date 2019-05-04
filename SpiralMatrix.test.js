const spiralMatrix = require("./SpiralMatrix").createSpiral;
const expect = require("chai").expect;

// It evaluated if the output of spiralMatrix(3) is equal to the expected result.
const spiralMatrixTest1 = () => {
    var expected = [ [ 1, 2, 3], [ 8, 9, 4], [ 7, 6, 5] ];
    const spiralOut = spiralMatrix(3);

    expect(expected, 'Method Failed to calculate the correct value!').to.deep.equal(spiralOut);
}

// It evaluated if the output of spiralMatrix(4) is equal to the expected result.
const spiralMatrixTest2 = () => {
    var expected = [ [ 1, 2, 3, 4], [ 12, 13, 14, 5], [ 11, 16, 15, 6], [ 10, 9, 8, 7] ];
    const spiralOut = spiralMatrix(4);

    expect(expected, 'Method Failed to calculate the correct value!').to.deep.equal(spiralOut);
}

spiralMatrixTest1();
spiralMatrixTest2();
