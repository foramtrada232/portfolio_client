const EventEmitter = {
    events :{},
    dispatch : function(event,data  ){
        if(!this.events[event]) return
        console.log(this.events[event])
        this.events[event].forEach(callback => {
            callback(data)
        });  
    },
    subscribe: function(event,callback){
        if(!this.events[event]) this.events[event] =[]
        this.events[event].push(callback);
    }

}
module.exports = {EventEmitter}