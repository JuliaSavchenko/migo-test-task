export const createMatrix = (count) => {
    const matrix = [];

    for (let i = 0; i < count; i++) {
        matrix[i] = []
        for (let j = 0; j < count; j++) {
            matrix[i][j] = {
                value: Math.round(Math.random()),
                isColored: false,
                x: i,
                y: j
            };
        }
    }

    return matrix;
};

export const colorFieldsInMatrix = (matrix, pointValue) => {
    const result = findPointsValue(matrix, pointValue);
    const resultCount = result.length;
    const pointsToColor = [];
    const updatedMatrix = [...matrix];
    for (let i = 0; i < resultCount; i++) {
        const pointWithValue = result.pop();
        if (pointWithValue) {
            const field = getFieldForPoint(pointWithValue, result);

            if (field.length >= 3) {
                pointsToColor.push(...field);
            }
        }
    }

    for (let j = 0; j < pointsToColor.length; j++) {
        const point = pointsToColor[j];
        updatedMatrix[point.x][point.y].isColored = true;
    }

    return updatedMatrix;
}


const findPointsValue = (matrix, pointValue) => {
    let onesArray = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j].value === pointValue) {
                onesArray.push(matrix[i][j]);
            }
        }
    }

    return onesArray;
}


const getFieldForPoint = (point, unprocessedPoints) => {
    const x = point.x;
    const y = point.y;

    const pointsToCheck = [[x, y - 1], [x - 1, y], [x + 1, y], [x, y + 1]]
    let foundPoints = [point];
    for (let i = 0; i < pointsToCheck.length; i++) {
        const pointToCheck = pointsToCheck[i];

        for (let j = 0; j < unprocessedPoints.length; j++) {
            const pointFromSet = unprocessedPoints[j];
            if (pointFromSet.x === pointToCheck[0] && pointFromSet.y === pointToCheck[1]) {
                foundPoints.push(...getFieldForPoint(unprocessedPoints.splice(j, 1)[0], unprocessedPoints))
            }
        }

    }

    return foundPoints;
}
