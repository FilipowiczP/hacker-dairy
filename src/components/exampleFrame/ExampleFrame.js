import './example-frame.scss'

const ExampleFrame = ({screen}) => {

    return(
        <div className="example">
            <h1>Code: zone - example</h1>
            <img src={screen}  width="900px"/>
        </div>
    )
};

export default ExampleFrame;