import Navbar from '@/components/dashboard/shared/navbar.jsx';
import Sidebar from '@/components/dashboard/shared/sidebar.jsx';
import { Outlet } from 'react-router';

function DashboardLayout() {
  return (
    <div className='grid grid-cols-[20%_80%] h-screen bg-[dashboard-background]'>
        <Sidebar/>
        <div className='flex flex-col'>
            <Navbar/>
            <div className='h-full'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout