function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (brackets[char]) {
            stack.push(char); // Если скобка открывающаяся, добавляем её в стек
        } else {
            const lastBracket = stack.pop(); // Если скобка закрывающаяся, извлекаем последнюю открывающуюся из стека
            if (char !== brackets[lastBracket]) {
                return false; // Если закрывающаяся скобка не соответствует последней открывающейся, возвращаем false
            }
        }
    }

    return stack.length === 0; // Проверка стека после завершения обхода строки
}

// Примеры использования
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
