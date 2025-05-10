import { Home, Calendar, BarChart } from 'lucide-react';

function Footer({activeTab, setActiveTab}){
  return (
    <footer>
      <nav>
        <button onClick={()=>setActiveTab('home')} >
          <Home size={20}/><div>ホーム</div>
        </button>
        <button onClick={()=>setActiveTab('calendar')} >
          <Calendar size ={20}/><div>カレンダー</div>
        </button>
        <button onClick={()=>setActiveTab('calendar')} >
          <BarChart size ={20}/><div>統計画面</div>
        </button>
      </nav>
    </footer>
  )

}


export default Footer;