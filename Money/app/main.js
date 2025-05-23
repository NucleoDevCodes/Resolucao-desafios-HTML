let dolar = 5.1;

let usdImput = document.querySelector("#usd");
let brlImput = document.querySelector("#brl");

usdImput.addEventListener("keyup" , () => {
    convert("usd-to-brl")

} )


brlImput.addEventListener("keyup" , () => {
    convert("brl-to-usd")
} )

usdImput.addEventListener("blur" , () => {
    usdImput.value = formatCurrency(usdImput.value)
})

brlImput.addEventListener("blur" , () => {
    brlImput.value = formatCurrency(brlImput.value)
})

usdImput.value = "1000,00";
convert("usd-to-brl")

//Funções

function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits:2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)

    if(floatValue == NaN) {
        floatValue = 0

    }

    return floatValue
}


function convert(type)  {
   if (type == "usd-to-brl") {
    let fixedValue = fixValue(usdImput.value)
    let result = fixedValue * dolar
    result = result.toFixed(2)

    brlImput.value = formatCurrency(result)
     
   }

   if (type == "blr-to-usd") {
    let fixedValue = fixValue(brlImputImput.value)
    let result = fixedValue * dolar
    result = result.toFixed(2)

    brlImput.value = formatCurrency(result)

   }
}

convert("usd-to-brl")






