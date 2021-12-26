var list = [];

function deque() {
    console.log(list[0])
}

function enque(number) {
    list.push(number)
}

enque(1); // 0
enque(2); // 1
enque(3); // 2
deque()
