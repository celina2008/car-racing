class Form{
    constructor(){
        this.input=createInput('Name')
        this.button=createButton("Play")
        this.greeting=createElement("h3")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(460,100)
        
    
       this.input.position(460,200)

       
        this.button.position(460,300)

       

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html('Greetings!'+player.name)
            this.greeting.position(460,250)
            
        })
    }

}