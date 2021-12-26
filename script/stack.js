var list = [];

function pop() {
    console.log(list[list.length - 1])
}

function push(number) {
    list.push(number)
}

push(1); // 0
push(2); // 1
push(3); // 2
pop()
