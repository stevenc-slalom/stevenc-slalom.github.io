window.onload=function(){
    alert('Hello World!');
    
    $date = moment().startOf('day').fromNow()
    alert($date);
}
