let storedExp = window.localStorage.getItem('storedExp')
let exp = storedExp ? storedExp : 0
let level = 1 + (parseInt(exp) - (parseInt(exp) % 10)) / 10
let imageNum = parseInt(exp) % 10
document.querySelector(`#levelText`).innerText = `Lvl ${level} Chef`
let storedFame = window.localStorage.getItem('storedFame')
let fame = storedFame ? storedFame : 0
document.querySelector(`#fameText`).innerText = `Fame: ${fame}`
let storedConqueredFoes = window.localStorage.getItem('storedConqueredFoes')
let conqueredFoes = storedConqueredFoes ? storedConqueredFoes : 0
document.querySelector(`#conqueredFoesText`).innerText = `Conquered foes: ${conqueredFoes}`
let storedUniqueConqueredFoes = window.localStorage.getItem('storedUniqueConqueredFoes')
let uniqueConqueredFoes = storedUniqueConqueredFoes ? storedUniqueConqueredFoes : 0
document.querySelector(`#uniqueConqueredFoesText`).innerText = `Unique Conquered foes: ${uniqueConqueredFoes}`
let imgArr = ['./exp0.jpg', './exp1.jpg', './exp2.jpg', './exp3.jpg', './exp4.jpg', './exp5.jpg', './exp6.jpg', './exp7.jpg', './exp8.jpg', './exp9.jpg']
document.querySelector('#expBar').src = imgArr[imageNum]
let storedRecipes = window.localStorage.getItem('storedRecipes')
let recipes = storedRecipes ? storedRecipes: []


//Add new recipes/////////////////////////////////////////////////////
document.querySelector('#storeRecipe').addEventListener('click', () =>{
    exp = parseInt(exp) + 2
    window.localStorage.setItem('storedExp', exp)
    imageNum = parseInt(exp) % 10
    document.querySelector('#expBar').src = imgArr[imageNum]
    level = 1 + (parseInt(exp) - (parseInt(exp) % 10)) / 10
    document.querySelector(`#levelText`).innerText = `Lvl ${level} Chef`
    conqueredFoes = parseInt(conqueredFoes) + 1
    window.localStorage.setItem('storedConqueredFoes', conqueredFoes)
    document.querySelector(`#conqueredFoesText`).innerText = `Conquered foes: ${conqueredFoes}`
    uniqueConqueredFoes = parseInt(uniqueConqueredFoes) + 1
    window.localStorage.setItem('storedUniqueConqueredFoes', uniqueConqueredFoes)
    document.querySelector(`#uniqueConqueredFoesText`).innerText = `Unique Conquered foes: ${conqueredFoes}`
    let newObj = {'name': document.querySelector('#name').value, 'ingredients': document.querySelector('#ingredients').value.split(', '), 'directions': document.querySelector('#directions').value}
    recipes.push(newObj)
    window.localStorage.setItem('storedRecipes', JSON.stringify(recipes))
    document.querySelector('#name').value = ''
    document.querySelector('#ingredients').value = ''
    document.querySelector('#directions').value = ''
})


//Cook known recipes//////////////////////////////////////////////////
document.querySelector('#storeConqueredFoes').addEventListener('click', () =>{
    
})


//Add, remove, and store shopping items///////////////////////////////
let storedBuyStr = window.localStorage.getItem('storedBuyStr')
let buyStr = storedBuyStr ? storedBuyStr : ""
let buyArr = alphabetize(strToArr(buyStr))
document.querySelector('#buyList').innerHTML = ''
buyArrToList(buyArr, 'buyList')
document.querySelector('#storeBuy').addEventListener('click', () =>{
    window.localStorage.setItem('storedBuyStr', storedBuyStr + ',,,' + document.querySelector('#buyText').value)
    storedBuyStr = window.localStorage.getItem('storedBuyStr')
    buyArr = alphabetize(strToArr(storedBuyStr))
    document.querySelector('#buyList').innerHTML = ''
    buyArrToList(buyArr, 'buyList')
    document.querySelector('#buyText').value = ''
})


