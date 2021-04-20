
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SceneChange')
export class Scene extends Component {



callback(event:Event,any:string){

      const node = event.target as unknown as Node;


      director.loadScene('GameScene');

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
