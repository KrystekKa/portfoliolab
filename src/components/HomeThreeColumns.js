import React from "react";

export default function HomeThreeColumns() {
    return (
        <>
            <div className="columns_container">
           <div className="columns">
               <div className="column">
                   <p className="column_number">10</p>
                   <p className="column_title">ODDANYCH WORKÓW</p>
                   <p className="column_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
               </div>
               <div className="column">
                   <p className="column_number">5</p>
                   <p className="column_title">WSPARTYCH ORGANIZACJI</p>
                   <p className="column_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
               </div>
               <div className="column">
                   <p className="column_number">7</p>
                   <p className="column_title">ZORGANIZOWANY ZBIÓREK</p>
                   <p className="column_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
               </div>
           </div>
            </div>
        </>
    );
}