import {useState} from 'react'

import Footer from './component/Footer'
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Status from './pages/Status';

function App() {
  const [activeTab,setActiveTab] = useState('home')

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        {activeTab==='home' && <Home/>}
        {activeTab==='calendar' && <Calendar/>}
        {activeTab==='stats' && <Status/>}
      </main>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab}></Footer>
    </div>
  );
}

export default App;


