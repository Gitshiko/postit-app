function Button(props) {
    const {rounded, buttonText} = props;
    
    return (                   
        <button className={`button ${rounded ? 'round': ''}`}>
        {buttonText}
        </button>        
                
    )
}

export default Button