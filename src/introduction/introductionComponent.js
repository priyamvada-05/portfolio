import React from 'react';
import './introductionComponent.scss';
import Img from '../assest/img.png';
import Data from '../assest/data.png';
import Typewriter from 'typewriter-effect';

class IntroductionComponent extends React.Component{

	constructor(){
		super()
		this.state={
			status:true,
			write:false
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState((prevState)=>({
				write: !prevState.write,
				status: !prevState.status
			}))
		}, 5000)
	}

	componentDidUpdate(){
		setTimeout(()=>{
			this.setState((prevState)=>({
				write: !prevState.write,
				status: !prevState.status
			}))
		}, 5000)
	}

	render(){	
		console.log('status')
		console.log(this.state.status)
	return(
	 	<div className="introduction">

	      	<div className='title'>
	        <h1 className="hero-title load-hidden">
	        <div className='w3-animate-zoom'>
	          &#123; ...Hi, my name is <span className="text-color-main">Pranshul Pandey, I'm a </span>
	          <br />
	          {!this.state.write?
(	          <Typewriter onInit={(typewriter) => {
						    typewriter.typeString()
						      .callFunction(() => {

						      })
						      .pauseFor(5000)
						      .callFunction(() => { 

						       })
						      .deleteAll()

						      .start()
						  }}

						    options={{
							    strings: ['Web Developer'],
							    autoStart: true,
							    loop: true,
							  }}

							 style={{
							 	color: '#0cf'
							 }}>
  					</Typewriter>)
  					:null
  				}
  					{this.state.write?
  					(<Typewriter onInit={(typewriter) => {
  											    typewriter.typeString()
  											      .callFunction(() => {
  											      })
  											      .pauseFor(5000)
  											      .callFunction(() => { 
  					
  											       })
  											      .deleteAll()
  					
  											      .start()
  											  }}
  					
  											    options={{
  												    strings: ['Data Scientist'],
  												    autoStart: true,
  												    loop: true,
  												  }}
  					
  												 style={{
  												 	color: '#0cf'
  												 }}>
  					  					</Typewriter>)
  					:null
  				}
	           &#125;
	        </div>
	        </h1>

	        <button className="btn btn1">
	          Know more
	        </button>

	        </div>
	        <div className='img'>
	        {	this.state.status?
	        	<img className='img1' src={Img} alt='img' height='512px' width='auto' />
	        	: <img className='img1' src={Data} alt='img' height='512px' width='auto' />
	        }

	        </div>


	    </div>

		)
}
}

export default IntroductionComponent
