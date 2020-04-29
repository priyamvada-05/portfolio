import React from 'react';
import './singleProjectComponent.scss';
import Img1 from '../../assest/Capture1.PNG';
import Img2 from '../../assest/Capture2.PNG';
import Img3 from '../../assest/Capture3.PNG';
import Img4 from '../../assest/Capture4.PNG';
import Img5 from '../../assest/Capture5.PNG';
import ImgD from '../../assest/CaptureData.PNG';
import ImgChat from '../../assest/Capture.PNG';
import Tilt from 'react-tilt';
import ScrollAnimation from 'react-animate-on-scroll';

const SingleProjectComponent = (props)=>{

	const ImageArray=[Img2,ImgChat,ImgD, Img1, Img3, Img4, Img5]
	return(
		<div class="row">
		
	    	<div class="col-lg-5 col-sm-12">
              <div class="text">
                <h3 class="text-title">{props.title}</h3>
                <div className='para'>
                  <p class="mb-4">
                  	{props.p1}
                  </p>
                  <p class="mb-4">
                  	{props.p2}
                  </p>
                </div>
				<a href={props.link} target="_blank" class="button">View Site</a>
              </div>
	    	</div>
	    	

	    	<div class="col-lg-7 col-sm-12">
              <div class="image">
					<Tilt className="Tilt shadow-4" options={{ max : 15 }} style={{ height: 350, width: 650 }} >
						 <div className="Tilt-inner"> 
						 	<img src={ImageArray[props.image]} alt='logo' height='350px' width='650px' />
						 </div>
					</Tilt>
              </div>
	    	</div>



    	</div>
		)
}

export default SingleProjectComponent