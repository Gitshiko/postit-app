function PostIt(props){
    //const title = props.title;
    //const message = props.message;
    const {title, message, colour, textColour} = props;
    const dynamicStyles = {backgroundColor: colour, color: textColour}

    return (
        <div style={dynamicStyles} className="postit"> 
            <h3>{title}</h3> 
            <p>{message}</p>  
        </div>
    );
}

export default PostIt;