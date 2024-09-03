function solve(formula, value) {
    try {
        let x = value
        const result = eval(formula)
        return result
    } catch (error) {
        return null;
    }
}