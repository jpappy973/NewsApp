import { useEffect, useState } from 'react'

import '../App.css'

function HealthPage (){
    
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth()+1}-${(today.getDate()-1)}`;  // Returns in 'YYYY-MM-DD' format
    console.log(formattedDate);

    useEffect(()=>{
        const url= `https://newsapi.org/v2/everything?q=health&from=${formattedDate}&sortBy=popularity&apiKey=${import.meta.env.VITE_APIKEY}`
    
        const fetchData = async ()=>{
        const dataArr:any = []
        const ForArr = []
        const data = await fetch(url)
    
        const formatedData = await data.json()
        ForArr.push(formatedData.articles)
        console.log(ForArr)
        //dataArr.push(formatedData.articles)
    
        for(let i:any=0; i<ForArr[0].length;i++){
          
            if(ForArr[0][i].urlToImage != null ){
              if(ForArr[0][i].title != null){
                if(ForArr[0][i].description != null){
                  dataArr.push(ForArr[0][i])
                }
              }
              
              
            }
            
          
          
        }
        
        console.log(dataArr)
        // left colum storys----------
    
        //left colum story 1
        const image = document.getElementById("ls1img")! as HTMLImageElement
        image.src = `${dataArr[0].urlToImage}`
        document.getElementById("ls1Title")!.innerHTML= `${dataArr[0].title}`
        document.getElementById("ls1Dis")!.innerHTML= `${dataArr[0].description}`
    
        //left colum story 2
        const imageL= document.getElementById("ls2img")! as HTMLImageElement
        imageL.src = `${dataArr[1].urlToImage}`
        document.getElementById("ls2Title")!.innerHTML= `${dataArr[1].title}`
        document.getElementById("ls2Dis")!.innerHTML= `${dataArr[1].description}`
        //--------------------
    
        //center story-------
    
          const imageC= document.getElementById("cimg")! as HTMLImageElement
          imageC.src = `${dataArr[2].urlToImage}`
          document.getElementById("cTitle")!.innerHTML= `${dataArr[2].title}`
          document.getElementById("cDis")!.innerHTML= `${dataArr[2].description}`
         
    
    
        //------------------
    
        // rigth story-------------
    
          //story1
          document.getElementById("rs1")!.innerHTML= `${dataArr[3].title}`
          document.getElementById("rs1Dis")!.innerHTML= `${dataArr[3].description}`
    
          //story2
          document.getElementById("rs2")!.innerHTML= `${dataArr[4].title}`
          document.getElementById("rs2Dis")!.innerHTML= `${dataArr[4].description}`
    
          //story3
          document.getElementById("rs3")!.innerHTML= `${dataArr[5].title}`
          document.getElementById("rs3Dis")!.innerHTML= `${dataArr[5].description}`
    
    
    
        //-------------
    
        //-------secondrow
    
    
        //----friststory
    
        const imageSec1= document.getElementById("Sec1Img")! as HTMLImageElement
        imageSec1.src = `${dataArr[6].urlToImage}`
        document.getElementById("Sec1Title")!.innerHTML= `${dataArr[6].title}`
        document.getElementById("Sec1Dis")!.innerHTML= `${dataArr[6].description}`
    
        //--------------
    
        //----Scondestory
        const imageSec2= document.getElementById("Sec2Img")! as HTMLImageElement
        imageSec2.src = `${dataArr[7].urlToImage}`
        document.getElementById("Sec2Title")!.innerHTML= `${dataArr[7].title}`
        document.getElementById("Sec2Dis")!.innerHTML= `${dataArr[7].description}`
        //----------------
    
        //------story line
    
        //------frist
        document.getElementById("storyLine1Title")!.innerHTML= `${dataArr[8].title}`
        
    
        //------------
    
        //------two
        document.getElementById("storyLine2Title")!.innerHTML= `${dataArr[9].title}`
        
    
        //------------
    
        //------three
        document.getElementById("storyLine3Title")!.innerHTML= `${dataArr[10].title}`
        
        //------------
    
        //------four
        document.getElementById("storyLine4Title")!.innerHTML= `${dataArr[11].title}`
        
    
        //------------
    
    
        //------five
        document.getElementById("storyLine5Title")!.innerHTML= `${dataArr[12].title}`
        
    
        //------------
    
    
        //----------------
    
        //----storyrow4
    
        //--------story1
        const imageStoryrow4Img1= document.getElementById("sr4s1img")! as HTMLImageElement
        imageStoryrow4Img1.src = `${dataArr[13].urlToImage}`
        document.getElementById("sr4s1title")!.innerHTML= `${dataArr[13].title}`
        document.getElementById("sr4s1Dis")!.innerHTML= `${dataArr[13].description}`
    
        //-------------
    
        //--------story2
        const imageStoryrow4Img2= document.getElementById("sr4s2img")! as HTMLImageElement
        imageStoryrow4Img2.src = `${dataArr[14].urlToImage}`
        document.getElementById("sr4s2title")!.innerHTML= `${dataArr[14].title}`
        document.getElementById("sr4s2Dis")!.innerHTML= `${dataArr[14].description}`
        //-------------
    
    
        //-------------
    
    
        
        console.log(dataArr)
        }
    
        fetchData()
      
      },[])
      
      
    
      return  (
        
          <div >
    
          
          <div id='firstpageOfNews'>
          
    
          <div id='firstStorysec'>
          <div id="leftRowStory">
            <div id="ls">
              <a href="">
              <img id="ls1img"src="" alt="" />
              <h4 id='ls1Title'></h4>
              <p id='ls1Dis'></p>
              </a>
    
            </div>
    
            <div id="ls">
              <a href="">
              <img id="ls2img"src="" alt="" />
              <h4 id='ls2Title'></h4>
              <p id='ls2Dis'></p>
              </a>
    
            </div>
    
    
          </div>
    
    
          <div style={{width:"85%"}}id="centerRowStory">
    
            <div id="centerStory">
              <a href="">
                <img id="cimg"src="" alt="" />
                <h2 id='cTitle'></h2>
                <p id='cDis'></p>
    
              </a>
            </div>
            
            
          </div>
    
          
          <div id="rightRowstory">
    
            <a href="">
              <div id="RSstory">
                <h2 style={{marginTop:0}} id='rs1'> </h2>
                <p id='rs1Dis'></p>
    
              </div>
            </a>
    
            <a href="">
            <div id="RSstory">
              <h2 id='rs2'> </h2>
              <p id='rs2Dis'></p>
    
            </div>
            </a>
            
            <a href="">
              <div id="RSstory">
                <h2 id='rs2'> </h2>
                <p id='rs2Dis'></p>
    
              </div>
            </a>
            
            <a href="">
              <div id="RSstory">
                <h2 id='rs3'> </h2>
                <p id='rs3Dis'></p>
    
              </div>
            </a>
    
          </div>
    
          </div>
          
          </div>
    
          <div id="staeghtLine"></div>
    
          <div id='secondrow'>
    
            
            <div id='secondstory'>
    
              <div id='storyImg'>
                <img id="Sec1Img"src="" alt="" />
                <h2 id="Sec1Title"></h2>
                <p id="Sec1Dis"></p>
    
              </div>
    
              
    
            </div>
    
            <div id='secondstory'>
              <div id='storyImg'>
                  <img id="Sec2Img"src="" alt="" />
                  <h2 id="Sec2Title"></h2>
                  <p id="Sec2Dis"></p>
    
                </div>
            </div>
    
          </div>
    
          <div id="staeghtLine"></div>
    
          <div id='storyLine'>
    
            <div >
              <h2 id='storyLine1Title'> </h2>
              <p id='storyLine1Dis'></p>
            </div>
            <div >
              <h2 id='storyLine2Title'> </h2>
              <p id='storyLine2Dis'></p>
            </div>
    
            <div >
              <h2 id='storyLine3Title'> </h2>
              <p id='storyLine3Dis'></p>
            </div>
    
            <div >
              <h2 id='storyLine4Title'> </h2>
              <p id='storyLine4Dis'></p>
            </div>
            <div >
              <h2 id='storyLine5Title'> </h2>
              <p id='storyLine5Dis'></p>
            </div>
          </div>
    
          <div id="staeghtLine"></div>
    
    
        <div id='storyrow4'>
          
            
            <div id='storyrow4story1'>
              <div id='storyrow4story1Img'>
                <img id="sr4s1img" src="" alt="" />
                
              </div>
                
              <div id='storyrow4story1Dis'>
                <div>
                <h2 id="sr4s1title"></h2>
                <p id="sr4s1Dis"></p>
                </div>
              </div>
    
    
            </div>
    
            <div id="staeghtLine"></div>
    
            
            <div id='storyrow4story2'> 
    
              
              <div id='storyrow4story2Dis'>
                <div>
                <h2 id="sr4s2title"></h2>
                <p id="sr4s2Dis"></p>
                </div>
              </div>
    
              <div id='storyrow4story2Img'>
                <img id="sr4s2img" src="" alt="" />
                
              </div>
            
    
    
            </div>
    
          
    
        </div>
          
        </div>
      )    

}


export default HealthPage