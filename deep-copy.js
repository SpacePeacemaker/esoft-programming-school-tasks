function deepCopy(obj, visited = new WeakMap()) {
    // Проверка, является ли obj объектом
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Возвращение непримитивных типов
    }

    // Проверка посещения объекта для избежания циклических ссылок
    if (visited.has(obj)) {
        return visited.get(obj);
    }

    // Создание нового объекта или массива в зависимости от типа obj
    const copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));

    // Помещение посещённого объекта в WeakMap
    visited.set(obj, copy);

    // Рекурсивное копирование каждого элемента объекта или массива
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], visited);
        }
    }

    return copy;
}

// Пример использования функции
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

const obj2 = deepCopy(obj1);
console.log(obj2); // Вывод скопированного объекта
