import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
import { FormControl ,Validators,FormGroup, FormBuilder} from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  pass:boolean=false;
  fail:boolean=false;
  score:string="";
  isCorrect:boolean=false;
  answer_ques:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  answer_ques_names:Array<string>=["ques_1_ans","ques_2_ans","ques_3_ans","ques_4_ans","ques_5_ans","ques_6_ans","ques_7_ans","ques_8_ans","ques_9_ans","ques_10_ans"];
 // correct_ans1:Array<any>=["1_0","2_1","3_2","4_0","5_1","6_3","7_2","8_1","9_0","10_3"];
  correct_ans2:Array<any>=[1,2,3,1,2,4,3,2,1,4];
  correct_ans_count:number=0;
 selected_ans:Array<any>=[];
  showTrue:boolean=false;
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
  //gender:new FormControl('',[Validators.required])
})

//valid=false;


 



questionData:Array<Question>=[];
//isValid=false;
nameControl='';
  constructor(public qSer:QuestionService) {
  
   }

  ngOnInit(): void {
    this.qSer.showQuestion().subscribe(res=>{
      this.questionData=res;
      console.log("questionData"+JSON.stringify(this.questionData));
    },err=>console.log(err));


  }
  checkAnswers(){
    let data=this.examForm.value;
   console.log("data::: "+ JSON.stringify(data));
   let i=0;
    Object.entries(data).map((key)=>{
   
    
  console.log("key:  "+key[0]);
  
  // console.log("correct_ans1"+this.correct_ans1[0]);
   if(this.correct_ans2[i]==key[1]){
    this.correct_ans_count++;
    this.isCorrect=true;
   }else{
   
  
   }
   this.selected_ans.push(key[1]);
   
  i++;
  
    });
    if(this.correct_ans_count && this.correct_ans_count>=7){
      //alert("You have passed the Exam");
      this.pass=true;
  }else{
    this.fail=true;
    //alert("You failed.Please check your answers");
  }
  this.showTrue=true;
 
    console.log("total correct ans is",this.correct_ans_count);
    console.log(this.selected_ans,this.correct_ans2);
   
    
  }

}
