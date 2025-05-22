import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Autocomplete from './Autocomplete/Autocomplete'
import { OptionType } from './Autocomplete/types'

function Header() {
    const [selection, handleSelection] = useState<OptionType>()
    return (
        <>
            <header className='w-full my-auto p-4 fixed top-0 bg-cyan-50 grid grid-cols-[auto_1fr_1fr] gap-4 items-center'>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react my-auto" alt="React logo" />
                </a>
                <h2 className='text-start'>Searchable Autocomplete using react-select</h2>

                <Autocomplete placeholder="Search colors..." handleSelection={handleSelection} isClearable/>

            </header>
            {!!selection &&
                <p className='pl-4'>
                    Selected option: {selection?.label}
                </p>}
        </>
    )
}

export default Header