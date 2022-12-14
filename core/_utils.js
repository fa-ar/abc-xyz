
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
/// function that determines the type of node
function determineNodeType ( virtualNode ) {
    
    if ( typeof virtualNode === 'string') {

        
        return document.createTextNode ( virtualNode ) 

    }

    else {

        return render ( virtualNode )        

    }

}

///
export { applyClasses, determineNodeType }