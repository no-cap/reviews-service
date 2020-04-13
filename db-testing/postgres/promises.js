let cb = () => {
  return 'callback';
}


const prom = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(cb())
  }, 7000)
})


let func = (cb) => {
  prom
  .then(res => {
    console.log(res)
  })
}

func()