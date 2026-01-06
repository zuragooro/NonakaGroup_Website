fetch("/parts/header.html")
.then(res=>{
    if(!res.ok){throw new Error("missing");}
    return res.text();
})
.then(html=>{
    document.getElementById("header").innerHTML=html;
})
.catch(err => {console.error(err)});

fetch("/parts/footer.html")
.then(res=>{
    if(!res.ok){throw new Error("missing");}
    return res.text();
})
.then(html=>{
    document.getElementById("footer").innerHTML=html;
})
.catch(err=>{console.error(err)});