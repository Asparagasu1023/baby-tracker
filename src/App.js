import {useState} from 'react'
import { Home, Calendar, BarChart } from 'lucide-react';

//下側に存在するフッターのコンポーネント
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
function App() {
  const [activeTab,setActiveTab] = useState('home')

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        {activeTab==='home' && <p>ホーム画面</p>}
        {activeTab==='calendar' && <p>カレンダー画面（実装予定）</p>}
        {activeTab==='stats' && <p>統計画面（実装予定）</p>}
      </main>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab}></Footer>
    </div>
  );
}

export default App;


