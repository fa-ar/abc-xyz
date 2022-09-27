/// Imports


///
function create ( tag, { attributes={}, children=[] } ) {

    // create element
    const virtualElement = Object.create ( null )

    Object.assign ( virtualElement, {

        tag, 
        attributes,
        children

    } )

}

///
