import React from 'react'
import SampleComponent from '../components/SampleComponent'
import { toast } from 'react-toastify'
import { shuffle } from '../includes/utils/shuffle'


const Home = () => {

    const handleClick = (e) => {
        let color = ['dark', 'error', 'success', 'info', 'success', 'warning ']
        let positionY = shuffle(['bottom', 'top'])
        let positionX = shuffle(['left', 'center', 'right'])
        let position = positionY[0] + "-" + positionX[0] 

        const type = shuffle(color)
        console.log(position)
        toast("Hello, i got " + type[0] + " color from shuffle utils", {
            hideProgressBar: true,
            position: position,
            type: type[0]
        })
    }


    return (
        <div className="h-full">
            <div className="grid h-full grid-cols-6 gap-6 md:grid-cols-12 place-content-center">
                <h1 className="col-span-6 -mb-6 text-4xl font-bold text-center md:col-span-12 dark:text-blueGray-50">
                    Welcome in CRA + Tailwind + Express Boilerplate
                </h1>
                <p className="col-span-6 text-center md:col-span-12 dark:text-blueGray-200">
                    Click any button in any card to get randomize position and color from <pre className="inline align-middle">react-toastify</pre> package
                </p>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
                <div className="col-span-3">
                    <SampleComponent
                        buttonText="Click"
                        onClick={() => handleClick()}
                    />
                </div>
            </div>
        </div>
    )
}


export default Home