//Add, remove, and store inventory////////////////////////////////
let storedKitStr = window.localStorage.getItem('storedKitStr')
let kitStr = storedKitStr ? storedKitStr : ""
let kitArr = alphabetize(strToArr(kitStr))
document.querySelector('#kitList').innerHTML = ''
kitArrToList(kitArr, 'kitList')
document.querySelector('#storeKit').addEventListener('click', () =>{
    window.localStorage.setItem('storedKitStr', storedKitStr + ',,,' + document.querySelector('#kitText').value)
    storedKitStr = window.localStorage.getItem('storedKitStr')
    kitArr = alphabetize(strToArr(storedKitStr))
    document.querySelector('#kitList').innerHTML = ''
    kitArrToList(kitArr, 'kitList')
    document.querySelector('#kitText').value = ''
})


//Add, remove, and store allies////////////////////////////////
let storedAllyStr = window.localStorage.getItem('storedAllyStr')
let allyStr = storedAllyStr ? storedAllyStr : ""
let allyArr = alphabetize(strToArr(allyStr))
document.querySelector('#allyList').innerHTML = ''
allyArrToList(allyArr, 'allyList')
document.querySelector('#storeAlly').addEventListener('click', () =>{
    window.localStorage.setItem('storedAllyStr', storedAllyStr + ',,,' + document.querySelector('#allyText').value)
    storedAllyStr = window.localStorage.getItem('storedAllyStr')
    allyArr = alphabetize(strToArr(storedAllyStr))
    document.querySelector('#allyList').innerHTML = ''
    allyArrToList(allyArr, 'allyList')
    document.querySelector('#allyText').value = ''
})


//Add, remove, and store foes//////////////////////////////////
let storedFoeStr = window.localStorage.getItem('storedFoeStr')
let foeStr = storedFoeStr ? storedFoeStr : ""
let foeArr = alphabetize(strToArr(foeStr))
document.querySelector('#foeList').innerHTML = ''
foeArrToList(foeArr, 'foeList')
document.querySelector('#storeFoe').addEventListener('click', () =>{
    window.localStorage.setItem('storedFoeStr', storedFoeStr + ',,,' + document.querySelector('#foeText').value)
    storedFoeStr = window.localStorage.getItem('storedFoeStr')
    foeArr = alphabetize(strToArr(storedFoeStr))
    document.querySelector('#foeList').innerHTML = ''
    foeArrToList(foeArr, 'foeList')
    document.querySelector('#foeText').value = ''
})


//Add, remove, and store categories//////////////////////////////////
let storedCatStr = window.localStorage.getItem('storedCatStr')
let catStr = storedCatStr ? storedCatStr : ""
let catArr = alphabetize(strToArr(catStr))
document.querySelector('#catList').innerHTML = ''
catArrToList(catArr, 'catList')
document.querySelector('#storeCat').addEventListener('click', () =>{
    window.localStorage.setItem('storedCatStr', storedCatStr + ',,,' + document.querySelector('#catText').value)
    storedCatStr = window.localStorage.getItem('storedCatStr')
    catArr = alphabetize(strToArr(storedCatStr))
    document.querySelector('#catList').innerHTML = ''
    catArrToList(catArr, 'catList')
    document.querySelector('#catText').value = ''
})


//Suggest a random category//////////////////////////////////////////
document.querySelector('#showRandom').addEventListener('click', () =>{
    let randomInt = Math.floor(Math.random() * (catArr.length - 1) + 1)
    document.querySelector('#category').innerText = catArr[randomInt] + '.'
})




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


function kitArrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a> <a href='#' id='${ulId}A2${j}'>shopping list</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
        document.querySelector(`#${ulId}A${j}`).addEventListener('click', () =>{
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedKitStr', storedKitStr.replace(strToRemove, ''))
            storedKitStr = window.localStorage.getItem('storedKitStr')
            kitStr = storedKitStr
            kitArr = alphabetize(strToArr(kitStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            kitArrToList(kitArr, ulId)
        })
        document.querySelector(`#${ulId}A2${j}`).addEventListener('click', () =>{
            window.localStorage.setItem('storedBuyStr', storedBuyStr + ',,,' + document.querySelector(`#${ulId}S${j}`).innerText)
            storedBuyStr = window.localStorage.getItem('storedBuyStr')
            buyArr = alphabetize(strToArr(storedBuyStr))
            document.querySelector('#buyList').innerHTML = ''
            buyArrToList(buyArr, 'buyList')
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedKitStr', storedKitStr.replace(strToRemove, ''))
            storedKitStr = window.localStorage.getItem('storedKitStr')
            kitStr = storedKitStr
            kitArr = alphabetize(strToArr(kitStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            kitArrToList(kitArr, ulId)
        })
    }
}


function buyArrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a> <a href='#' id='${ulId}A2${j}'>kitchen</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
        document.querySelector(`#${ulId}A${j}`).addEventListener('click', () =>{
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedBuyStr', storedBuyStr.replace(strToRemove, ''))
            storedBuyStr = window.localStorage.getItem('storedBuyStr')
            buyStr = storedBuyStr
            buyArr = alphabetize(strToArr(buyStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            buyArrToList(buyArr, ulId)
        })
        document.querySelector(`#${ulId}A2${j}`).addEventListener('click', () =>{
            window.localStorage.setItem('storedKitStr', storedKitStr + ',,,' + document.querySelector(`#${ulId}S${j}`).innerText)
            storedKitStr = window.localStorage.getItem('storedKitStr')
            kitArr = alphabetize(strToArr(storedKitStr))
            document.querySelector('#kitList').innerHTML = ''
            kitArrToList(kitArr, 'kitList')
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedBuyStr', storedBuyStr.replace(strToRemove, ''))
            storedBuyStr = window.localStorage.getItem('storedBuyStr')
            buyStr = storedBuyStr
            buyArr = alphabetize(strToArr(buyStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            buyArrToList(buyArr, ulId)
        })
    }
}


function allyArrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
        document.querySelector(`#${ulId}A${j}`).addEventListener('click', () =>{
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedAllyStr', storedAllyStr.replace(strToRemove, ''))
            storedAllyStr = window.localStorage.getItem('storedAllyStr')
            allyStr = storedAllyStr
            allyArr = alphabetize(strToArr(allyStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            allyArrToList(allyArr, ulId)
        })
    }
}


function foeArrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
        document.querySelector(`#${ulId}A${j}`).addEventListener('click', () =>{
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedFoeStr', storedFoeStr.replace(strToRemove, ''))
            storedFoeStr = window.localStorage.getItem('storedFoeStr')
            foeStr = storedFoeStr
            foeArr = alphabetize(strToArr(foeStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            foeArrToList(foeArr, ulId)
        })
    }
}


function catArrToList(arr, ulId){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1
        let newLi = document.createElement('li')
        newLi.innerHTML = `<span id='${ulId}S${j}'>${arr[i]}</span> <a id='${ulId}A${j}' href='#'>remove</a>`
        newLi.id = `${ulId}${j}`
        newLi.className = `${ulId}Li`
        document.querySelector(`#${ulId}`).appendChild(newLi)
        document.querySelector(`#${ulId}A${j}`).addEventListener('click', () =>{
            let strToRemove = ',,,' + document.querySelector(`#${ulId}S${j}`).innerText
            window.localStorage.setItem('storedCatStr', storedCatStr.replace(strToRemove, ''))
            storedCatStr = window.localStorage.getItem('storedCatStr')
            catStr = storedCatStr
            catArr = alphabetize(strToArr(catStr))
            document.querySelector(`#${ulId}`).innerHTML = ''
            catArrToList(catArr, ulId)
        })
    }
}