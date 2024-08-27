// arrays
// class TodoList{
//     constructor(){
//         this.tasks = []
//     }
//     addTask(task){
//         this.tasks.push(task)
//     }
//     deleteTask(task){
//         this.tasks.pop()
//     }
//     showTasks(){
//         this.tasks.forEach((task,index)=>{
//             console.log(`${index +1}: ${task}`)
//         })
//     }
// }
// let toDo = new TodoList()
// toDo.addTask("Learn SQL")
// toDo.addTask("Learn Express")
// toDo.addTask("Learn MongoDB")
// toDo.addTask("Learn Mongoose")

// toDo.deleteTask()
// toDo.addTask("Finish up your assignment")
// // toDo.showTasks()


// class Track{
//     constructor(data){
//         this.data = this.data
//         this.next = null
//     }
// }
// class Album{
//     constructor(){
//         this.head = null
//     }

//     addTrack(data){
//         let newTrack = new Track(data)
//         if (!this.head){
//             this.head = newTrack
//         } else {
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newTrack
//         }
//     }
//     playAllSongs(){
//         let current = this.head 
//         while(current){
//             console.log(`playing:${current.data}`)
//             current= current.next
//         }
//     }
//     playSingleSong(songName){
//         let current =this.head
//         while(current){
//             if (current.data === songName){
//                 console.log(`playing:${current.data}`)
//                 return
//             }
//             current = current.next
//         }
//         console.log(`song: ${songName} not found in the playlist`)
//     }
// }

// let lunguBoy = new Album()
// lunguBoy.addTrack('mms')
// lunguBoy.addTrack('amapiano')
// lunguBoy.addTrack('nzaza')
// lunguBoy.addTrack('active')
// // lunguBoy.playSingleSong("pallazo")
// lunguBoy.playAllSongs()


// class undoStack{
//     constructor(){
//         this.stack = []

//     }
//     addText(text){
//         this.stack.push(text)
//     }
//     undoText(){
//         if (this.stack.length > 0){
//             console.log(`undoing: ${this.stack.pop()}`)
//         }else{
//             console.log('nothing to undo')
//         }
//     }
//     showText(){
//         console.log(this.stack)
//     }
// }

// let word = new undoStack()
// word.addText('hello')
// word.addText('world')

// word.showText()
// word.undoText()
// word.showText()

// class printQueue{
//     constructor(){
//         this.queue = []
//     }
//     addDocument(doc){
//         this.queue.push(doc)
//     }
//     printDocument(){
//         if(this.printDocument.length > 0){
//             console.log(`printing: ${this.queue.shift()}`)
//         }else{
//             console.log("no document in the queue")
//         }
//     }
//     showQueue(){
//         console.log(`document in queue`, this.queue)
//     }
// }

// let library = new printQueue()
// library.addDocument('half of a yellow')
// library.addDocument('purple hearts')
// library.addDocument('women of owu')
// library.addDocument('egg of life')

// library.showQueue()
// library.printDocument("egg of life")
// library.showQueue()
// library.printDocument()
// library.showQueue()
// library.addDocument("dml's brain")
// library.showQueue()



class CryptoPortfolio{
    constructor(){
        this.portfolio = new Set()
    }
    addCrypto(cryptoSymbol){
        this.portfolio.add(cryptoSymbol)
        console.log(`${cryptoSymbol} has been added to your wallet`)
    }
    removeCrypto(cryptoSymbol){
        if(this.portfolio.has(cryptoSymbol)){
            this.portfolio.delete(cryptoSymbol)
            
            console.log(`${cryptoSymbol} has been removed from your wallet}`)
            
        }
    }
    hasCrypto(cryptoSymbol){
        return this.portfolio.has(cryptoSymbol) 
     }
     showPortfolio(){
        if(this.portfolio.size === 0){
            console.log("your portfolio is empty");
            
        } else {
            console.log(`current portfolio:`, ...this.portfolio);    
        }
    }
}
let wallet = new CryptoPortfolio()
wallet.addCrypto("BTC")
wallet.addCrypto("USDT")
wallet.addCrypto("DODGE")
wallet.addCrypto("LTC")
wallet.showPortfolio()
wallet.hasCrypto("DODGE")
wallet.showPortfolio()
wallet.removeCrypto("DODGE")
wallet.showPortfolio()