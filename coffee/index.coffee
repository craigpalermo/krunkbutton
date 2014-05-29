jQuery ($) ->
    # initialize counter
    count = 0
    $count = $("#count")
    $count.html count
    disabled = false
    
    # button click
    elem = $("#button")
    animString = "animated flash"

    elem.on 'click', ->
        if not disabled
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
        if confirm "Are you sure you want to reset your counter?"
            count = 0
            $count.html count
            disabled = false
