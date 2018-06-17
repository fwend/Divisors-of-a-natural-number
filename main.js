function getDivisors(n) {
    if (n === 1)
        return [n];

    const result = [1, n];
    const limit = Math.sqrt(n) >> 0;

    for (let p = 2; p <= limit; p++) {

        if (n % p === 0) {
            result.push(p);

            const q = n / p;
            if (q > p)
                result.push(q);
        }
    }

    return result.sort((a, b) => a - b);
}

function properDivisors(n) {
    const result = [1];
    const limit = Math.sqrt(n) >> 0;

    for (let p = 2; p <= limit; p++) {

        if (n % p === 0) {
            result.push(p);

            const q = n / p;
            if (q > p)
                result.push(q);
        }
    }
    return result;
}