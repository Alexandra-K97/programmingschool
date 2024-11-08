const burger = document.getElementById("burger")
const burgerContent = document.getElementById("burger-content")


const cross = document.getElementById("cross")


const key = document.getElementById("key")
const keyContent = document.getElementById("key-content")

const close = document.getElementById("close")


const next = document.getElementById("next")
const textNext = document.getElementById("text-next")

const radio = document.querySelectorAll(".radio")

const respond = document.getElementById("respond")
const textProducts = document.getElementById("text-products")
const cover = document.getElementById("cover")


const bottomPart = document.getElementById("bottom-part")
const freeTraining = document.getElementById("free-training")

const backModal = document.querySelector(".back-modal")

const itemsCover = document.getElementById("items-cover")

const trainingCross = document.getElementById("training-cross")




burger.addEventListener("click", function(){
   burgerContent.classList.add("active")
})
cross.addEventListener("click", function(){
   burgerContent.classList.remove("active")
})

key.addEventListener("click", function(){
   keyContent.classList.add("active")
   backModal.classList.add("active")
   document.body.classList.add("no-scroll")
})
close.addEventListener("click", function(){
   keyContent.classList.remove("active")
   backModal.classList.remove("active")
   document.body.classList.remove("no-scroll")
})

 next.addEventListener("click", function(){
   textNext.classList.add("active")
   keyContent.classList.remove("active")
})

radio.forEach(item => {
   item.addEventListener("click", function(){
      const allRadio = document.querySelectorAll('.radio-button-orange')
      allRadio.forEach(itemOrange => {
         itemOrange.classList.remove('active')
      })
const radio = document.getElementById('orange-'+item.id)
radio.classList.add('active')
   })
})

cover.addEventListener("click", function(){
   textNext.classList.remove("active")
   backModal.classList.remove("active")
   document.body.classList.remove("no-scroll")
})

respond.addEventListener("click", function(){
textProducts.classList.add("active")
textNext.classList.remove("active")
})

bottomPart.addEventListener("click", function(){
   freeTraining.classList.add("active")
   textProducts.classList.remove("active")
})


itemsCover.addEventListener("click", function(){
   textProducts.classList.remove("active")
   backModal.classList.remove("active")
})
trainingCross.addEventListener("click", function(){
   freeTraining.classList.remove("active")
   backModal.classList.remove("active")
})
const array = [
 {
   name:"Саша",
   age:20
 },
 {
   name:"Дима",
   age:25
 },
 {
   name:"Вика",
   age:30
 },
]
console.log(array.map(item=>`<p>${item.name}</p>`))










 function test(name,age){
console.log("hello")
 }
 test()


