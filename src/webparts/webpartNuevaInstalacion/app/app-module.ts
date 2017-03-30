import * as angular from 'angular';  
import HomeController from './HomeController';  

const todoapp = angular.module('todoapp', []);

todoapp.controller('HomeController', HomeController);