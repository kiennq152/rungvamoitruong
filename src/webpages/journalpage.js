//file: src/webpages/mybooks.js
import React, { useEffect} from 'react';
import { useLocation} from "react-router-dom";
import styled from 'styled-components';

import jor107 from '../images/Bia/Bia so 107.jpg';
import jor105106 from '../images/Bia/Bia so 105+106.jpg';
import jor104 from '../images/Bia/Bia so 104.jpg';
import jor103 from '../images/Bia/Bia so 103.jpg';
import jor102 from '../images/Bia/Bia so 102.jpg';
import jor101 from '../images/Bia/Bia so 101.jpg';
import jor99100 from '../images/Bia/Bia so 99-100.jpg';
import jor98 from '../images/Bia/Bia so 98.jpg';
import jor97 from '../images/Bia/Bia so 97.jpg';
import jor96 from '../images/Bia/Bia so 96.jpg';
import jor95 from '../images/Bia/Bia so 95.jpg';
import jor9394 from '../images/Bia/Bia so 93+94.jpg';
import jor92 from '../images/Bia/Bia so 92.jpg';
import jor91 from '../images/Bia/Bia so 91.jpg';
import jor90 from '../images/Bia/Bia so 90.jpg';
import jor89 from '../images/Bia/Bia so 89.jpg';
import jor8788 from '../images/Bia/Bia so 87+88.jpg';
import jor86 from '../images/Bia/Bia so 86.jpg';
import jor85 from '../images/Bia/Bia so 85.jpg';
import jor84 from '../images/Bia/Bia so 84.jpg';
import jor83 from '../images/Bia/Bia so 83.jpg';
import jor8182 from '../images/Bia/Bia so 81+82.jpg';
import jor80 from '../images/Bia/Bia so 80.jpg';
import jor79 from '../images/Bia/Bia so 79.jpg';
import jor78 from '../images/Bia/Bia so 78.jpg';
import jor77 from '../images/Bia/Bia so 77.jpg';
import jor7576 from '../images/Bia/Bia so 75+76.jpg';
import jor74 from '../images/Bia/Bia so 74.jpg';
import jor73 from '../images/Bia/Bia so 73.jpg';
import jor72 from '../images/Bia/Bia so 72.jpg';
import jor71 from '../images/Bia/Bia so 71.jpg';
import jor6970 from '../images/Bia/Bia so 69+70.jpg';
import jor68 from '../images/Bia/Bia so 68.jpg';
import jor67 from '../images/Bia/Bia so 67.jpg';
import jor66 from '../images/Bia/Bia so 66.jpg';
import jor65 from '../images/Bia/Bia so 65.jpg';
import jor6364 from '../images/Bia/Bia so 63+64.jpg';
import jor6162 from '../images/Bia/Bia so 61+62.jpg';
import jor60 from '../images/Bia/Bia so 60.jpg';
import jor59 from '../images/Bia/Bia so 59.jpg';
import jor58 from '../images/Bia/Bia so 58.jpg';
import jor57 from '../images/Bia/Bia so 57.jpg';
import jorchuyende2018 from '../images/Bia/Bia so Chuyen de 2018.jpg';

import cont107 from '../images/Mucluc/Muc luc So 107.jpg';
import cont105106 from '../images/Mucluc/Muc luc So 105+106.jpg';
import cont104 from '../images/Mucluc/Muc luc So 104.jpg';
import cont103 from '../images/Mucluc/Muc luc So 103.jpg';
import cont102 from '../images/Mucluc/Muc luc So 102.jpg';
import cont101 from '../images/Mucluc/Muc luc So 101.jpg';
import cont99100 from '../images/Mucluc/Muc luc So 99-100.jpg';
import cont98 from '../images/Mucluc/Muc luc So 98.jpg';
import cont97 from '../images/Mucluc/Muc luc So 97.jpg';
import cont96 from '../images/Mucluc/Muc luc So 96.jpg';
import cont95 from '../images/Mucluc/Muc luc So 95.jpg';
import cont9394 from '../images/Mucluc/Muc luc So 93+94.jpg';
import cont92 from '../images/Mucluc/Muc luc So 92.jpg';
import cont91 from '../images/Mucluc/Muc luc So 91.jpg';
import cont90 from '../images/Mucluc/Muc luc So 90.jpg';
import cont89 from '../images/Mucluc/Muc luc So 89.jpg';
import cont8788 from '../images/Mucluc/Muc luc So 87+88.jpg';
import cont86 from '../images/Mucluc/Muc luc So 86.jpg';
import cont85 from '../images/Mucluc/Muc luc So 85.jpg';
import cont84 from '../images/Mucluc/Muc luc So 84.jpg';
import cont83 from '../images/Mucluc/Muc luc So 83.jpg';
import cont8182 from '../images/Mucluc/Muc luc So 81+82.jpg';
import cont80 from '../images/Mucluc/Muc luc So 80.jpg';
import cont79 from '../images/Mucluc/Muc luc So 79.jpg';
import cont78 from '../images/Mucluc/Muc luc So 78.jpg';
import cont77 from '../images/Mucluc/Muc luc So 77.jpg';
import cont7576 from '../images/Mucluc/Muc luc So 75+76.jpg';
import cont74 from '../images/Mucluc/Muc luc So 74.jpg';
import cont73 from '../images/Mucluc/Muc luc So 73.jpg';
import cont72 from '../images/Mucluc/Muc luc So 72.jpg';
import cont71 from '../images/Mucluc/Muc luc So 71.jpg';
import cont6970 from '../images/Mucluc/Muc luc So 69-70.jpg';
import cont68 from '../images/Mucluc/Muc luc So 68.jpg';
import cont67 from '../images/Mucluc/Muc luc So 67.jpg';
import cont66 from '../images/Mucluc/Muc luc So 66.jpg';
import cont65 from '../images/Mucluc/Muc luc So 65.jpg';
import cont6364 from '../images/Mucluc/Muc luc So 63+64.jpg';
import cont6162 from '../images/Mucluc/Muc luc So 61+62.jpg';
import cont60 from '../images/Mucluc/Muc luc So 60.jpg';
import cont59 from '../images/Mucluc/Muc luc So 59.jpg';
import cont58 from '../images/Mucluc/Muc luc So 58.jpg';
import cont57 from '../images/Mucluc/Muc luc So 57.jpg';
import contchuyende2018 from '../images/Mucluc/Chuyen de 2018.jpg';

