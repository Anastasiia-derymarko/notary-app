// import React, { Component } from 'react';
import { month, days, days_new } from '../data/orders.js';

function ConvertingNumberToString(number){
  number = number.number;

     number = number.split('/');
  
      
      number[0] = parseInt(number[0],10);
      number[1] = parseInt(number[1],10);
      number[1] = month[number[1]];
      var years = number[2].split('0');  

      // month
      if(number[1].slice(-3) === 'ень'){
       number[1] = number[1].slice(0, -3) + 'ня';
      }else if(number[1].slice(-2) === 'ий'){
        number[1] = number[1].slice(0, -2) + 'ого';
      }else{
        number[1] = number[1]+'а';
      }
      // day
      function fun_dayes (day){
        if(day <= 9){
        day = days_new[day];
        }else if(day >= 10 && day <= 19){
          day = days[1][day-10];
          day = day.slice(0, -1) + 'ого';
        }else{
          day= String(day).split('');
            day[0] = days[2][day[0]];
          if(day[1] === '0'){
            day[0] = day[0].slice(0, -1) + 'ого';
            delete day[1];
          }else{
            day[0] = day[0] + ' ';
            day[1] = days_new[day[1]];                    
          }  
          day = day.join('');
        }
        return day
      }

      number[0] = fun_dayes (number[0]);
      years[0] = 'дві тисячі';
      years[1] = fun_dayes (years[1]);
          
      var year_str = years.join(' '); 
      number[2] = year_str;
      var str = number.join(' ');   
      return str;          
    }

export default (ConvertingNumberToString);    