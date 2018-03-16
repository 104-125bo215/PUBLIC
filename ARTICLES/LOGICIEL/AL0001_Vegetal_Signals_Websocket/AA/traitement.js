function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function fake_getDataFromWS() {
    var trace1;
    var trace2;
    var data;

    trace1 = {
        x: [1, 2, 3, 4],
        y: [10, getRandomInt(20), 13, 17],
        mode: 'lines'
    };

    trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 10],
        mode: 'lines'
    };
    data = [trace1, trace2];
    return data;
};