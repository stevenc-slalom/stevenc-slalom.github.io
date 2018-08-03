window.onload=function(){
    alert('Hello World!');
    
    $date = moment().startOf('week')
    $p1start = $date.clone().add(-7,'day')
    $p1end = $date.clone().add(-1,'day')
    $p2start = $date.clone().add(-14,'day')
    $p2end = $date.clone().add(-8,'day')
    alert($p1start);
    alert($p1end);
    alert($p2start);
    alert($p2end);
}
