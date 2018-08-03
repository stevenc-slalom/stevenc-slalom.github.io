window.onload=function(){
    alert('Hello World!');
    
    $date = moment().startOf('week')
    $p1start = $date.add(-14,'day')
    alert($p1start);
}
