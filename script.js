let base_url = "handler.php";
        var today = new Date();
        var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var x = document.getElementById("home");
            var y= document.getElementById("register_form");
            var z= document.getElementById("registrant_list");
            x.style.display="block";
                y.style.display="none";
                z.style.display="none";
        function initial(){
            if(x.style.display==="none")
            {
                x.style.display="block";
                y.style.display="none";
                z.style.display="none";
            }
        }
        function initial1(){
            if(y.style.display==="none")
            {
                document.getElementById("temp").innerHTML="";
                x.style.display="none";
                y.style.display="block";
                z.style.display="none";
            }
        }
        function initial2(){
            if(z.style.display==="none")
            {
                x.style.display="none";
                y.style.display="none";
                z.style.display="block"; 
                initial7();
            }
        }
        function initial3()
        {   
            var b,c,d,f,g,e;
            b=document.getElementById("i1").value;
            c=document.getElementById("i2").value;
            d=document.getElementById("i3").value;
            f=document.getElementById("i5").value;
            g=document.getElementById("i6").value;
            e=document.getElementById("i7").checked;
            const rbs = document.querySelectorAll('input[name="gender"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
    
            if(b == ""){
				document.getElementById('alt1').innerHTML =" **Please fill the Last Name field";
				return false;
			}
            else if((b.length <= 2) || (b.length > 20)) {
				document.getElementById('alt1').innerHTML =" **First Name length must be between 2 and 20";
                return false;
			}
            else if(!isNaN(b)){
				document.getElementById('alt1').innerHTML =" **only characters are allowed";
				return false;
			}
            else{
                document.getElementById('alt1').innerHTML ="";
            }
            if(c == ""){
				document.getElementById('alt2').innerHTML =" **Please fill the Last Name field";
				return false;
			}
            else if((c.length <= 2) || (c.length > 20)) {
				document.getElementById('alt2').innerHTML =" **Last Name length must be between 2 and 20";
                return false;
			}
            else if(!isNaN(c)){
				document.getElementById('alt2').innerHTML =" **only characters are allowed";
				return false;
			}
            else{
                document.getElementById('alt2').innerHTML ="";
            }

            

            var at="@"
            var dot="."
            var lat=d.indexOf(at)
            var lstr=d.length
            var ldot=d.indexOf(dot)
            if(d == "")
            {
                document.getElementById('alt3').innerHTML ="**Please enter E-mail ID";
                return false;
            }
            if (d.indexOf(at)==-1){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.indexOf(at)==-1 || d.indexOf(at)==0 || d.indexOf(at)==lstr){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.indexOf(dot)==-1 || d.indexOf(dot)==0 || d.indexOf(dot)==lstr){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.indexOf(at,(lat+1))!=-1){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.substring(lat-1,lat)==dot || d.substring(lat+1,lat+2)==dot){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.indexOf(dot,(lat+2))==-1){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else if (d.indexOf(" ")!=-1){
                document.getElementById('alt3').innerHTML ="**Invalid E-mail ID";
                return false;
            }
            else
            {
                document.getElementById('alt3').innerHTML ="";
            }

            if(selectedValue == null)
            {
                document.getElementById('alt4').innerHTML =" **Select Your Gender";
                return false;
            }
            else{
                document.getElementById('alt4').innerHTML ="";
            }

            if(g == ""){
				document.getElementById('alt6').innerHTML =" **Please fill the Mobile Number field";
				return false;
			}
			if(isNaN(g)){
				document.getElementById('alt6').innerHTML =" **User must write digits only not characters";
				return false;
			}
			if(g.length!=10){
				document.getElementById('alt6').innerHTML =" **Mobile Number must be 10 digits only";
				return false;
            }
            else if(g==0000000000)
            {
                document.getElementById('alt6').innerHTML =" **Mobile Number must be 10 digits only";
				return false;
            }
            else{
                document.getElementById('alt6').innerHTML ="";
            }
            
           
            if(e == false)
            {
                document.getElementById('alt7').innerHTML =" **Required";
				return false;
            }
            else{
                document.getElementById('alt7').innerHTML ="";
            }

            
            var to = new Date();
            var h = to.getHours() + ":" + to.getMinutes() + ":" + to.getSeconds();
            
            var k={fname: b, lname: c, email: d, gender: selectedValue, city: f, mobile: g, booking_time: h};
            var k = JSON.stringify(k);
            initial6(k);
            document.getElementById("form_register").reset();
            
        }

        function initial6(k){
            let url = base_url + "?req=insert&object="+k; 
            $.get(url,function(data,success){
                if(data=="Form successfully submitted")
                {
                    document.getElementById("temp").innerHTML=data;
                }
                else
                {
                    document.getElementById("temp1").innerHTML=data;
                }
                
            });
        }


        function initial7()
        {
            let url = base_url + "?req=list";
            $.get(url,function(data,success){
                if(data.length == 0)
                {
                    document.getElementById("demo1").innerHTML="<h3><div class='container text-center'>Noone registered till now. Be the first one to register.</div></h3>";
                }
                else{
                        var text;
                        text= "<table class='table table-striped table-bordered table-hover'><thead class='thead-dark'>";
                        text=text + "<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>City</th><th>Phone</th><th>Booking Time</th></tr></thead><tbody>";
                        for(i=0;i<data.length;i++)
                        {
                            text= text + "<tr><td>" + data[i].fname+ "</td><td>" + data[i].lname + "</td><td>" + data[i].email + "</td><td>" + data[i].gender + "</td><td>" + data[i].city + "</td><td>" + data[i].mobile + "</td><td>" + data[i].booking_time + "</td></tr>";
                        }
                        text += "</tbody></table>";
                        document.getElementById("demo1").innerHTML=text;         
                    }   
            });
        }
        