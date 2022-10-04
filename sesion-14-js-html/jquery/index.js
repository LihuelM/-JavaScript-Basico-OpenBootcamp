// $(selector).acción()

    $(() => {
    
        $(".btn").click(() => {
            console.log("Hola, estoy utilizando jQuery")
        })
            
        $("li").dblclick(() => {
            $("h1").css({ color: "red" })
        })
    
        $(".new-element").click(() => {
            // $("ul").append("<li>New Element</li>")
            $("ul").prepend("<li>New Element</li>")
        })
    
        $("li").mouseenter((elem) => {
            elem.target.style.color = "blue"
        })
    
        $("li").mouseleave(elem => {
            elem.target.style.color = "black"
        })
    
    })