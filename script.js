/**
 * Created by Kalie Gachnang on 7/11/2015.
 */
process.stdin.setEncoding('utf8');

var Settings = {};
var Match = {};
var player1 = {};
var player2 = {};
var face_repr = {
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9',
    10:'T',
    11:'J',
    12:'Q',
    13:'K',
    14:'A'
};

var face_value = {
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    'T':10,
    'J':11,
    'Q':12,
    'K':13,
    'A':14
};

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk === null) {
        return;
    }
    var line = chunk.split(" ");
    if (line.length == 3 && line[0] == "Action") {
        // A move is requested
        console.log("check 0\n");
    }
    else if (line.length == 3 && line[0] == "Settings") {
        Settings[line[1]] = line[2];
    }
    else if (line.length == 3 && line[0] == "Match") {
        Match[line[1]] = line[2];
    }
    else if (line.length == 3 && line[0] == "player1") {
        player1[line[1]] = line[2];
    }
    else if (line.length == 3 && line[0] == "player2") {
        player2[line[1]] = line[2];
    }
    else {
        // Game settings, round information and opponent moves are also
        // given
        return;
    }

});

