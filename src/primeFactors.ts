export const primeFactorsGenerator = (n: number) => {
    let primeFactors = [];
    for (let potentialDivisor = 2; n > 1; potentialDivisor++) {
        for (; n % potentialDivisor === 0; n /= potentialDivisor) {
            primeFactors.push(potentialDivisor);
        }
    }
    return primeFactors;
};