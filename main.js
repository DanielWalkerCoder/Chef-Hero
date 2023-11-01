let storedAllyStr = window.localStorage.getItem('storedAllyStr')
let allyStr = storedAllyStr ? storedAllyStr : ""
let allyArr = alphabetize(strToArr(allyStr))
document.querySelector('#allyList').innerHTML = ''
arrToList(allyArr, 'allyList')

document.querySelector('#storeAlly').addEventListener('click', () =>{
    window.localStorage.setItem('storedAllyStr', storedAllyStr + ',,,' + document.querySelector('#allyText').value)
    storedAllyStr = window.localStorage.getItem('storedAllyStr')
    allyArr = alphabetize(strToArr(storedAllyStr))
    document.querySelector('#allyList').innerHTML = ''
    arrToList(allyArr, 'allyList')
    document.querySelector('#allyText').value = ''
})

// let
// for(let i = 0; i < )
// let allyRemove = document.querySelectorAll()


function strToArr(str){
    return str.split(',,,')
}


//JSON.stringify() turns an array or object into a string
//JSON.parse() turns a stringified version of object/string and returns its form


function alphabetize(arr){
    return arr.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
}


function arrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
    }
    
}

function removeLi(ulId, num){
    let strToRemove = ',,,' + document.querySelector(`#${ulId}S${num}`).innerText
    window.localStorage.setItem('storedAllyStr', storedAllyStr.replace(strToRemove, ''))
    storedAllyStr = window.localStorage.getItem('storedAllyStr')
    arrToList(strToArr(storedAllyStr), ulId)
}