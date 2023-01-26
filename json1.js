function submit(){
    var  obj={
         "name":'Asim',
         "lastname":'Seferli',
         "birthday":'2003'
     }
     var full =JSON.stringify(obj);
     window.location='json-read.php?json='+full
 }