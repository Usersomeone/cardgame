
import { _decorator, Component, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Betclearmanage')
export class Betclearmanage extends Component {

    betUNInteract(){

        let betnothing =this.node.getComponent(Button)!;

        betnothing.interactable=false;

    }

    betCanInteract(){

        let betnothing =this.node.getComponent(Button)!;

        betnothing.interactable=true;

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
