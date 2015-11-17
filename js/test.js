







var myArray = [
  {
      'top': '50%',
      'left': '50%',
    //'margin-top': '-100px',
    //'margin-left': '-250px'
  
  },
  {
      'width': '100px' 
  }
];


$(function(){
    $(".big_logo svg").css(myArray[1]);
    $(".big_logo").css(myArray[0]);
});