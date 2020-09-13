
export class LoaderService{
    
    constructor(){}

    private posts =[false];
    private loaders = 0;
    
    getStatus(){
        return this.loaders,this.posts
    }

    startLoader(value:number){
        
        //console.log("Post in Service file 1")
        this.posts[0] = true
        this.loaders =value
        setTimeout(()=>{
            this.stopLoader(0)
        }
            , 3000);
    }
    stopLoader(value:number){
        
        //console.log("Post in Service file 1")
        this.posts[0] = false
        this.loaders =value
    }
}