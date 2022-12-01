import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../images/logo.png';
import Pop_up from '../Components/Pop_up';

import Kolsay from '../images/Kolsay.jpg';
import Tamgaly from '../images/Tamgaly_Tas.jpg';
import Charin from '../images/Charin.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            
            .name_logo{
              display: flex;
              justify-content: space-around;
              align-content: center;
              margin-bottom: 50px;
              padding-top: 20px;
              color: var(--p);
            }
            .name{
              font-size: 125px;
              font-weight: 900;
              font-style: italic;
              color: green;
              text-transform: uppercase;
              text-shadow: 5px 5px 0px rgb(247, 161, 2);
              text-decoration: underline;
              padding-bottom: 50px;
              padding-top: 50px;
            }
            main{
              padding-right: 20%;
              padding-left: 20%;
              padding-top: 50px;
              padding-bottom: 50px;
              background-color: rgb(250, 250, 250);
            }
            .future_tours{
              min-height: 600px;
              width: 100%;
              height: 100%;
            }
            .f_tours{
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100px;
              text-align: center;
              font-size: 50px;
              font-weight: 700;
              color: green;
              text-shadow: 3px 3px 0px rgb(247, 161, 2);
              margin-bottom: 50px;
            }
            .tours_all{
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            .tours{
              height: 400px;
              width: 400px;
              transition: 1s;
              box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
              border: 1px solid gray;
              text-align: center;
              font-size: 40px;
              color: green;
              background: white;
            }
            .tour:active{
              transform: scale(2.0);
              overflow: hidden;
                z-index:99;
            }
            .tour{
              transition: 1s;
              z-index:9;
              width: 360px;
              height: 250px;
              box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
            }
            .buttons{
              display: flex;
              justify-content: space-around;
              margin-top: 60px;
              z-index: -99999999;
            }
            .log_in{
              padding: 0 20px 0 20px;
              border-radius: 25px;
              border: none;
              position: relative;
              background: black;
              color: white;
              height: 8%;
              font-size: 15px;
              font-weight: 900;
              cursor: pointer;
              height: 50px;
              transition: 0.5s;
            }
            .log_in:hover{
              background: rgb(247, 161, 2);
                color: black;
            }
            .palaroid{
              background:white;
              padding: 20px;
              
            }
          `}
        </style>

        <Container className='main'>
          <div className='name_logo'>
            <div>
              <h1 className="name" >excursions in Almaty</h1>
            </div>
            <div>
              <img
                src={Logo}
                height="370px"
                width="370px"
                alt="Logo"
              />
            </div>
          </div>
          <div className="future_tours">
            <div className="f_tours">Tours:</div>
            <div className="tours_all">
              <div className="tours">
                <div className='palaroid'><img src={Kolsay} className="tour" /></div>
                <p>Kolsay & Kaindy</p>
              </div>
              <div className="tours">
                <div className='palaroid'><img src={Tamgaly} className="tour" /></div>
                <p>Tamgaly Tas</p>
              </div>
              <div className="tours">
                <div className='palaroid'><img src={Charin} className="tour" /></div>
                <p>Charyn canyon</p>
              </div>
            </div>
            <div className='buttons'>
              <Pop_up name='Kolsay' />
              <Pop_up name='Tamgaly' />
              <Pop_up name='Charyn' />
            </div>

          </div>


        </Container>
      </>
    )
  }
}
