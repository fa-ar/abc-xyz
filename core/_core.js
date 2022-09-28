'use strict'

///
function create ( tag, { attributes={}, children=[] } = {} ) {

    // create element
    const virtualElement = Object.create ( null )

    Object.assign ( virtualElement, {

        tag, 
        attributes,
        children,
    
    } )

    return virtualElement

}

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
function render ( { tag, attributes, children } ) {
 
    // create the actual DOM element
    const element = document.createElement ( tag )
    
    // add all attributes as specified in virtualNode.attributes
    for ( const [ key, value ] of Object.entries ( attributes ) ) {

        element.setAttribute ( key, value )

    }

    // append all children 
    for ( const child of children ) {

        element.appendChild ( determineNodeType ( child ) )

    }

    //

    return element

}


///
function add ( virtualNode, container ) {

    container.appendChild ( virtualNode )

    return virtualNode

}


///
function remove () {}


/// Exports
export { create, render, add, remove, determineNodeType }