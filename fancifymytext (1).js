    //alert("Hello world!");
    var Moo_button = document.getElementById("MakeMoo()");
    var Bigger_button = document.getElementById("makeBig()");


    makeBig().addEventListener("change", function(){
        textarea.style.fontSize="24pt";
    })   

    document.getElementsByName("fancify")[0].addEventListener("change",function(){
        textarea.style.fontWeight="bold";
        textarea.style.color="blue";
        textarea.style.textDecoration="underline"
        alert("styles added to the text area");
    })

    document.getElementsByName("fancify")[1].addEventListener("change",function(){
        textarea.style.fontWeight="normal";
        textarea.style.color="black";
        textarea.style.textDecoration="none"
        alert("styles removed from the text area");
    })
    
    MakeMoo().addEventListener("change", function(){
        textarea.style.textTransform="uppercase";
        let str=textarea.value.split(".");
        let str2=str.join("-Moo");
        textarea.value=str2;
    })
