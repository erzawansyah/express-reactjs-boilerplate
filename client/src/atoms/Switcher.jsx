import { useEffect } from "react"
import { BsSun, BsMoon } from "react-icons/bs";
import { useUIContext } from "../includes/context/UI";

const Switcher = (props) => {

    const { UI, changeUI } = useUIContext()

    const handleSwitch = () => {
        changeUI('dark', !UI.dark)
    }

    const isDark = UI.dark


    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])



    return (
        <button onClick={handleSwitch} className={`transition-all relative w-12 h-6 rounded-full ${isDark ? 'bg-gray-800' : 'bg-amber-400'}`}>
            <div
                id="switcher-thumb"
                className={`flex justify-center items-center p-1 transition-all absolute  w-8 top-1 -m-2 h-8 bg-white shadow-md rounded-full ${isDark ? 'text-blueGray-900' : 'text-amber-500'} ${isDark ? 'left-0' : 'right-0'}`}
            >
                {isDark ? <BsMoon /> : <BsSun />}
            </div>
        </button>
    )
}

export default Switcher