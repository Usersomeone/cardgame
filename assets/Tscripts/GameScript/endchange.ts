
import { _decorator, Component, Node, director, Button } from 'cc';
const { ccclass, property } = _decorator;
import{Spritechangetest}from './spritechangetest';
import {AiCardManage} from './AiCardManage';

@ccclass('Endchange')
export class Endchange extends Component {

    endChangeUNInteract(){
        let endUnIn = this.node.getComponent(Button)!;

        endUnIn.interactable=false;
    }

    endChangeCanInteract(){
        let endUnIn = this.node.getComponent(Button)!;

        endUnIn.interactable=true;
    }

    
   endGameChangeScene(){
    for(let i=Spritechangetest.mumOfCard-1;i>=0;i--){
        let tsqw =Spritechangetest.cardNodeAssember[i];
        Spritechangetest.cardNodeAssember.pop();
        tsqw.destroy();
    }

    Spritechangetest.pointCountSum=0;

    Spritechangetest.mumOfCard=0;

    for(let i=AiCardManage.aiMumOfCard-1;i>=0;i--){
        let tsqw =AiCardManage.aiCardNodeAssember[i];
        AiCardManage.aiCardNodeAssember.pop();
        tsqw.destroy();
    }

    AiCardManage.aiPointCountSum=0;

    AiCardManage.aiMumOfCard=0;

    director.loadScene('StartScene');
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
