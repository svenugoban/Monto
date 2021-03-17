export class Registerteacher {
    teacher_id : any;
    teacher_name : string;
    address : string;
    dob : any;
    gender : string;
    qualification : any;

    constructor(teacher_id : any, teacher_name : string, address : string, dob : any, gender : string, qualification : any){
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.qualification = qualification;
    }

}
