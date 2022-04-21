import React from 'react';
import propType from "prop-types";
import { Link } from 'react-router-dom';

// function ReferenceInfo({id,title,desc}){
//     return (
//         <tr>
//             <td className="reference__num">{id}</td>
//             <td className="reference__title">{title}</td>
//             <td className="reference__desc">
//                 <Link to={{
//                     pathname : "/refer-detail",
//                     state: {id,title,desc}
//                 }}>{desc.slice(0, 180)}</Link></td>
//         </tr>
//     )
// }



// function ReferenceCont({refer}) {
//   return (
//       <section className="refer__cont">
//         <div className="container">
//             <div className="refer__inner">
//                 <h2>CSS REFERENCE</h2>
//                     <table>
//                         <colgroup>
//                             <col style={{width: "10%"}} />
//                             <col style={{width: "20%"}} />
//                             <col style={{width: "70%"}} />
//                         </colgroup>
//                         <tbody>
//                             {refer.map(txt=>(
//                                 <ReferenceInfo 
//                                     id={txt.id}
//                                     title={txt.title}
//                                     desc={txt.desc}

//                                     key={txt.title}
//                                 />
//                             ))}
//                         </tbody>
//                     </table>
//             </div>
//         </div>
//       </section>
//   )
// }

function ReferCont({id, title, desc, use, tag, view, version, element, Accessibility, CrossBroswing, Definition, image, link, mdn, w3c}){
    return (
        <li>
            <Link to={{
                pathname: "refer-detail",
                state: {id, title, desc, use, tag, view, version, element, Accessibility, CrossBroswing, Definition, image, link, mdn, w3c}
            }}>
                <span className="num">{id}</span>
                <span className="title">{title}</span>
                <span className="desc">{desc}</span>
                <span className="use">{use}</span>
            </Link>
        </li>
    )
}

ReferCont.propType = {
    id: propType.number.isRequired,
    title: propType.string.isRequired,
    desc: propType.string.isRequired,
    use: propType.string.isRequired,
}

export default ReferCont