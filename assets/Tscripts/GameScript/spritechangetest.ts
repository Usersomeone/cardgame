
import { _decorator, Component, Node, Prefab,instantiate, Layers,
     Button, 
     find} from 'cc';
import { Betclearmanage } from './betclearmanage';
const { ccclass, property } = _decorator;
import{Dealer}from './dealer';
import { Endchange } from './endchange';
import { Restartgame } from './restartgame';

@ccclass('Spritechangetest')
export class Spritechangetest extends Component {

    @property(Prefab)
    public cardPerfab:Prefab=null!;

    @property(Button)
    public cardSendMg:Button=null!;

    

    private suitPicker:number=null!;

    private cardPicker:number=null!;

    public movePos:number=30;

    public static mumOfCard:number=0;

    public static pointCountSum:number=0;

    private cardPbT:Node=null!;

    public static cardNodeAssember: Array<Node> = [];
    



    cardClearManager(){
        for(let i=Spritechangetest.mumOfCard-1;i>=0;i--){
            let tsqw =Spritechangetest.cardNodeAssember[i];
            Spritechangetest.cardNodeAssember.pop();
            tsqw.destroy();
        }

        Spritechangetest.pointCountSum=0;
        Spritechangetest.mumOfCard=0;
        
    }

    callBack(event:Button,data:any){

        this.suitPicker = Dealer.suitCreater();

        this.cardPicker = Dealer.pointCreater();

        this.cardCreaterinit(this.suitPicker,this.cardPicker,this.cardPbT);

        Spritechangetest.pointCountSum += this.cardPicker;

        let betS = find('Canvas/contentnode/BetClear')?.getComponent(Betclearmanage);

        betS?.betUNInteract();

        let endCC = find('Canvas/contentnode/ChangeScene')?.getComponent(Endchange);

        endCC?.endChangeUNInteract();

        if(Spritechangetest.pointCountSum>=21){

            this.cardSendMg.interactable=false;

            this.scheduleOnce(() =>{
//                this.cardClearManager();
                let spcts =find('Canvas/contentnode')?.getComponent(Restartgame);
                spcts?.compareToResult();
                this.cardSendMg.interactable=true;
            },   0.1 );            

        }
    }

    cardCreaterinit(sp:number,cp:number,cardPb:Node){
        cardPb=instantiate(this.cardPerfab) as Node;

        cardPb.layer=Layers.Enum.UI_2D;

        Dealer.cardBigSuitCreater(sp,cp,cardPb);

        Dealer.cardLittleSuitCreater(sp,cardPb);
        
        Dealer.cardPointCreater(cp,sp,cardPb);

        cardPb.setPosition(-150+this.movePos*Spritechangetest.mumOfCard,0);

        this.node.addChild(cardPb);

        Spritechangetest.mumOfCard=Spritechangetest.mumOfCard+1;

        Spritechangetest.cardNodeAssember.push(cardPb);

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
