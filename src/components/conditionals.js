export default function ConditionalDisplay(props) {
    const {value, limit} = props;
    //const x = 5;
    return (
        <>
        {
        value > limit ?
        <div style={{backgroundColor: 'red'}}>
        {value} is higher than {limit}
        </div>
        : value < limit ?
        <div style={{backgroundColor: 'green'}}>
        {value} is lower than {limit}
        </div>
        :
        <div style={{backgroundColor: 'orange'}}>
        {value} is equal to {limit}
        </div>
        }       
        </>
    )
}