const Journalpage = ( {journalnumber} ) => {
  const journumb = journalnumber;
  // const { state } = this.props.location;
  const location = useLocation();
  const state = location.state;
    useEffect(() => {
        document.title = 'Journal '+ state;
    });
    // import bia107 from '../images/Bia/Bia so 107.jpg';
    // import mucluc107 from '../images/Mucluc/Muc luc So 107.jpg';

    const bia = (para) => {
      switch(para) {
        case "107":   return jor107;
        case "105106":   return jor105106;
        case "104":   return jor104;
        case "103":   return jor103;
        case "102":   return jor102;
        case "101":   return jor101;
        case "99100":   return jor99100;
        case "98":   return jor98;
        case "97":   return jor97;
        case "96":   return jor96;
        case "95":   return jor95;
        case "9394":   return jor9394;
        case "92":   return jor92;
        case "91":   return jor91;
        case "90":   return jor90;
        case "89":   return jor89;
        case "8788":   return jor8788;
        case "86":   return jor86;
        case "85":   return jor85;
        case "84":   return jor84;
        case "83":   return jor83;
        case "8182":   return jor8182;
        case "80":   return jor80;
        case "79":   return jor79;
        case "78":   return jor78;
        case "77":   return jor77;
        case "7576":   return jor7576;
        case "74":   return jor74;
        case "73":   return jor73;
        case "72":   return jor72;
        case "71":   return jor71;
        case "6970":   return jor6970;
        case "68":   return jor68;
        case "67":   return jor67;
        case "66":   return jor66;
        case "65":   return jor65;
        case "6364":   return jor6364;
        case "6162":   return jor6162;
        case "60":   return jor60;
        case "59":   return jor59;
        case "58":   return jor58;
        case "57":   return jor57;
        case "chuyende2018":   return jorchuyende2018;

        default:      return <h1>No project match</h1>
      }
    }
    const mucluc = (para) => {
      switch(para) {
        case "107":   return cont107;
        case "105106":   return cont105106;
        case "104":   return cont104;
        case "103":   return cont103;
        case "102":   return cont102;
        case "101":   return cont101;
        case "99100":   return cont99100;
        case "98":   return cont98;
        case "97":   return cont97;
        case "96":   return cont96;
        case "95":   return cont95;
        case "9394":   return cont9394;
        case "92":   return cont92;
        case "91":   return cont91;
        case "90":   return cont90;
        case "89":   return cont89;
        case "8788":   return cont8788;
        case "86":   return cont86;
        case "85":   return cont85;
        case "84":   return cont84;
        case "83":   return cont83;
        case "8182":   return cont8182;
        case "80":   return cont80;
        case "79":   return cont79;
        case "78":   return cont78;
        case "77":   return cont77;
        case "7576":   return cont7576;
        case "74":   return cont74;
        case "73":   return cont73;
        case "72":   return cont72;
        case "71":   return cont71;
        case "6970":   return cont6970;
        case "68":   return cont68;
        case "67":   return cont67;
        case "66":   return cont66;
        case "65":   return cont65;
        case "6364":   return cont6364;
        case "6162":   return cont6162;
        case "60":   return cont60;
        case "59":   return cont59;
        case "58":   return cont58;
        case "57":   return cont57;
        case "chuyende2018":   return contchuyende2018;

        default:      return <h1>No project match</h1>
      }
    }
    const cover = bia(state);
    const cont = mucluc(state);
    return (
        
      <journalview className="heading row">
      <h1 className="title-issue">Tạp chí Rừng và Môi trường số {state}</h1>
      <div className="thumbnail col-md-4">
        <a className="cover" >
            <cover>
                <img src={cover} height="900" />
                <br/>
                <img src={cont} height="900" />
            </cover>
        </a>
      </div>
      <div className="issue-details col-md-8">
        <div className="description">
          <span className="issueinformation">Contents:</span>
          <li>
</li>
        </div>
      </div>
    </journalview>
    );
};
export default Journalpage;


// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//             <a href={'./journallist'+number} className='page-link' >
//               {number+'   '}
//             </a>
//         ))}
//       </ul>
//     </nav>
//   );
// };
