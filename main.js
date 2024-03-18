var list1 = []
document.querySelector('.btn').addEventListener('click',()=>{
    list1.push(document.querySelector('.card-text').innerHTML)

})

alert(list1[0])

