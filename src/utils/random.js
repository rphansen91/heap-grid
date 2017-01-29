const rand = (min, max) => min + Math.floor(Math.random() * max);

module.exports = arr => {
    if (!arr.length) return false;
    const index = rand(0, arr.length - 1);
    return arr[index];
}