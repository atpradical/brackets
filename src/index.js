module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let openBrackets = [];
    let closeBrackets = [];
    let sameBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
            sameBrackets.push(bracketsConfig[i][0]);
        } else {
            openBrackets.push(bracketsConfig[i][0]);
            closeBrackets.push(bracketsConfig[i][1]);
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (sameBrackets.includes(str[i])) {
            if (stack[stack.length - 1] === str[i]) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {
            if (
                stack.length === 0 ||
                openBrackets.indexOf(stack.pop()) !== closeBrackets.indexOf(str[i])
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
