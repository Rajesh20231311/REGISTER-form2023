    function resume(){
        let firstname;
        firstname=document.getElementById('firstname').value;
        let lastname;
        lastname=document.getElementById('lastname').value;
        console.log(firstname);
        console.log(lastname);
        document.getElementById('name').innerHTML=firstname;
        document.getElementById('last').innerHTML=lastname;

        let mailid;
        mailid=document.getElementById('mailid').value;
        let mobileno;
        mobileno=document.getElementById('mobileno').value;
        console.log(mailid);
        console.log(mobileno);
        document.getElementById('mail').innerHTML=mailid;
        document.getElementById('no').innerHTML=mobileno;
        let address1;
        address1=document.getElementById('address1').value;
        console.log(address1);
        document.getElementById('address').innerHTML=address1;
        let city;
        city=document.getElementById('city').value;
        console.log(city);
        document.getElementById('dst').innerHTML=city;
        let state;
        state=document.getElementById('state').value;
        console.log(state);
        document.getElementById('st').innerHTML=state;
        let dob;
        dob=document.getElementById('dob').value;
        console.log(dob);
        document.getElementById('date').innerHTML=dob;





    }