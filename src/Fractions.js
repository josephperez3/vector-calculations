export const addFrac = (frac1, frac2) => {
  let num1 = frac1[0];
  let denom1 = frac1[1];
  let num2 = frac2[0];
  let denom2 = frac2[1];
  const finalNum = num1 * denom2 + num2 * denom1;
  const finalDenom = denom1 * denom2;
  return reduceFrac([finalNum, finalDenom]);
};

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const validFrac = (frac) => {
  const num = frac[0];
  const denom = frac[1];
  return !isNaN(num) && !isNaN(denom) && denom !== 0;
};

export const multFrac = (frac1, frac2) => {
  const num1 = frac1[0];
  const denom1 = frac1[1];
  const num2 = frac2[0];
  const denom2 = frac2[1];
  const fracProduct = [num1 * num2, denom1 * denom2];
  return reduceFrac(fracProduct);
};

const reduceFrac = (frac) => {
  let num = frac[0];
  let denom = frac[1];
  if (num % denom === 0) {
    return [num / denom, 1];
  } else {
    const gcd = getGCD(num, denom);
    if (gcd !== 1) {
      return [num / gcd, denom / gcd];
    } else {
      return [num, denom];
    }
  }
};

export const displayFrac = (frac) => {
  let num = frac[0];
  let denom = frac[1];
  if (denom < 0 && num > 0) {
    num *= -1;
    denom *= -1;
  }
  if (denom === 1) {
    return String(num);
  } else {
    return String(num) + "/" + String(denom);
  }
};

// do fraction check in here!!! (check if NaN, denom = 0, decimal)
export const stringToFrac = (frac) => {
  frac = String(frac);
  if (frac.indexOf(".") >= 0) {
    return false;
  }
  const split = frac.split("/");
  let num = parseInt(split[0], 10);
  let denom = parseInt(split[1], 10);
  if (frac === "") {
    return [0, 1];
  }
  if ((frac.match(/-/g) || []).length === frac.length) {
    return [0, 1];
  }
  if (isNaN(denom)) {
    denom = 1;
  }
  if (!validFrac([num, denom])) {
    return false;
  }
  return [num, denom];
};
