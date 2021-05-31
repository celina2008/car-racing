class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }
getCount(){
    var playercountref=database.ref("playerCount")
    playercountref.on("value",function(data){
        playerCount=data.val()
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
update(){
    var playerIndex="player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })

}
static getPlayerinfo(){ 
    var playerinforef=database.ref("player")
    playerinforef.on("value",(data)=>{
allplayers=data.val()
    
    })
}
}