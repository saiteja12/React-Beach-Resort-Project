import React, { Component } from 'react';
// import Hero from '../components/Hero';
import defaultBcg from '../images/room-1.jpeg';
import Banner  from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';




export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };

    }
    static contextType=RoomContext;

    // componentDidMount(){}
    render() {
        const {getRoom}=this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return (<div className='error'>
                <h3>No such Room could be found</h3>
                <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
            </div>);
        }
        const {name,description,price,capacity,size,extras,breakfast,pets,images} = room;
        const [mainImg,...defaultImg]=images;
        
        return (
            <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>

                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {defaultImg.map((item,index)=>{
                        return <img key={index} src={item} alt ={name} />
                    })}
                </div>
            <div className='single-room-info'>
            <article className='desc'>
                    <h3>details</h3>
                    <p>{description}</p>
            </article>
            <article className='info'>
                    <h3>info</h3>
                    <h6>Price : ${price}</h6>
                    <h6>max capacity : {capacity} People</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>{pets?"pets allowed":"pets not allowed"}</h6>
                    <h6>{breakfast && 'Free Breakfast included'}</h6>                   
            </article>
            </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <section className='extras'>
                    {extras.map((item,index)=>{
                        return <li key={index}>-{item}</li>;
                    })}
                </section>
            </section>
            </>
        )
    }
}
