import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free ShuttleVan",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {
                icon:<FaBeer/>,
                title:"Free Strong Beer",
                info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
