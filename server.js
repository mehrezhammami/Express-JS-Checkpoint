const express=require('express')
const app=express()
app.use((req,res,next)=>{
   let time=new Date()
   let hours=time.getHours()
    if(hours<9||hours>16){
    res.send('closed')

}else { next()}
// let days=time.getDay()
// if (days  [monday..friday]) 
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})

app.get('/ourservices',(req,res)=>{
    res.sendFile(__dirname+'/ourservices.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contactus.html')
})



app.listen(4000,er=>{
    if(er)console.log(er)
    else console.log('server connected on port 4000')
})