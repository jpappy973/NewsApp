
import { useEffect } from "react";
import "./news.css"
function Newspage(){
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth()+1}-${(today.getDate()-1)}`;  // Returns in 'YYYY-MM-DD' format
    console.log(formattedDate);

    

    useEffect(()=>{
        const url= `https://newsapi.org/v2/everything?q=US&from=${formattedDate}&sortBy=popularity&apiKey=${import.meta.env.VITE_APIKEY}`
    
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
        
        //--------------------
    
        //center story-------
    
          const imageC= document.getElementById("cimg")! as HTMLImageElement
          imageC.src = `${dataArr[1].urlToImage}`
          document.getElementById("cTitle")!.innerHTML= `${dataArr[1].title}`
          document.getElementById("cDis")!.innerHTML= `${dataArr[1].description}`


           document.getElementById("c1Title")!.innerHTML= `${dataArr[2].title}`
          document.getElementById("c1Dis")!.innerHTML= `${dataArr[2].description}`
         
    
    
        //------------------
        //storyLine

        //--storyone
        const storyLine1Img = document.getElementById("storyLine1Img") as HTMLImageElement
        storyLine1Img.src = `${dataArr[3].urlToImage}`
        document.getElementById("storyLine1Title")!.innerHTML= `${dataArr[3].title}`
        document.getElementById("storyLine1Dis")!.innerHTML= `${dataArr[3].description}`
        //--------


        //--storytwo
        const storyLine2Img = document.getElementById("storyLine2Img") as HTMLImageElement
        storyLine2Img.src = `${dataArr[4].urlToImage}`
        document.getElementById("storyLine2Title")!.innerHTML= `${dataArr[4].title}`
        document.getElementById("storyLine2Dis")!.innerHTML= `${dataArr[4].description}`
        //--------

        //--storytwo
        const storyLine3Img = document.getElementById("storyLine3Img") as HTMLImageElement
        storyLine3Img.src = `${dataArr[5].urlToImage}`
        document.getElementById("storyLine3Title")!.innerHTML= `${dataArr[5].title}`
        document.getElementById("storyLine3Dis")!.innerHTML= `${dataArr[5].description}`
        //--------

        //----

        //------STroyline2


        //story1

        document.getElementById("SL1Title")!.innerHTML= `${dataArr[6].title}`
        
        //-----

        //story1

        document.getElementById("SL2Title")!.innerHTML= `${dataArr[7].title}`
       
        //-----

        //story1

        document.getElementById("SL3Title")!.innerHTML= `${dataArr[8].title}`
        
        //-----

        //story1

        document.getElementById("SL4Title")!.innerHTML= `${dataArr[9].title}`
        
        //-----

        //story5

        document.getElementById("SL5Title")!.innerHTML= `${dataArr[10].title}`
        
        //-----

        //----storylineimg
          //----story1
          const SLI1Img = document.getElementById("SLI1Img") as HTMLImageElement
          SLI1Img.src = `${dataArr[11].urlToImage}`
          document.getElementById("SLI1Title")!.innerHTML= `${dataArr[11].title}`
          document.getElementById("SLI1Dis")!.innerHTML= `${dataArr[11].description}`

          //------

          //----story2
          const SLI2Img = document.getElementById("SLI2Img") as HTMLImageElement
          SLI2Img.src = `${dataArr[12].urlToImage}`
          document.getElementById("SLI2Title")!.innerHTML= `${dataArr[12].title}`
          document.getElementById("SLI2Dis")!.innerHTML= `${dataArr[12].description}`

          //------

          //----story3
          const SLI3Img = document.getElementById("SLI3Img") as HTMLImageElement
          SLI3Img.src = `${dataArr[13].urlToImage}`
          document.getElementById("SLI3Title")!.innerHTML= `${dataArr[13].title}`
          document.getElementById("SLI3Dis")!.innerHTML= `${dataArr[13].description}`

          //------

          //----story4
          const SLI4Img = document.getElementById("SLI4Img") as HTMLImageElement
          SLI4Img.src = `${dataArr[14].urlToImage}`
          document.getElementById("SLI4Title")!.innerHTML= `${dataArr[14].title}`
          document.getElementById("SLI4Dis")!.innerHTML= `${dataArr[14].description}`

          //------

          
        //-----


        //storyrow4

          //row4story1
          const r4Img1 = document.getElementById("r4s1Img") as HTMLImageElement
          r4Img1.src = `${dataArr[16].urlToImage}`
          document.getElementById("r4s1title")!.innerHTML= `${dataArr[16].title}`
          document.getElementById("r4s1Dis")!.innerHTML= `${dataArr[16].description}`


          //----------

          //row4story2
          const r4Img2 = document.getElementById("r4s2Img") as HTMLImageElement
          r4Img2.src = `${dataArr[17].urlToImage}`
          document.getElementById("r4s2title")!.innerHTML= `${dataArr[17].title}`
          document.getElementById("r4s2Dis")!.innerHTML= `${dataArr[17].description}`


          //----------

          //row4story3
          const r4Img3 = document.getElementById("r4s3Img") as HTMLImageElement
          r4Img3.src = `${dataArr[18].urlToImage}`
          document.getElementById("r4s3title")!.innerHTML= `${dataArr[18].title}`
          document.getElementById("r4s3Dis")!.innerHTML= `${dataArr[18].description}`


          //----------

          //row4story4

          const r4Img4 = document.getElementById("r4s4Img") as HTMLImageElement
          r4Img4.src = `${dataArr[19].urlToImage}`
          document.getElementById("r4s4title")!.innerHTML= `${dataArr[19].title}`
          document.getElementById("r4s4Dis")!.innerHTML= `${dataArr[19].description}`


          //----------

          //row4story5
          const r4Img5 = document.getElementById("r4s5Img") as HTMLImageElement
          r4Img5.src = `${dataArr[20].urlToImage}`
          document.getElementById("r4s5title")!.innerHTML= `${dataArr[20].title}`
          document.getElementById("r4s5Dis")!.innerHTML= `${dataArr[20].description}`


          //----------

        //--------
    

    
    
        
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
              <a id="lsMain" href="">
              
                <div id="storyDetail">
                  <h4 id='ls1Title'></h4>
                  <p id='ls1Dis'></p>
                </div>

                <div id="lsimg">
                  <img id="ls1img"src="" alt="" />
                </div>
              
              </a>
    
            </div>

            <div id="StoryLiner1">
              <div >
                <img id="storyLine1Img"src="" alt="" />
                <h2 id='storyLine1Title'> </h2>
                <p id='storyLine1Dis'></p>
              </div>

              <div >
                <img id="storyLine2Img"src="" alt="" />
                <h2 id='storyLine2Title'> </h2>
                <p id='storyLine2Dis'></p>
              </div>
        
              <div >
                <img id="storyLine3Img"src="" alt="" />
                <h2 id='storyLine3Title'> </h2>
                <p id='storyLine3Dis'></p>
              </div>
            </div>
    
    
    
          </div>



          <div id="centerRowStory">

            <div id="centerStory">
              <a id = "RightStory"href="">
                
                <img id="cimg"src="" alt="" />
                <h2 id='cTitle'></h2>
                <p id='cDis'></p>
              
              </a>
              <div id="line"></div>
              <a id="lstd"href="">
                
                
                <h2 id='c1Title'></h2>
                <p id='c1Dis'></p>
              
              </a>


            </div>

          </div>

          
    
    
          
          
          
    
          </div>
          
          </div>


          <div id="line"></div>


          <div id='storyLine2'>
            
    
            <div >
              <h2 id='SL1Title'> </h2>
              <p id='SL1Dis'></p>
            </div>
            <div >
              <h2 id='SL2Title'> </h2>
              <p id='SL2Dis'></p>
            </div>
    
            <div >
              <h2 id='SL3Title'> </h2>
              <p id='SL3Dis'></p>
            </div>
    
            <div >
              <h2 id='SL4Title'> </h2>
              <p id='SL4Dis'></p>
            </div>
            <div >
              <h2 id='SL5Title'> </h2>
              <p id='SL5Dis'></p>
            </div>
          </div>

          <div id="line"></div>

          <div id='storyLineimg'>
            
            <div id="stroyline3img">
            <div >
              <img id="SLI1Img" src="" alt="" />
              <h2 id='SLI1Title'> </h2>
              <p id='SLI1Dis'></p>
            </div>
            <div >
            <img id="SLI2Img" src="" alt="" />
              <h2 id='SLI2Title'> </h2>
              <p id='SLI2Dis'></p>
            </div>
    
            <div >
            <img id="SLI3Img" src="" alt="" />
              <h2 id='SLI3Title'> </h2>
              <p id='SLI3Dis'></p>
            </div>
    
            <div >
            <img id="SLI4Img" src="" alt="" />
              <h2 id='SLI4Title'> </h2>
              <p id='SLI4Dis'></p>
            </div>
            </div>
          </div>

          <div id="line"></div>

          <div style={{margin:"50px auto",width:"94%"}}id="row4story">
            <div id="row4sec1">

              {/*  */}
              <div id="row4main">

                <div style={{marginRight:"20px"}}>
                  <h2 id="r4s1title"></h2>
                  <p id="r4s1Dis"></p>
                </div>

                <div>
                  <img id="r4s1Img" src="" alt="" />
                </div>

              </div>


              <div id="row4main2">
                <div style={{marginRight:'30px'}}>
                  <img id="r4s2Img" src="" alt="" />
                  <h2 id="r4s2title"></h2>
                  <p id="r4s2Dis"></p>

                </div>

                <div>
                  <img id="r4s3Img" src="" alt="" />
                  <h2 id="r4s3title"></h2>
                  <p id="r4s3Dis"></p>

                </div>

              </div>
            </div>

            <div id="row4sec2">

              <div >
                <img id="r4s4Img" src="" alt="" />
                <h2 id="r4s4title"></h2>
                <p id="r4s4Dis"></p>
              </div>

              <div>
                <img id="r4s5Img" src="" alt="" />
                <h2 id="r4s5title"></h2>
                <p id="r4s5Dis"></p>
              </div>

            </div>

          </div>
          
        </div>
      )    
} 



export default Newspage