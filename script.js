const form_validate=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("date").value;
    const acceptterms=document.getElementById("acceptTerms").checked;
    var Entries;
    if(localStorage.getItem('user-entries')===null)
    Entries=[];
    else
    Entries=JSON.parse(localStorage.getItem('user-entries'))
    Entries.unshift({
    name:name,
    email:email,
    password:password,
    date:date,
    acceptterms:acceptterms
    })
    localStorage.setItem('user-entries',JSON.stringify(Entries));
    showdata()
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('date').value="";
    document.getElementById('acceptTerms').value="true";
}
    const showdata=()=>{
    var Entries;
    if(localStorage.getItem('user-entries')===null)
    Entries=[];
    else
    Entries=JSON.parse(localStorage.getItem('user-entries'))
    
    var html="";
    
    Entries.forEach((element,intex)=>{
    html += "<tr>";
    html += '<td>' + element.name+"</td>";
    html += '<td>' + element.email+"</td>";
    html += '<td>' + element.password+"</td>";
    html += '<td>' + element.date+"</td>";
    html += '<td>' + element.acceptterms+"</td>";
    html += "</tr>";
    });
    document.querySelector("#regTable tbody").innerHTML=html;
    
    }
    document.onload=showdata();