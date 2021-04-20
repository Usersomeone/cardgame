
import { _decorator, Component, Node ,Prefab, instantiate, Layers, UITransform, UITransformComponent} from 'cc';
const { ccclass, property } = _decorator;
import {Dealer} from './dealer';

@ccclass('AiCardManage')
export class AiCardManage extends Component {

    @property(Prefab)
    public cardPerfab:Prefab=null!;
    

    private aiSuitPicker:number=null!;

    private aiCardPicker:number=null!;

    public static aiMumOfCard:number=0;

    public static aiPointCountSum:number=0;

    private aiCardPbT:Node=null!;

    public static aiCardNodeAssember: Array<Node> = [];

    onLoad(){
        for(let i=0;i<3;i++){
            this.aicardCarryOut();
        }
    }




    aicardCarryOut(){
        
        this.aiSuitPicker = Dealer.suitCreater();

        this.aiCardPicker = Dealer.pointCreater();
     
        if(this.aiCardPicker>7){
            this.aiCardPicker=7;
        }else{
            this.aiCardPicker=this.aiCardPicker;
        }

        this.aiCardCreaterinit(this.aiSuitPicker,this.aiCardPicker,this.aiCardPbT);

        AiCardManage.aiPointCountSum += this.aiCardPicker;
        

    }
    




    aiCardCreaterinit(sp:number,cp:number,cardPb:Node){
        cardPb=instantiate(this.cardPerfab) as Node;

        cardPb.layer=Layers.Enum.UI_2D;

        Dealer.cardBigSuitCreater(sp,cp,cardPb);

        Dealer.cardLittleSuitCreater(sp,cardPb);
        
        Dealer.cardPointCreater(cp,sp,cardPb);

        cardPb.setPosition(-150+30*AiCardManage.aiMumOfCard,50);

        this.node.addChild(cardPb);


        if(AiCardManage.aiMumOfCard>0){
            let ainothing= cardPb.getComponent(UITransform)!;

            ainothing.priority=AiCardManage.aiMumOfCard+1;

        }else{
            let ainothing= cardPb.getComponent(UITransform)!;
            
            ainothing.priority=0;
        }
         
        AiCardManage.aiMumOfCard=AiCardManage.aiMumOfCard+1;

        AiCardManage.aiCardNodeAssember.push(cardPb);

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
