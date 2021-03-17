
export class Medsform {

    studentname : string;
    time : any ;
    date : any;
    incident : string;
    firstaid : string;
    medid : string ;
    dt : Datetoday;

    constructor(studentname : string,time : any,date : any,incident : string,firstaid : string,medid : string){
        
        
        this.dt = new Datetoday();

        this.studentname = studentname;
        this.time = time = this.dt.displayTime();
        this.date = date = this.dt.displayDate();
        this.incident = incident;
        this.firstaid = firstaid;
        this.medid = medid = "dksfvkfdkvdf";
    }

}

class Datetoday {

    today : any;
    date : any;
    time : any;

         displayDate()  {
            this.today = new Date();
            this.date =this.today.getDate() + '-' + (this.today.getMonth()+1)+ '-' + this.today.getFullYear();
            return this.date;
            
        }

        displayTime(){
            this.today = new Date();
            this.time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
            return this.time;

        }
    

}