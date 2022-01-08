import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
import { FormControl ,Validators,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  answer_ques:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  answer_ques_names:Array<string>=["ques_1_ans","ques_2_ans","ques_3_ans","ques_4_ans","ques_5_ans","ques_6_ans","ques_7_ans","ques_8_ans","ques_9_ans","ques_10_ans"];
  correct_ans:Array<any>=[1_0,2_1,3_2,4_0,5_3,6_1,7_2,8_1,9_0,10_1];
  showTrue=true;
examForm=new FormGroup({
  ques_1_ans:new FormControl('',[Validators.required]),
  ques_2_ans:new FormControl('',[Validators.required]),
  ques_3_ans:new FormControl('',[Validators.required]),
  ques_4_ans:new FormControl('',[Validators.required]),
  ques_5_ans:new FormControl('',[Validators.required]),
  ques_6_ans:new FormControl('',[Validators.required]),
  ques_7_ans:new FormControl('',[Validators.required]),
  ques_8_ans:new FormControl('',[Validators.required]),
  ques_9_ans:new FormControl('',[Validators.required]),
  ques_10_ans:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required])
})

valid=false;


 

//get isValid() { return this.examForm.controls.ques_1_ans.valid; }

// get isValid() { 
//   this.answer_ques.forEach(element => {
//    let name="ques_"+element+'_ans';
//    if(this.examForm.controls[name].valid){
//     return this.examForm.controls[name].valid;
//    }
   
//   });
  
 
 
//}

questionData:Array<Question>=[];
isValid=false;
nameControl='';
  constructor(public qSer:QuestionService) {
  
   }

  ngOnInit(): void {
   // this.firstRadioName="ques_1_ans";
    //console.log(this.qSer.showQuestion());
    this.qSer.showQuestion().subscribe(res=>{
      this.questionData=res;
      console.log(this.questionData);
    },err=>console.log(err));

    // this.answer_ques.forEach(element => {
    //   let name="ques_"+element+'_ans';
    //   if(!this.examForm.controls[name].valid){
    //     this.isValid=false;
    //     this.nameControl="ques_"+element+'_ans';
    //   // return false;
    //   }else{
    //     //this.isValid=true;
    //   }
      
    //  });
  


  }
  checkAnswers(){
    let data=this.examForm.value;
    console.log(data);
    for(var key in data){
      console.log(data[key],'cc');
      if(){
        
      }
    }
    // data.forEach(() => {
    //   console.log('hello');
    // });
    // this.answer_ques.forEach(element => {
    //   let name="ques_"+element+'_ans';
    //   if(!this.examForm.controls[name].valid){
    //     this.isValid=false;
    //     this.nameControl=name;
    //   // return false;
    //   }else{
    //     //this.isValid=true;
    //   }
      
    //  });
  }

}
