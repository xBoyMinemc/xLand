import * as ui from 'mojang-minecraft-ui';
import { world, Location } from "mojang-minecraft";


const tools = {
    'minecraft:clock':"log"
};
try {
  
var main1 = new Location(8,76,40);
world.events.beforeItemUseOn.subscribe(e => {
  
  world.getDimension("overworld").runCommand(`me 777`);
      var PL = e.source.nameTag;
      let Player = e.source;
      //1
      //1-1
      let a = new ui.ActionFormData();
      a.title("§l§b==隐逸之空==");
      a.body("§l§6这是功能键");
      a.button("§l§6主城","image/Main_City");
      a.button("§l§b好友","image/Good_friends");
      a.button("§l§d传送","image/transport");
      a.button("§l§7设置","image/set");
      a.button("§l§e商店","image/shop");
      a.button("§l§b空岛","image/SkyBlock");
      //1-2
      let c = new ui.ActionFormData();
      c.title("§l§b==隐逸之空==");
      c.body("§l§6空岛功能管理");
      c.button("§l§6返回空岛","image/back");
      c.button("§l§6创建空岛","image/back");
      //2
      var b = new ui.MessageFormData();
     b.title("隐逸之空");
     b.body("§l§e抱歉！该功能正在开发中。。。。");
     b.button2("§7打作者，叫怎么快更新？");
     b.button1("§6支持作者，给予三连！");
      
      
    let item = e.item;
    if (e.source.isSneaking && tools[item.id] !== undefined) {
    a.show(e.source).then(v => {
     if(v.selection == 0){
      // try{b.show(e.source);}catch(error){console.error(error);
       world.getDimension("overworld").runCommand(`tp "${PL}" ${main1}`);
      } else if(v.selection == 1){
       b.show(Player).then(v1 => {
     if(v1.selection == 0){
     world.getDimension("overworld").runCommand(`say 作者被打了，你决意不更新了`);
       } else if(v1.selection == 1){
     world.getDimension("overworld").runCommand(`say 感谢你的支持，你的三连就是我的动力`);
       }
       
       });
      } else if(v.selection == 2){
       b.show(Player).then(v1 => {
     if(v1.selection == 0){
     world.getDimension("overworld").runCommand(`say 作者被打了，你决意不更新了`);
       } else if(v1.selection == 1){
     world.getDimension("overworld").runCommand(`say 感谢你的支持，你的三连就是我的动力`);
       }
       });
      } else if(v.selection == 3){
       b.show(Player).then(v1 => {
     if(v1.selection == 0){
     world.getDimension("overworld").runCommand(`say 作者被打了，你决意不更新了`);
       } else if(v1.selection == 1){
     world.getDimension("overworld").runCommand(`say 感谢你的支持，你的三连就是我的动力`);
       }
       });
      } else if(v.selection == 4){
       b.show(Player).then(v1 => {
     if(v1.selection == 0){
     world.getDimension("overworld").runCommand(`say 作者被打了，你决意不更新了`);
       } else if(v1.selection == 1){
     world.getDimension("overworld").runCommand(`say 感谢你的支持，你的三连就是我的动力`);
       }
       });
      } else if(v.selection == 5){
       c.show(Player).then(v1 => {
          if(v1.selection == 0){
            world.getDimension("overworld").runCommand(`tag "${PL}" add tpmyself`);
         } else if(v1.selection == 1){
            world.getDimension("overworld").runCommand(`tag "${PL}" ~ ~ ~ LoadingSkyBlock`);
         }
       });
      }
      
      
  });
    } 

});

} catch (error) {
  world.getDimension("overworld").runCommand(`me ${error}`);
        
}