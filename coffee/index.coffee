jQuery ($) ->
    # initialize counter
    if Modernizr.localstorage
        if localStorage["count"]
            count = parseInt(localStorage["count"])
        else
            localStorage["count"] = 0
            count = 0
    else
        count = 0

    $count = $("#count")    # get element
    $count.html count       # set element text
    disabled = false
    
    # button click
    elem = $("#button")
    animString = "animated flash"
    elem.on 'click', ->
        if not disabled
            localStorage["count"] = 1 + parseInt(localStorage["count"]) if Modernizr.localstorage
            count += 1
            $count.html count

            # start flash
            $count.addClass(animString)
            elem.addClass(animString)
            disabled = true
            
            # stop flash
            window.setTimeout ( ->
                $count.removeClass(animString)
                elem.removeClass(animString)
                window.setTimeout ( ->
                    disabled = false
                ), 10 * 1000
            ), 2000
        else
            alert "No way you took another drink that fast, wait a few seconds!"
    
    # reset click
    reset = $("#reset")
    reset.on 'click', ->
        x = Math.floor(Math.random() * 15)
        y = Math.floor(Math.random() * 15)
        correct = x + y
        answer = prompt("Prove that you're sober to reset your count:\n#{x} + #{y} = ")
        
        if parseInt(answer) is correct
            localStorage["count"] = 0 if Modernizr.localstorage
            count = 0
            $count.html count
            disabled = false
        else
            alert "Sure you're not still buzzed? That was an easy problem..."

