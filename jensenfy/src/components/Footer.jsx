import React from 'react'

function Footer() {
return (

    <div>
        <div  className  = "main-footer">
        <div className ="container">
            <div className ="row">
                {/* Colum 1 */}
                <div className = "col-md-3 col-sm-6">
                    <h4>Jensenfy group 4 </h4>
        <ul className = "list-unstyled">
        <li>Contact</li>
        <li>Abi</li>
        <li>Santiago, Chille</li>
        <li>Music site in the world</li>  
        </ul> 
                </div>
                  {/* Colum 2 */}
                <div className = "col-md-4 col-sm-7">
                    <h4> Jensenfy group 4 </h4>
        <ul className = "list-unstyled">
        <li>Contact</li>
        <li>Olle</li>
        <li>Buenos Aires, Argentina </li>
        <li>Music site in the world</li>  
        </ul> 
                </div>
                  {/* Colum 3 */}
                <div className = "col-md-3 col-sm-6">
                    <h4> Jensenfy group 4 </h4>
        <ul className = "list-unstyled">
        <li>Contact</li>
        <li>Bluecrown</li>
        <li> Wellington, New Zeeland</li>
        <li>Music site in the world</li>  
        </ul> 
                </div>
                  {/* Colum 4 */}
                <div className = "col-md-3 col-sm-6">
                    <h4> Jensenfy group 4 </h4>
        <ul className = "list-unstyled">
        <li>Contact</li>
        <li>BigBadDawg</li>
        <li>Mexico City, Mexico</li>
        <li>Music site in the world</li>  
        </ul> 
                </div>
                {/* Colum 5 */}
                <div className = "col-md-5 col-sm-5">
                    <h4>  Jensenfy group 4 </h4>
        <ul className = "list-unstyled">
        <li>Contact</li>
        <li>Per</li>
        <li>Bogotá, Colombia</li>
        <li>Music site in the world</li>  
        </ul> 
                </div>   
            </div>
            {/* Footer Bottom */}
            <div className ="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()}-Music City Guide App - All Rights
                Reserved

            </p>

            </div>
        </div>

        </div>
    </div>
)
}

export default Footer