import SampleButton from '../atoms/SampleButton'

const SampleComponent = (props) => {
    return (
        <div className="bg-white rounded-md shadow-md min-h-64 md:min-h-72 min-w-48">
            <img className="rounded-t-md" src="https://source.unsplash.com/random/600x300" alt="Randomly from Unsplash" />
            <h2 className="p-1 mt-2 font-semibold text-center" >This is an example image</h2>
            <div className="px-3 pb-4 space-y-2 text-2xs">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, ipsam! Ex repellat expedita ipsa, eos sequi adipisci. Sunt, deserunt, inventore ab, culpa harum maiores laudantium id cupiditate temporibus odio eos!
                </p>
                <div className="text-center">
                    <SampleButton 
                        text={props.buttonText}
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default SampleComponent