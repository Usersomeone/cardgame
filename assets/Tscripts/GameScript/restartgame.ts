
import { _decorator, Component, Node, Prefab, instantiate, Layers, EventHandler, Button, Label, BlockInputEvents, UITransform, find } from 'cc';
const { ccclass, property } = _decorator;

import{Spritechangetest} from './spritechangetest';
import {BetNum} from './BetNum';
import {Player} from './Player';
import {AiCardManage} from './AiCardManage';
import { Cardvisible } from './Cardvisible';
import { Betclearmanage } from './betclearmanage';
import { Endchange } from './endchange';

@ccclass('Restartgame')
export class Restartgame extends Component {
    @property(Prefab)
    public reStartShow:Prefab=null!;
    @property(Node)
    public betnode:Node=null!;
    @property(Node)
    public playernum:Node=null!;

    private _reShow:Node=null!;





    initReStartShow(_tReShow:Node){
        let reShow=instantiate(this.reStartShow) as Node;

        this.node.addChild(reShow);

        _tReShow=reShow;

        return _tReShow;


    }

    compareToResult(){
        this._reShow=this.initReStartShow(this._reShow)!;

        let cardisvisible =find('Canvas/contentnode/AI/Sprite')?.getComponent(Cardvisible);

        cardisvisible?.cardUnvisible();

        let betSimple= find('Canvas/contentnode/BetClear')?.getComponent(Betclearmanage);

        betSimple?.betCanInteract();

        let endChangeOfnomean =find('Canvas/contentnode/ChangeScene')?.getComponent(Endchange);

        endChangeOfnomean?.endChangeCanInteract();
        
        if(Spritechangetest.pointCountSum>=AiCardManage.aiPointCountSum&&
            Spritechangetest.pointCountSum<=21){
           let _resobj= this._reShow.getChildByName('LabelNode')!;
           let _endobj=_resobj.getComponent(Label)!;
           _endobj.string='you win!'

           Player._numOfAccount=Player._numOfAccount+BetNum._nomean+5000;

           let _betNumOt=this.betnode.getComponent(Label)!;

           let _sumOfEnd=(BetNum._nomean/1000)-1;

           this.schedule(() =>{
              BetNum._nomean=BetNum._nomean-1000;
              
              _betNumOt.string=BetNum._nomean.toString();
   
           } , 0.1 , _sumOfEnd , 0);

           let _playerNumNode= this.playernum.getComponent(Label)!;

           _playerNumNode.string=Player._numOfAccount.toString();

        

        }else{
            let _resobj= this._reShow.getChildByName('LabelNode')!;
            let _endobj=_resobj.getComponent(Label)!;
            _endobj.string= 'you lose!'
            if(Player._numOfAccount>0){
            Player._numOfAccount=Player._numOfAccount-BetNum._nomean-5000;}

            let _betNumOt=this.betnode.getComponent(Label)!;

            let _sumOfEnd=(BetNum._nomean/1000)-1;
 
            this.schedule(() =>{
               BetNum._nomean=BetNum._nomean-1000;
               
               _betNumOt.string=BetNum._nomean.toString();
    
            } , 0.1 , _sumOfEnd , 0);

            let _playerNumNode= this.playernum.getComponent(Label)!;

            _playerNumNode.string=Player._numOfAccount.toString();


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
