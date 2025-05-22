import reactLogo from '../assets/react.svg'
import Autocomplete from './Autocomplete/Autocomplete'

function Header() {
    return (
        <header className='w-full my-auto p-4 fixed top-0 bg-cyan-50 grid grid-cols-[auto_1fr_1fr] gap-4 items-center'>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react my-auto" alt="React logo" />
            </a>
            <h2 className='text-start'>Searchable Autocomplete using react-select</h2>

            <Autocomplete />

        </header>
    )
}

export default Header