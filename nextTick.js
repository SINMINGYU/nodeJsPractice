setImmediate(() => {
  console.log('im');
});

process.nextTick(() => {
  console.log('nxT');
});

setTimeout(() => {
  console.log('tO');
}, 0);

Promise.resolve().then(() => console.log('pr'));