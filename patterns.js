function pattern1(){
    let n = 4
    for(let i = 1; i<=n; i++){
        let row = ""
        for(let j = 1; j<=i; j++){
            row += " "
        }
        for(let j = 1; j<=n; j++){
            row += "*"
        }
        for(let j = n; j>=i; j--){
            row += "  "
        }
        for(let j = 1; j<=n; j++){
            row += "*"
        }
        console.log(row)
    }

    for(let i = 1; i<=n; i++){
        let row = ""
        for(let j = n; j>=i; j--){
            row += " "
        }
        for(let j = 1; j<=n; j++){
            row += "*"
        }
        for(let j = 1; j<=i; j++){
            row += "  "
        }
        for(let j = 1; j<=n; j++){
            row += "*"
        }
        console.log(row)
    }
}

pattern1()