import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

//import ModuleLoader from '@microsoft/sp-module-loader';
import { SPComponentLoader } from '@microsoft/sp-loader';
//import styles from './WebpartNuevaInstalacion.module.scss';
import * as strings from 'webpartNuevaInstalacionStrings';
import { IWebpartNuevaInstalacionWebPartProps } from './IWebpartNuevaInstalacionWebPartProps';

import * as angular from 'angular';
import './app/app-module';

export default class WebpartNuevaInstalacionWebPart extends BaseClientSideWebPart<IWebpartNuevaInstalacionWebPartProps> {
  public render(): void {
    // CSS
    SPComponentLoader.loadCss('https://localhost:4321/src/webparts/webpartNuevaInstalacion/app/style.css');
    // JS
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css');
    // SPComponentLoader.loadScript('https://code.jquery.com/jquery-3.1.1.slim.min.js');
    // SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js');
    // SPComponentLoader.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js');
    
    // HTML
    this.domElement.innerHTML = require("./app/index.html").toString();
    // ANGULAR
    angular.bootstrap(this.domElement, ['todoapp']);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  //label: strings.UrlList
                })
              ]
            }
          ]
        }
      ]
    };
  }
  protected onPropertyPaneConfigurationStart(): void {
    console.log("Change");
  }
}
