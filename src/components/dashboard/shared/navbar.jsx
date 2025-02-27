import adminImage from '@/assets/icons/admin-icon.svg';

function Navbar() {
  return (
    <div className="border border-[#E8E8E8] px-8 py-5 flex justify-between">
        <div className='flex flex-col gap-2'>
            <p className="text-base leading-[164%]">Welcome Back</p>
            <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">Ivay</h3>
        </div>
        <div className='flex items-center gap-4'>
            <img src={adminImage} alt="user" />
            <div className='flex flex-col gap-2'>
                <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">Ivay Jack</h3>
                <p className="text-base leading-[164%]">Ivayjack@outlook.com</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar