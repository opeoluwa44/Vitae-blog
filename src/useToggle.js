import {useCallback, useState} from 'react'

const useToggle = (initialValue) => {
    const [state, setState] = useState(initialValue)

    const handleToggle = useCallback(
      () => {
        setState(!state)
      },
      [state],
    )
    

    return {state, handleToggle}
}

export default useToggle