import Journal from '../components/Journal';
import styled from 'styled-components';

import jor57 from '../images/Bia/Bia so 57.jpg';
import jor58 from '../images/Bia/Bia so 58.jpg';
import jor59 from '../images/Bia/Bia so 59.jpg';
import jor60 from '../images/Bia/Bia so 60.jpg';
import jor6162 from '../images/Bia/Bia so 61+62.jpg';
import jor6364 from '../images/Bia/Bia so 63+64.jpg';
import jor65 from '../images/Bia/Bia so 65.jpg';
import jor66 from '../images/Bia/Bia so 66.jpg';
import jor67 from '../images/Bia/Bia so 67.jpg';
import jor68 from '../images/Bia/Bia so 68.jpg';
import jor6970 from '../images/Bia/Bia so 69+70.jpg';
import jor71 from '../images/Bia/Bia so 71.jpg';

const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const JournalList = () => {
    return (
        <div style= {{marginTop: "80px", textAlign: "left"}}>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 57</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
            <cover>
                <img src={jor57} height="200"/>
                <Journal />
                <div>Số 58</div>
            </cover>
        </div>
        
    );
};
export default JournalList;