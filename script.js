const baseApparelForm = document.getElementById( 'baseApparelForm' );
const baseApparelInput = document.getElementById( 'baseApparelInput' );
const baseApparelTitle = document.getElementById( 'baseApparelTitle' );
const baseApparelComingSoon = document.getElementById( 'baseApparelComingSoon' );

const iconError = document.getElementById( 'iconError' );
const errorMsg = document.getElementById( 'errorMsg' );


function isEmail( emailAdress ){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return ( emailAdress.match( regex ) ) ? true : false;
};

function checkEmail( e ) {
    e.preventDefault();

    if ( baseApparelInput.classList.contains( 'invalid' ) ) {
        baseApparelInput.classList.remove( 'invalid' );
        iconError.removeAttribute( 'style' );
        errorMsg.removeAttribute( 'style' );
    };


    if ( isEmail( baseApparelInput.value ) ) {
        document.getElementById( 'baseApparelTitle' ).remove();

        let newHeader = document.createElement( 'h1' );
        newHeader.setAttribute( 'id', 'baseApparelTitle' );
        newHeader.innerHTML = 
        `
        a big
        <strong>
            thank you!
        </strong>
        `;

        baseApparelComingSoon.prepend( newHeader );
        baseApparelInput.value = '';
    } else {
        document.getElementById( 'baseApparelTitle' ).remove();

        let newHeader = document.createElement( 'h1' );
        newHeader.setAttribute( 'id', 'baseApparelTitle' );
        newHeader.innerHTML = 
        `
        We're
        <strong>
            coming soon
        </strong>
        `;

        baseApparelComingSoon.prepend( newHeader );

        baseApparelInput.classList.add( 'invalid' );
        iconError.style.display = 'inline';
        errorMsg.style.display = 'block';
    }
};

baseApparelForm.addEventListener( 'submit', checkEmail );