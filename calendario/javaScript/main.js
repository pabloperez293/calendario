//modo dark veider
document.querySelector(".dark-mode-switch").onclick = () => {
    document.querySelector("body").classList.toggle("dark")
    document.querySelector("body").classList.toggle("light")
}

isLeapanio = (anio) => {
    return (anio % 4 === 0 && anio % 100 !== 0 && anio % 400 !== 0) || (anio % 100 === 0 && anio % 400 === 0)
}

//meeses
getMaydia = (anio) => {
    return isLeapanio(anio) ? 29 : 28
}

let calendario = document.querySelector(".calendario")

const month_names = ["Enero", "Febrero","Marzo","Abril", "Mayo",
"Junio","Julio", "Agosto","Septiembre","Octubre", "Noviembre","Diciembre"]

//Calendario 


// se agrega la lista de meses 
let month_picker = document.querySelector(`#month-picker`)

    month_picker.onclick = () => {
    month_list.classList.add(`show`)
}
generateCalendario = (month, anio) => {
    
    let calendario_dias = document.querySelector(".calendario-dias")
     calendario_dias.innerHTML = ''

    let calendario_header_anio = calendario.querySelector("#anio")


    let dias_of_month = [31, getMaydia(anio),31,30,31,30,31,31,30,31,30,31]

    let currDate  = new Date()

    month_picker.innerHTML = curr_month
    calendario_header_anio.innerHTML = anio
    
    //principio del mes

    let first_dia = new Date(month, anio, 1)

    for(let i = 0; i <= dias_of_month[month] + first_dia.getDay() - 1; i++ ) {
        let dia = document.createElement('div')
            if (i >= first_dia.getDay()) {
                dia.classList.add("calendario-dia-hover")
                dia.innerHTML = i - first_dia.getDay() + 1
                dia.innerHTML += '<span></span><span></span><span></span><span></span>'

                if ( i - first_dia.getDay() + 1 === currDate.getDate() && anio === currDate.getFullYear() && month === currDate.getMonth()) {
                      dia.classList.add('curr-date')
                }
            }
        calendario_dias.appendChild(dia)
    }
}

//Meses de Mayo para configurar los demas meses 
let month_list = calendario.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement(`div`)
    month.innerHTML = `<div>${e}</div>`
    month.onclick = () => {
        month_list.classList.remove(`show`)
        curr_month.value = index
        generateCalendario(curr_month.value, curr_anio.value)
    }
    month_list.appendChild(month)
})

    //para movilizar el año del calendario
    document.querySelector('#prev-anio').onclick = () => {
        --curr_anio.value
        generateCalendario(curr_month.value, curr_anio.value)
    }
    document.querySelector('#next-anio').onclick = () => {
        ++curr_anio.value
        generateCalendario(curr_month.value, curr_anio.value)
    }

let currDate  = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_anio = {value: currDate.getFullYear()}

generateCalendario(curr_month.value, curr_anio.value)
