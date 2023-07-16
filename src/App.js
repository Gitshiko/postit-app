import logo from './logo.svg';
//css
import './App.css';
//data // here data is an array
import {data} from './data/postitData';
//components
import PostIt from './components/post-it';
import DisplayDate from './components/displayDate';
import Button from './components/button';
import ImageDisplay from './components/imageDisplay';
import ConditionalDisplay from './components/conditionals';


function App() {
     
  return (
    <div className="App">
      <h1>Post it Notes</h1>
      <Button rounded={false} buttonText="This button is square" />

      <div className="container">
        {
        data.map((item, i)=>{
          return (
          <PostIt title={item.title} message={item.message} colour={item.colour} textColour={item.textColour}/>     
          )
        })
        }
      </div>

      <div className="date-container">
        <DisplayDate /> 
      </div>

      <Button rounded={true} buttonText="'Click Me' button is round" />
      <ImageDisplay hasBorder={true} imgSource="https://images.unsplash.com/photo-1689020562921-ba28a34c881d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" captionText="Mountain Range"/>

      <ConditionalDisplay value='9' limit='6'/>
    </div>

  );

}
export default App;

//create an imageDisplay component 
//accepts the following props
//imgSource , captionText, and hasBorder (boolean) 
//should output an image with the path to the image from the imgSource prop, and a caption below it. If hasBorder is set to true, it should add a border (you can either add a class or directly change the style attribute)
//use it in the app js component 
