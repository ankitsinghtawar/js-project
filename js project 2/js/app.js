const getcolor = ()=>{
    const randmomcolor = Math.floor(Math.random()*16777215)
    const colorcode = '#' + randmomcolor.toString(16)
    console.log(randmomcolor,colorcode);
    document.body.style.backgroundColor = colorcode
    document.getElementById('color-code').innerText = colorcode
    
}
document.getElementById('btn').addEventListener(
     'click',getcolor)

getcolor()
