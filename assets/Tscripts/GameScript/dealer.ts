
import { _decorator, Component, Node,Sprite,Label,Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dealer')
export class Dealer extends Component {



  public static pointCreater(){
      return Math.floor(Math.random()*13)+1;

   }

  public static suitCreater(){

    return Math.floor(Math.random()*4)

   }

  public static cardPointCreater(cp:number,sp:number,mond:Node){
        
    let lsobj = mond.getChildByName('cardpoint')!;

    let lsobjq = lsobj.getComponent(Label)!;

    switch(cp){
        case 1:
            lsobjq.string='A';
        break;
        case 11:
            lsobjq.string='J';
        break;
        case 12:
            lsobjq.string='Q';
        break;
        case 13:
            lsobjq.string='K';
        break;
        default:
            lsobjq.string=cp as unknown as string;
    }

    switch(sp){
        case 0:
            lsobjq.color=Color.RED;
        break;
        case 1:
            lsobjq.color=Color.BLACK;
        break;
        case 2:
            lsobjq.color=Color.BLACK;
        break;
        case 3:
            lsobjq.color=Color.RED;
        break;
    }


}

public static cardLittleSuitCreater(sp:number,mond:Node){

    let lsobj = mond.getChildByName('littlesuit') as unknown as Node;

    let lsobjq =lsobj.getComponent(Sprite)!;

    switch (sp){
        case 0:
            lsobjq.changeSpriteFrameFromAtlas('fangkuai_small');
        break;
        case 1:
            lsobjq.changeSpriteFrameFromAtlas('heimei_small');
        break;
        case 2:
            lsobjq.changeSpriteFrameFromAtlas('heitao_small');
        break;
        case 3:
            lsobjq.changeSpriteFrameFromAtlas('hongtao_small');
        break;
    }
}

public static cardBigSuitCreater(sp:number,cp:number,mond:Node){

    let lsobj = mond.getChildByName('bigsuit') as unknown as Node;

    let lsobjq =lsobj.getComponent(Sprite)!;

    if(cp<=10){

      switch (sp){
        case 0:
            lsobjq.changeSpriteFrameFromAtlas('fangkuai_big');
        break;
        case 1:
            lsobjq.changeSpriteFrameFromAtlas('heimei_big');
        break;
        case 2:
            lsobjq.changeSpriteFrameFromAtlas('heitao_big');
        break;
        case 3:
            lsobjq.changeSpriteFrameFromAtlas('hongtao_big');
        break;
                 }
    }else{
        switch(cp){
            case 11:
                lsobjq.changeSpriteFrameFromAtlas('ranker');
            break;
            case 12:
                lsobjq.changeSpriteFrameFromAtlas('kueen');
            break;
            case 13:
                lsobjq.changeSpriteFrameFromAtlas('king');
            break;
        }
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
