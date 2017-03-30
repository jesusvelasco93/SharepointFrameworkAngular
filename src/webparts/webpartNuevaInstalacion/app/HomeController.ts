import * as angular from 'angular';
import pnp from 'sp-pnp-js';


export default class HomeController {
    public static $inject: string[] = ['$timeout'];
    public title: string;
    public date: Date;
    public color: String;
    public userSOEID: String;
    public elements: Object[];
    public mensaje: String;

    constructor(private $timeout: angular.ITimeoutService) {
        // var title = "Esto es una prueba";
        this.init();
    }

    private init(): void {
        var self = this;
        this.title = "";
        this.date = new Date();
        this.color = "rgb(0,0,0)";
        this.elements = [];
        this.mensaje = "No hay objetivos que mostrar";

        this.getCurrentDate();
    }

    private getCurrentDate(): void {
        var self = this;
        this.$timeout(function () {
            self.getCurrentDate();
            self.date = new Date();
        },1000);
    }

    private changeColor(): void {
        var a = Math.random()*1000%255;
        var b = Math.random()*1000%255;
        var c = Math.random()*1000%255;

        var colorChange : String = "rgb("+a.toFixed(0)+","+b.toFixed(0)+","+c.toFixed(0)+")";
        this.color = colorChange;
    }
    private loadList(): void {
        this.mensaje = "Cargando..."
        this.elements = [];
        pnp.sp.web.lists.getByTitle('LSTEvaluacionDesempenoObjetivos').items.filter("COColaborador eq 'i:0%23.f|membership|" + this.userSOEID + "'").get().then((items: any[]) => {
            if (items.length > 0) {
                console.log(items);
                this.elements = items;
            } else {
                this.mensaje = "No hay objetivos que mostrar";
            }
        }).catch((error: any[]) => {
            this.mensaje = error.toString();
        });
    }
}