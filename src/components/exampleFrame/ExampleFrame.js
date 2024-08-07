import './example-frame.scss'

const ExampleFrame = ({screen}) => {

    return(
        <div className="example">
            <h6>Code: zone - example</h6>
            <img src={screen}  width="900px"/>
        </div>
    )
};

export default ExampleFrame;