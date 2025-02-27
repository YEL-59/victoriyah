import logo from '@/assets/Logo.png';
import managePost from '@/assets/icons/manage-post.svg';
import exchange from '@/assets/icons/exchange.svg';
import favourite from '@/assets/icons/favourite.svg';
import messages from '@/assets/icons/messages.svg';
import notification from '@/assets/icons/notification.svg';
import setting from '@/assets/icons/setting.svg';
import { NavLink } from 'react-router';

function Sidebar() {
    const sidebars = [
        {
            label: 'manage post items',
            icon: managePost,
            path: '/dashboard/',
        },
        {
            label: 'Exchange Request',
            icon: exchange,
            path: 'exchange-request/',
        },
        {
            label: 'favourite',
            icon: favourite,
            path: 'favourite/',
        },
        {
            label: 'messages',
            icon: messages,
            path: 'messages/',
        },
        {
            label: 'notification',
            icon: notification,
            path: 'notification/',
        },
        {
            label: 'setting',
            icon: setting,
            path: 'setting/',
        },
    ];

    return (
        <div className='border border-[#E8E8E8] px-8 py-6'>
            <div className='flex flex-col gap-20 items-center'>
                <img src={logo} alt="logo" />
                <div className='flex flex-col gap-4'>
                    {sidebars.map((sidebar, index) => (
                        <NavLink
                            key={index}
                            to={sidebar.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-4 rounded-[32px] px-10 py-4 ${
                                    isActive ? 'bg-[#B5F169]' : 'bg-transparent'
                                }`
                            }
                        >
                            <img src={sidebar.icon} alt={sidebar.label} />
                            <p className='text-lg font-semibold leading-[164%] capitalize'>{sidebar.label}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;