import React from 'react';
import './skillsComponent.scss';
import ReactImg from '../assest/react.png';
import AngularImg from '../assest/angular.png';
import ExpressImg from '../assest/express.png';
import PythonImg from '../assest/python.png';
import RImg from '../assest/R.png';
import MongoImg from '../assest/mongo.jpg';


class SkillsComponent extends React.Component{

	constructor(){
		super();
		this.state={
			react:null,
			angular:null,
			express:null,
			python:null,
			r:null,
			mongo:null
		}
	}

	OnChangeIn= (event)=>{
		const {name, value}= event.target;
		console.log('this is change in')
		console.log(name)
		console.log(value)
		this.setState({[name]:true})
	}

	OnChangeOut= (event)=>{
		const {name, value}= event.target;
		console.log('this is change out')
		console.log(name)
		console.log(value)
		this.setState({[name]:false})

	}


	render(){
	return(
		<div className='skills'>
		<div className='text-center padding'>
				<div className='col-12'>
					<h2 className='title'>Skills</h2>
				</div>
				<div className='row'>
				<div className='col-sm-12 col-md-4 social padding'>
				
					<div className='grow'>
					<img src={ReactImg} 
						 onMouseOver={this.OnChangeIn} 
						 onMouseOut={this.OnChangeOut}
						 alt='' 
						 height='190px' 
						 width='' 
						 name='react'
						 className='img'/>
					{ this.state.react ? <p className=''>&#123; React.js &#125;</p>: null}
					</div>
					
				</div>
				<div className='col-sm-12 col-md-4 social padding'>
				<div className='grow'>
					<img src={AngularImg} 
						 onMouseOver={this.OnChangeIn} 
						 onMouseOut={this.OnChangeOut}
						 alt='' 
						 height='190px' 
						 width='' 
						 name='angular'
						 className='img'/>
					{ this.state.angular ? <p className=''>&#123; Angular.js &#125;</p>: null}
				</div>
				</div>
				<div className='col-sm-12 col-md-4 social padding'>
					<div className='grow'>
					<img 
						src={ExpressImg} 
						onMouseOver={this.OnChangeIn}
						onMouseOut={this.OnChangeOut}
						alt='' 
						height='190px' 
						width='' 
						name='express'
						className='img'/>
					{ this.state.express ? <p className=''>&#123; Express.js &#125;</p>: null}
				</div>
				</div>
				</div>

				<div className='row'>
				<div className='col-sm-12 col-md-4 social padding'>
					<div className='grow'>
					<img src={PythonImg} 
						 onMouseOver={this.OnChangeIn} 
						 onMouseOut={this.OnChangeOut}
						 alt='' height='190px' width='' name='python' 
						 className='img'/>
					{ this.state.python ? <p className=''>&#123; Python &#125;</p>: null}
				</div>
				</div>
				<div className='col-sm-12 col-md-4 social padding'>
				<div className='grow'>
					<img src={RImg} 
						 onMouseOver={this.OnChangeIn}
						 onMouseOut={this.OnChangeOut}
						 alt='' height='190px' width='' name='r'
						 className='img'/>
					{ this.state.r ? <p className=''>&#123; R language &#125;</p>: null}
				</div>
				</div>
				<div className='col-sm-12 col-md-4 social padding'>
				<div className='grow'>
					<img src={MongoImg} 
						 onMouseOver={this.OnChangeIn}
						 onMouseOut={this.OnChangeOut}
						 alt='' height='auto' width='' name='mongo'
						 className='img'/>
					{ this.state.mongo ? <p className=''>&#123; Mongo DB &#125;</p>: null}
				</div>
				</div>
				</div>
		</div>
		<hr className='hr' />
		</div>
		)
}
}

export default SkillsComponent