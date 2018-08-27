import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horario from './src/Horario';
import Sobre from './src/Sobre';

const Navegador = createBottomTabNavigator({
    Nome:{
      screen:Home
    },
    Contato:{
      screen:Contato
    },
    Horarios:{
      screen:Horarios
    },
    Sobre:{
      screen:Sobre
    }
});

export default Navegador;
