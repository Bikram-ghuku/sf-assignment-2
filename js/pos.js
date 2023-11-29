export const HOME_POS = {

    red: [[81, 41.5], 
        [81, 49], 
        [69, 49], 
        [69, 41.5]],

    yellow: [[17, 17], [17, 10], [28, 17], [28, 10]],

    green: [[28, 49], [17, 49], [28, 41.5], [17, 41.5]],

    blue: [[81, 17], [81, 10], [69, 17], [69, 10]]
}


export const BOARD_POS_1 = [[90, 26], [84, 26], [78, 26], [72, 26], [66, 26], [60, 26]] ;
export const BOARD_POS_2 = [[54, 22], [54, 19], [54, 15], [54, 12], [54, 8], [54, 5]];
export const BOARD_POS_3 = [[48, 5], [42, 5], [42, 8], [42, 12], [42, 16], [42, 19], [42, 22]];
export const BOARD_POS_4 = [[37, 26], [31, 26], [25, 26], [19, 26], [13, 26], [7, 26], [7, 29.5]];
export const BOARD_POS_5 = [[37, 33], [31, 33], [25, 33], [19, 33], [13, 33], [7, 33]];
export const BOARD_POS_6 = [[42, 36], [42, 39], [42, 43], [42, 47], [42, 50], [42, 53], [48, 53]];
export const BOARD_POS_7 = [[54, 53], [54, 50], [54, 46], [54, 43], [54, 39], [54, 36]];
export const BOARD_POS_8 = [[90, 33], [84, 33], [78, 33], [72, 33], [66, 33], [60, 33], [90, 29.5], [90, 25.5]];
var BOARD_POS = []
for(var x in BOARD_POS_1){
    BOARD_POS.push(BOARD_POS_1[x]);
}
for(var x in BOARD_POS_2){
    BOARD_POS.push(BOARD_POS_2[x]);
}
for(var x in BOARD_POS_3){
    BOARD_POS.push(BOARD_POS_3[x]);
}
for(var x in BOARD_POS_4){
    BOARD_POS.push(BOARD_POS_4[x]);
}
for(var x in BOARD_POS_5.reverse()){
    BOARD_POS.push(BOARD_POS_5[x]);
}
for(var x in BOARD_POS_6){
    BOARD_POS.push(BOARD_POS_6[x]);
}
for(var x in BOARD_POS_7){
    BOARD_POS.push(BOARD_POS_7[x]);
}
for(var x in BOARD_POS_8){
    BOARD_POS.push(BOARD_POS_8[x]);
}
export {BOARD_POS};

export const BOARD_POS_BLUE = [ [84, 29.5], [78, 29.5], [72, 29.5], [66, 29.5], [60, 29.5]] ;
export const BOARD_POS_GREEN = [ [37, 29.5], [31, 29.5], [25, 29.5], [19, 29.5], [13, 29.5]] ;
export const BOARD_POS_RED = [[48, 50], [48, 46], [48, 43], [48, 39], [48, 36]] ;
export const BOARD_POS_YELLOW = [[48, 22], [48, 19], [48, 15], [48, 12], [48, 8]] ;

export const START_POS = {"blue": 1, "yellow":14, "green": 27, "red":40}