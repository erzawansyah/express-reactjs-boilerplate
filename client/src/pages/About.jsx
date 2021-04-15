import Switcher from '../atoms/Switcher'

export const About = () => {
    return (
        <div className="h-full">
            <div className="grid h-full grid-cols-6 gap-6 md:grid-cols-12 place-content-center">
                <h1 className="col-span-6 -mb-6 text-4xl font-bold text-center md:col-span-12 dark:text-blueGray-50">
                    About The Creator and Me
                </h1>
                <p className="col-span-6 text-center md:col-span-12 dark:text-blueGray-200">
                    In this page, you'll be tested a context made by me. I made atoms which is a switcher
                </p>


                <div className="flex items-center justify-center col-span-6 col-start-4 bg-white h-96">
                    <Switcher />
                </div>
            </div>
        </div>
    )
}
