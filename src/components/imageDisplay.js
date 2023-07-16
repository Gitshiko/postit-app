function ImageDisplay(props){
    const {imgSource , captionText, hasBorder} = props;
    return (
        <figure>
            <img 
            src={imgSource} alt="" className={hasBorder ? 'withBorder' : ""} />
            <figcaption>{captionText}</figcaption>
        </figure>
    )

}

export default ImageDisplay