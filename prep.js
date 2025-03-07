const demo = document.getElementById("demo")
const click = document.getElementById("click")

const myPromise = new Promise((res, rej)=>{
    click.addEventListener("click", ()=> {
        res("resolved")
    })
})


 myPromise.then(res => console.log(res))


 

// console.log("state", myPromise.then(console.log("hello")))
