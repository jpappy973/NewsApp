import { useEffect } from "react";
import "./sports.css"

function SportPage(){
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth()+1}-${(today.getDate()-1)}`;  // Returns in 'YYYY-MM-DD' format
    
    useEffect(()=>{

        const url= `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${import.meta.env.VITE_APIKEY }`
    
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

        //-------sec1

        //----story1
        const sec1s1Img = document.getElementById("sec1Story1Img")! as HTMLImageElement
        sec1s1Img.src = `${dataArr[0].urlToImage}`
        document.getElementById("sec1Story1Title")!.innerHTML= `${dataArr[0].title}`
        document.getElementById("sec1Story1Dis")!.innerHTML= `${dataArr[0].description}`
        //---------

        //----story2
        const sec1s2Img = document.getElementById("s1s2img1")! as HTMLImageElement
        sec1s2Img.src = `${dataArr[1].urlToImage}`
        document.getElementById("s1s2title1")!.innerHTML= `${dataArr[1].title}`
        document.getElementById("s1s2dis1")!.innerHTML= `${dataArr[1].description}`
        //---------

        //----story3
        const sec1s3Img = document.getElementById("s1s2img2")! as HTMLImageElement
        sec1s3Img.src = `${dataArr[2].urlToImage}`
        document.getElementById("s1s2title2")!.innerHTML= `${dataArr[2].title}`
        document.getElementById("s1s2dis2")!.innerHTML= `${dataArr[2].description}`
        //---------

        //----story4
        const sec1s4Img = document.getElementById("s1s2img3")! as HTMLImageElement
        sec1s4Img.src = `${dataArr[3].urlToImage}`
        document.getElementById("s1s2title3")!.innerHTML= `${dataArr[3].title}`
        document.getElementById("s1s2dis3")!.innerHTML= `${dataArr[3].description}`
        //---------

        //----story5
        const sec1s5Img = document.getElementById("s1s2img4")! as HTMLImageElement
        sec1s5Img.src = `${dataArr[4].urlToImage}`
        document.getElementById("s1s2title4")!.innerHTML= `${dataArr[4].title}`
        document.getElementById("s1s2dis4")!.innerHTML= `${dataArr[4].description}`
        //---------

        //-----------

        //----section2

        //---story1
        const sec2s1Img = document.getElementById("sec2img1")! as HTMLImageElement
        sec2s1Img.src = `${dataArr[5].urlToImage}`
        document.getElementById("sec2title1")!.innerHTML= `${dataArr[5].title}`
        //----------

        //---story2
       
        document.getElementById("sec2s1Title")!.innerHTML= `${dataArr[6].title}`
        //----------

        //---story3
       
        document.getElementById("sec2s2Title")!.innerHTML= `${dataArr[7].title}`
        //----------

         //---story4
       
         document.getElementById("sec2s3Title")!.innerHTML= `${dataArr[8].title}`
         //----------

         //---story5
       
         document.getElementById("sec2s4Title")!.innerHTML= `${dataArr[9].title}`
         //----------

         //---story6
       
         document.getElementById("sec2s5Title")!.innerHTML= `${dataArr[10].title}`
         //----------

         //---story7
       
         document.getElementById("sec2s6Title")!.innerHTML= `${dataArr[11].title}`
         //----------

         //section3----
         //---story1
        const sec3s1Img = document.getElementById("sec3img1")! as HTMLImageElement
        sec3s1Img.src = `${dataArr[12].urlToImage}`
        document.getElementById("sec3title1")!.innerHTML= `${dataArr[12].title}`


         //------------

         //-----story2
        const sec3s1img1 = document.getElementById("sec3s1img1")! as HTMLImageElement
        sec3s1img1.src = `${dataArr[13].urlToImage}`
        document.getElementById("sec3s1Title")!.innerHTML= `${dataArr[13].title}`

        //-----story3
        const sec3img2 = document.getElementById("sec3img2")! as HTMLImageElement
        sec3img2.src = `${dataArr[14].urlToImage}`
        document.getElementById("sec3s2Title")!.innerHTML= `${dataArr[14].title}`


        //-----story4
        const sec3img3 = document.getElementById("sec3img3")! as HTMLImageElement
        sec3img3.src = `${dataArr[15].urlToImage}`
        document.getElementById("sec3s3Title")!.innerHTML= `${dataArr[15].title}`

        //-----story5
        const sec3img4 = document.getElementById("sec3img4")! as HTMLImageElement
        sec3img4.src = `${dataArr[16].urlToImage}`
        document.getElementById("sec3s4Title")!.innerHTML= `${dataArr[16].title}`

        //-----story6
        const sec3img5 = document.getElementById("sec3img5")! as HTMLImageElement
        sec3img5.src = `${dataArr[17].urlToImage}`
        document.getElementById("sec3s5Title")!.innerHTML= `${dataArr[17].title}`

        //-----story7
        const sec3img6 = document.getElementById("sec3img6")! as HTMLImageElement
        sec3img6.src = `${dataArr[18].urlToImage}`
        document.getElementById("sec3s6Title")!.innerHTML= `${dataArr[18].title}`

         ///---------



        //------------
        
        }

    fetchData()

    
    
    },[])


    return(
        <div id="Maincontainer">

            <div id="Sec1">
                <div id="sec1Story1">
                    <div style={{width:"53%",marginRight:"20px"}}>
                    <h2 id="sec1Story1Title"></h2>
                    <p id="sec1Story1Dis"></p>
                    </div>

                    <div style={{width:"70%"}}>
                    <img id="sec1Story1Img" src="" alt="" />
                    </div>

                </div>

                <div id="sec1Story2">
                    

                        <div>
                            <img id="s1s2img1"src="" alt="" />
                            <h2 id="s1s2title1"></h2>
                            <p id="s1s2dis1"></p>

                        </div>

                        <div>
                            <img id="s1s2img2"src="" alt="" />
                            <h2 id="s1s2title2"></h2>
                            <p id="s1s2dis2"></p>

                        </div>

                        <div>
                            <img id="s1s2img3"src="" alt="" />
                            <h2 id="s1s2title3"></h2>
                            <p id="s1s2dis3"></p>

                        </div>

                        <div>
                            <img id="s1s2img4"src="" alt="" />
                            <h2 id="s1s2title4"></h2>
                            <p id="s1s2dis4"></p>

                        </div>
                </div>

                
            </div>

            <div id="sec2">
                <div id="sec2story1">
                    <img style={{width:"100%"}} id="sec2img1" src="" alt="" />
                    <h2 id="sec2title1"></h2>
                </div>

                <div id="sec2storycontainer">
                    <div>
                        <h2 id="sec2s1Title"></h2>
                        
                    </div>
                    <div>
                    <h2 id="sec2s2Title"></h2>
                    </div>
                    <div>
                    <h2 id="sec2s3Title"></h2>
                    </div>
                    <div >
                    <h2 id="sec2s4Title"></h2>
                    </div>
                    <div>
                    <h2 id="sec2s5Title"></h2>
                    </div>
                    <div >
                    <h2 id="sec2s6Title"></h2>
                    </div>

                </div>

            </div>

            <div id="sec3">
                

                <div id="sec3storycontainer">
                    <div>
                    <img id="sec3s1img1" src="" alt="" />
                        <h2 id="sec3s1Title"></h2>
                        
                    </div>
                    <div>
                    <img id="sec3img2" src="" alt="" />
                    <h2 id="sec3s2Title"></h2>
                    </div>
                    <div>
                    <img id="sec3img3" src="" alt="" />
                    <h2 id="sec3s3Title"></h2>
                    </div>
                    <div >
                    <img id="sec3img4" src="" alt="" />
                    <h2 id="sec3s4Title"></h2>
                    </div>
                    <div>
                    <img id="sec3img5" src="" alt="" />
                    <h2 id="sec3s5Title"></h2>
                    </div>
                    <div >
                    <img id="sec3img6" src="" alt="" />
                    <h2 id="sec3s6Title"></h2>
                    </div>

                </div>

                <div id="sec3story1">
                    <img id="sec3img1" src="" alt="" />
                    <h2 id="sec3title1"></h2>
                </div>

            </div>



        </div>
    )
}

export default SportPage