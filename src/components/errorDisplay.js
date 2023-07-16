function ErrorDisplay(){
    const error = true; //boolean

    return(
        <div>
            {
                error === true ?
                <p>Error</p>
                :
                <h3>No Error, Well Done</h3>
            }
        </div>

    )

}
export default ErrorDisplay