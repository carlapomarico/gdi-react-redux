// Exercise 2: Set It Up
// import ImageUploaderForm and FeedList
// write a functional component
// make it a div with a class name of HomePage
// include ImageUploaderForm and FeedList inside of App
// export the Homepage component!


// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into HomePage


// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	 // handle import/inheritance
	 // add a render method


import React from 'react';
import ImageUploaderForm from '../components/ImageUploaderForm';
import FeedList from '../components/FeedList';
import data from '../../data.json';

class HomePage extends React.Component {
	render(){
		return (
		  	<div className="HomePage">      
		      <ImageUploaderForm/>
		      <FeedList pics={data.photos}/>
		    </div>
	  );
	}
}

export default HomePage





