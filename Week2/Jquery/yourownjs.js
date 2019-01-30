/*
const toggleActive = () => {
    $('article').toggleClass('active')   
}


$('button').click(toggleActive)



$('button').click(()=>{
    $('*').toggleClass('cool')
    $('div').toggleClass('big')

})*/
$('.container').find('span').text('gotya')

$("input, select").change(function(){
    console.log($(this).val());
    //Saving this data to a database 
    //signing p
})
$('button').on('click', function(){
    $('#menu ul').append('<li>new list item</li>')
})
$('ul').on('click', 'li', function(){
    console.log($(this).text())
})
$('li').on('click', function(){
    //this was useless for new list items
})
$(window).keyup(function(e){
    //console.log(e.key)
})
$(window).scroll(function(e){
    //console.log(e, this)
    //console.log(e.clientY)
    console.log($(this).offset())
})
$("input, select").on("focus", function(){
    console.log("Focus event");
  })


$('form').on('submit', function(e){
    e.preventDefault()

})