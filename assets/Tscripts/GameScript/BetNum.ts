
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BetNum')
export class BetNum extends Component {
    public static _nomean:number=0;



    betNumChangeAdd(){
        let _betNum = this.node.getComponent(Label)!;

        this.schedule( () => {
                
        BetNum._nomean = Number(_betNum.string);

        BetNum._nomean=BetNum._nomean+1000;

        _betNum.string=BetNum._nomean.toString()
            
        },0.1,4,0);        
    }

    betNumChangeSub(){
        let _betNumother= this.node.getComponent(Label)!;

        if(BetNum._nomean>0){

        let _sumOfEnd=(BetNum._nomean/1000)-1;

        this.schedule(() =>{
           BetNum._nomean=BetNum._nomean-1000;
           
            _betNumother.string=BetNum._nomean.toString();

        } , 0.1 , _sumOfEnd , 1);
       }else{
           BetNum._nomean=0;
       }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
