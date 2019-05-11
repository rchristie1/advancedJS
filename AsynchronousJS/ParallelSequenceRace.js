const promisify = (item, delay) =>
    new Promise((resolve) => 
    setTimeout(() => 
    resolve(item), delay));

    const a = () => promisify('Test1', 100);
    const b = () => promisify('Test2', 5000);
    const c = () => promisify('Test3', 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel function complete: ${output1} ${output2} ${output3}`
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race function complete: ${output1}`
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();

    return `sequence is complete: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
sequence().then(console.log)
race().then(console.log)