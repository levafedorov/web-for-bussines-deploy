import React, {Component} from 'react';
import HeaderStatistic from './HeaderStatistic';
import ImageScreen from './ImageScreen';
import StatisticItem from './StatisticItem';
import PageThemes from '../PageContexts/PageThemes';
import './StatisticPart.scss';


export default class StatisticPart extends Component{
   
   static contextType = PageThemes;
   
   


    render(){
        
        const statistic = {
           "happy clients": 2500,
           "full notebooks": 300,
           "teammates": 120,
           "stores": 30
        }

        let className = "statistic-part stretched transition-all "
        className += this.context.theme;
         
        return <div className={className} id="services">
             <HeaderStatistic>
            {Object.keys(statistic).map((item, i) => <StatisticItem amount={statistic[item]} name={item} key={`${item}-${i}`}/>)}
            </HeaderStatistic>
            <ImageScreen />
               </div>
    }
}