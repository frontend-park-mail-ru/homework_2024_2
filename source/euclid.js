function euclid() {
    let x = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let y = arguments[i];
        while (x && y) {
            let temp = x
            x = Math.max(x, y) % Math.min(x, y)
            y = Math.min(temp, y)
        }
        x += y
    }
    return x;
}