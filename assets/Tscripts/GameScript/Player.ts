
import { _decorator, Component, Node, Label, game, find } from 'cc';
const { ccclass, property } = _decorator;
import {BetNum} from './BetNum';

@ccclass('Player')
export class Player extends Component {
    public static _numOfAccount:number=50000;

    onLoad(){
        let _non=this.node.getComponent(Label)!;

        _non.string=Player._numOfAccount.toString();

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
