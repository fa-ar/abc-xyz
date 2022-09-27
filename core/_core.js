/// Imports
import { determineNodeType } from './_utils.js'

/// creator function
function create ( tag, { attributes={}, children=[] } ) {

    // create element
    const virtualElement = Object.create ( null )

    Object.assign ( virtualElement, {

        tag, 
        attributes,
        children

    } )

    return virtualElement

}

/// rendering function
function render ( { tag, attributes, children } ) {

    // create the actual DOM element
    const element = document.createElement ( tag )

    // add all the attributes specified in the virtualNode.attributes
    for ( const [ key, value ] of Object.entries ( attributes ) ) {

        element.setAttribute ( key, value )

    }

    // append all the children
    for ( const child of children ) {

        element.appendChild ( determineNodeType ( child ) )

    }

    return element

}


/// 
function add ( virtualNode, container ) {

    container.replaceWith ( virtualNode )

    return virtualNode

}

/// Exports

export { create, render, add }