
/// function to process all the CSS classes inside a component 
/// keeping an opinionated style 

function applyClasses ( classes=[] ) {

    if ( classes.length === 0 ) {
        
            return null
      
    }

    else {
        
        return classes.toString().replace(/[\,]/gm, ' ')

    }

}

/// function to determine what type of node's being passed down
function determineNodeType ( virtualNode ) {

    if ( typeof virtualNode === 'string' ) {

        let text = document.createElement ( 'p' )
        text.appendChild ( document.createTextNode ( virtualNode ) )

    }

}

///
export { applyClasses, determineNodeType }