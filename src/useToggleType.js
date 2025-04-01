import useToggle from './useToggle'

const useToggleType = () => {
    const {state: openMenu, handleToggle: toggleMenu} = useToggle(false)
    const {state: openSearch, handleToggle: toggleSearch} = useToggle(false)

    return {openMenu, openSearch, toggleMenu, toggleSearch}
}

export default useToggleType