import reactLogo from '../assets/react.svg'

function Header() {
    return (
        <header className='w-full my-auto fixed top-0 bg-cyan-50'>
            <div className='flex gap-2 items-center w-full p-4   max-w-11/12'>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react my-auto" alt="React logo" />
                </a>
                <h3>Vite + React + Tailwind CSS</h3>
            </div>
        </header>
    )
}

export default Header