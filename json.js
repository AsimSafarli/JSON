
         var xmlhttp =new XMLHttpRequest();
         xmlhttp.open("Get","json.json",true);
         xmlhttp.send();
         xmlhttp.onreadystatechange=function(){
            if (this.readyState===4 && this.status===200){
            var obj =JSON.parse(this.responseText);
            console.log(obj)
            }
         }

         /*WE can write "json.json" instead link for example*/
         var objects =new XMLHttpRequest();
         objects.open("Get","https://jsonplaceholder.typicode.com/posts",true);
         objects.send();
         objects.onreadystatechange=function(){
            if (this.readyState===4 && this.status===200){
            var obj1 =JSON.parse(this.responseText);
            console.log(obj1)
            }
         }