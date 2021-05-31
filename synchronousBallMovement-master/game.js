class Game{
    constructor(){

    }
    getState(){
    var gamestateref=database.ref("gameState")
    gamestateref.on("value",function(data){
        gameState=data.val()
    })
}
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
    async start(){
        if(gameState===0){
         player=new Player()
var playerCountref=await database.ref("playerCount").once("value")
if(playerCountref.exists()){
    playerCount=playerCountref.val()
    player.getCount()
}
            
            form=new Form()
            form.display()
            
        }
    }
    play(){
        form.hide()
        text("gameStarted",200,200)
        Player.getPlayerinfo()
        if(allplayers!==undefined){
            var displayPosition=120
            for(var plr in allplayers){
                if(plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                displayPosition+=20
            text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayPosition)
            }
        }
        if(keysIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update()
        }
        drawSprites()
    }
}