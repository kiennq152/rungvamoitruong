import { Link } from 'react-router-dom';

const Journal = ({date,no,link,note}) => {
  
  return (
    <div className="issue-summary media">
    <div className="media-left">
      <a className="cover" href={link}>
      </a>
    </div>
    <div className="media-body" style={{
          fontFamily: "Arial",
          borderBottomWidth: 0.05,
          borderBottomColor: 'black',
          borderBottomStyle: 'solid'}}>
        <a className="title" style={{
          fontWeight: 'bold',
          }}>
          Tạp chí Rừng và Môi trường số {note} 
        </a>
        <br/>
        <div className="description"> Ngày đăng: {date}
        </div>
        <div className="description"> Miêu tả: {}
        </div>
        <div><Link to={{pathname: '/journalpage', state:no}}> Xem chi tiết</Link></div>
        <Link to={{pathname: '/journalpage', state:no}}><img src={link} height="250"  /> </Link>
     
    </div>
  </div>
  );
};
export default Journal;