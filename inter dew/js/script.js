const size = {
    min: 922,
    medium: 1200,
    large: 1920
}

let pathDrawInformaton = {}

let windowWidth = 0 
window.onload = ()=>{
    windowWidth = window.innerWidth
    dropdownsDrawer(0)
    if (windowWidth >= size.min){
        formConnectWihtUsPlaser()
    }

    connectWithUsSecFormPlaser()

    if (windowWidth <= size.min){
        pathDrawInformaton = {
            svg1:{
                path1:{
                    name:'path1',
                    SPoint:[0,207],
                    EPoint:[404,0]
                }
            },
            svg2:{},
            svg3:{},
            svg4:{
                path1:{
                    name:'path2',
                    SPoint:[0,207],
                    EPoint:[404,0]
                }
            }
        }
    } else if (windowWidth > size.min && windowWidth <= size.medium){
        pathDrawInformaton = {
            svg1:{
                path1:{
                    name:'path1',
                    SPoint:[0,281],
                    EPoint:[546,0]
                }
            },
            svg2:{},
            svg3:{
                path1:{
                    name:'path2',
                    SPoint:[0,0],
                    EPoint:[71,85]
                },
                path2:{
                    name:'path3',
                    SPoint:[71,85],
                    EPoint:[0,133]
                },
                path3:{
                    name:'path4',
                    SPoint:[0,133],
                    EPoint:[140,145]
                },
                path4:{
                    name:'path5',
                    SPoint:[140,145],
                    EPoint:[51,207]
                },
                path5:{
                    name:'path6',
                    SPoint:[51,207],
                    EPoint:[89,123]
                }
            },
            svg4:{
                path1:{
                    name:'path7',
                    SPoint:[0,322],
                    EPoint:[422,0]
                }
            }
        }
    } else if (windowWidth > size.medium && windowWidth <= size.large){
        pathDrawInformaton = {
            svg1:{
                path1:{
                    name:'path1',
                    SPoint:[0,469],
                    EPoint:[914,0]
                }
            },
            svg2:{
                path1:{
                    name:'path2',
                    SPoint:[0,0],
                    EPoint:[246,297]
                },
                path2:{
                    name:'path3',
                    SPoint:[246,297],
                    EPoint:[0,466]
                },
                path3:{
                    name:'path4',
                    SPoint:[0,466],
                    EPoint:[489,509]
                },
                path4:{
                    name:'path5',
                    SPoint:[489,509],
                    EPoint:[176,727]
                },
                path5:{
                    name:'path6',
                    SPoint:[176,727],
                    EPoint:[308,430]
                }
            },
            svg3:{},
            svg4:{
                path1:{
                    name:'path7',
                    SPoint:[0,322],
                    EPoint:[422,0]
                }
            }
        }
    } else if (windowWidth > size.large){
        pathDrawInformaton = {
            svg1:{
                path1:{
                    name:'path1',
                    SPoint:[0,469],
                    EPoint:[914,0]
                }
            },
            svg2:{},
            svg3:{},
            svg4:{
                path1:{
                    name:'path2',
                    SPoint:[0,322],
                    EPoint:[422,0]
                }
            }
        }
    }
    //console.log(pathDrawInformaton)
    svgZonesFinder()
}
window.onresize=()=>{
    windowWidth = window.innerWidth
    formConnectWihtUsPlaser()
    connectWithUsSecFormPlaser()
    location.reload()
}


const butts = document.querySelectorAll('#dropdownContentButt')
let dropdownsContents = document.querySelectorAll('#dropdownContent')
let dropdownsContentsP = document.querySelectorAll('#dropdownContent p')

let clickedBefore = 0
function dropdownsDrawer(contentID){
    butts[clickedBefore].childNodes[1].removeAttribute("style")
    butts[contentID].childNodes[1].style.width = '100%'
    butts[contentID].childNodes[1].style.animation = "none"
    if (windowWidth < size.min)
    {
        dropdownsContents[clickedBefore].style.display = "none";
        dropdownsContents[contentID].style.display = "block"
    } else {
        let workspase = document.querySelector('#showingContent')
        workspase.innerHTML = ''
        let dropdownName = document.createElement('h4')
        //console.log(butts[contentID].childNodes)
        dropdownName.innerHTML = butts[contentID].childNodes[3].innerHTML
        workspase.append(dropdownName)
        workspase.append(dropdownsContentsP[contentID])
    }
    clickedBefore = contentID

}

function formConnectWihtUsPlaser(){
    let textarea = document.querySelector('.textarea')
    if (windowWidth >= size.min){
        let workspase = document.querySelector('#textareaZone')
        workspase.append(textarea)
    } else {
        let connectWithUsZone = document.querySelector('#connectWithUsElse')
        connectWithUsZone.append(textarea)
    }
}



function connectWithUsSecFormPlaser(){
    let reviewsSecContent = document.querySelector('.reviewsSecContent')
    let plasingWorkspase = document.querySelector('.maxWidthFormWPicZone')
    let startZone = document.querySelector('.reviewsContent')
    if (windowWidth >= size.large){
        plasingWorkspase.append(reviewsSecContent)
    } else {
        startZone.append(reviewsSecContent)
    }
}

butts[0].addEventListener('click',()=>dropdownsDrawer(0))
butts[1].addEventListener('click',()=>dropdownsDrawer(1))
butts[2].addEventListener('click',()=>dropdownsDrawer(2))
butts[3].addEventListener('click',()=>dropdownsDrawer(3))
butts[4].addEventListener('click',()=>dropdownsDrawer(4))
butts[5].addEventListener('click',()=>dropdownsDrawer(5))


function svgZonesFinder(){
    let svgZones = document.querySelectorAll('#svgZone')
    //console.log(svgZones)
    for (let index = 0; index < svgZones.length; index++) {
        const svgZone = svgZones[index]
        let pathCoords = pathDrawInformaton[`svg${index+1}`]
        //console.log(pathCoords)
        svgDrawer(svgZone,index,pathCoords)
    }
}

function svgDrawer(svgZone,index,pathCoords) {
    let svgZoneInf = svgZone.getBoundingClientRect()
    //console.log(svgZoneInf)

    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg')
    svg.setAttribute('id',`svg${index + 1}`)
    svg.setAttribute('width',`${svgZoneInf.width}px`)
    svg.setAttribute('height',`${svgZoneInf.height}px`)
    svgZone.append(svg)
    //console.log(svg)
    
    for (const pathId in pathCoords) {
        const pathInf = pathCoords[pathId];
        //console.log(pathInf)
        
        pathDrawer(pathInf,svg)
    }
    //console.log(`${svgZone.offsetLeft} ${svgZone.offsetTop}`)
    svgZone.addEventListener('mousemove',mouseCoords =>{
        pathImpact(mouseCoords,pathCoords,index)
    })
    // svgZone.addEventListener('mousemove',mouseCoords =>{
        
    // })
    
}

function pathDrawer(pathInf,svg){
    let path = document.createElementNS('http://www.w3.org/2000/svg','path')
    path.setAttribute('id',`${pathInf.name}`)
    path.setAttribute("stroke","white")
    path.setAttribute( "fill","transparent")
    path.setAttribute('d',`M ${pathInf.SPoint[0]} ${pathInf.SPoint[1]} Q ${pathInf.SPoint[0]} ${pathInf.SPoint[1]} ${pathInf.EPoint[0]} ${pathInf.EPoint[1]}`)
    svg.append(path)
}

let mousePositionBefore = [0,0,null]
function pathImpact(mouseCoords,pathCoords,indexOfSvg){
    //console.log(offset[0],offset[1])
    let mouseCoordsWOffset = [mouseCoords.offsetX,mouseCoords.offsetY]
    //console.log(`Bef: ${mousePositionBefore[0]} ${mousePositionBefore[1]}`)
    //console.log(mouseCoordsWOffset[0],mouseCoordsWOffset[1])

    for (const pathId in pathCoords) {
        const path = pathCoords[pathId]
        //console.log(path)
        //console.log(pathCoords)
        let mouseYlineX = (path.EPoint[0] - path.SPoint[0]) / ((path.EPoint[1] - path.SPoint[1]) / (mouseCoordsWOffset[1] - path.SPoint[1])) + path.SPoint[0]
        let mouseXlineY = (path.EPoint[1] - path.SPoint[1]) / ((path.EPoint[0] - path.SPoint[0]) / (mouseCoordsWOffset[0] - path.SPoint[0])) + path.SPoint[1]
        
        ////console.log(`(${path.EPoint[0]} - ${path.SPoint[0]}) / ((${path.EPoint[1]} - ${path.SPoint[1]}) / (${mouseCoordsWOffset[1]} - ${path.SPoint[1]})) + ${path.SPoint[0]} = ${mouseYlineX}`)
        ////console.log(`(${path.EPoint[1]} - ${path.SPoint[1]}) / ((${path.EPoint[0]} - ${path.SPoint[0]}) / (${mouseCoordsWOffset[0]} - ${path.SPoint[0]})) + ${path.SPoint[1]} = ${mouseXlineY}`)
        //console.log(`Point on line: ${mouseYlineX} ${mouseXlineY}`)
        
        if(mousePositionBefore[2] !== indexOfSvg){
            mousePositionBefore = [mouseCoordsWOffset[0],mouseCoordsWOffset[1],indexOfSvg]//багфикс при переходе с 1 svg на другую
        } 

        if (((mousePositionBefore[1] <= mouseXlineY) && (mouseXlineY <= mouseCoordsWOffset[1])  && (mouseXlineY >= path.SPoint[1]) && (mouseXlineY <= path.EPoint[1]))|| ((mousePositionBefore[0] <= mouseYlineX) && (mouseYlineX <= mouseCoordsWOffset[0]) && (mouseYlineX >= path.SPoint[0]) && (mouseYlineX <= path.EPoint[0]))){
            let power = Math.floor(6 * Math.sqrt((mouseCoordsWOffset[0] - mousePositionBefore[0])**2 + (mouseCoordsWOffset[1] - mousePositionBefore[1])**2))
            let pathCenterPosition = [((path.EPoint[0] - path.SPoint[0]) / 2 + path.SPoint[0]),((path.EPoint[1] - path.SPoint[1]) / 2 + path.SPoint[1])]
            //console.log(`bottom impact detected ${path.name}: ${mouseYlineX},${mouseXlineY} power: ${power} center: ${pathCenterPosition[0]},${pathCenterPosition[1]}`)
            pathAnimator([Math.floor(mouseYlineX),Math.floor(mouseXlineY)],power,pathCenterPosition,path.name)
        } else if (((mousePositionBefore[1] >= mouseXlineY) && (mouseXlineY >= mouseCoordsWOffset[1]) && (mouseXlineY >= path.SPoint[1]) && (mouseXlineY <= path.EPoint[1])) || ((mousePositionBefore[0] >= mouseYlineX) && (mouseYlineX >= mouseCoordsWOffset[0]) && (mouseYlineX >= path.SPoint[0]) && (mouseYlineX <= path.EPoint[0]))){
            let power = Math.floor(6 * Math.sqrt((mouseCoordsWOffset[0] - mousePositionBefore[0])**2 + (mouseCoordsWOffset[1] - mousePositionBefore[1])**2))
            
            let pathCenterPosition = [((path.EPoint[0] - path.SPoint[0]) / 2 + path.SPoint[0]),((path.EPoint[1] - path.SPoint[1]) / 2 + path.SPoint[1])]
            //console.log(`top impact detected ${path.name}: ${mouseYlineX},${mouseXlineY} power:${power} center: ${pathCenterPosition[0]},${pathCenterPosition[1]}`)
            pathAnimator([Math.floor(mouseYlineX),Math.floor(mouseXlineY)],-power,pathCenterPosition,path.name)
        }


    }

    mousePositionBefore[0] = mouseCoordsWOffset[0]
    mousePositionBefore[1] = mouseCoordsWOffset[1]
}

function pathAnimator(pointOnPath,power,pathCenterPosition,pathId){
    //console.log(pointOnPath)
    let path = document.querySelector(`#${pathId}`)
    let pathParent = path.parentNode
    //console.log()
    pointOnPath[1] += power
    let missingPointsMultiplier = 1.5//скорость анимаци
    let range = Math.sqrt((pointOnPath[0] - pathCenterPosition[0])**2 + (pointOnPath[1] - pathCenterPosition[1])**2)
    let KBefore = 1
    let Ftick = true
    pathFrame(1, 0, 1)
    function pathFrame(missingPoints,missingRewerse,fading){
        let strangePoint
        //console.log(Ftick)
        let neededRange = 0
        if (Ftick === true){

            if (missingPoints >=0 && missingPoints < range){
                missingPoints *= missingPointsMultiplier
                missingRewerse = missingPoints
            } 
            else if (missingPoints >= range && KBefore >= -0.999){
                missingRewerse /=missingPointsMultiplier
                missingPoints = 2*range- missingRewerse
            }else if(KBefore < -0.999){
                Ftick = false
                missingRewerse = 1
                missingPoints = range*2
                //console.log('false////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////')
                //console.log(Ftick)
            }
        }
        else if(Ftick === false){
            //console.log('nextether')
            if (missingPoints < 1){
                missingRewerse = 0
                missingPoints = 1
                Ftick = true
            }
            else if (missingPoints >=range && missingPoints <= range*2){
                missingRewerse *= missingPointsMultiplier
                //missingRewerse = missingPoints
                missingPoints -= missingRewerse
                //console.log(missingPoints)
            } 
            else if (missingPoints >= 1 && missingPoints < range){
                // console.log('pfdthiftv')
                missingPoints /= missingPointsMultiplier
            }
        }
        neededRange = range - missingPoints

        let k = neededRange/range

    
        let animateStartPoint = [(pathCenterPosition[0] + (pointOnPath[0] - pathCenterPosition[0]) * fading),(pathCenterPosition[1] + (pointOnPath[1] - pathCenterPosition[1]) * fading)]
        fading -= 0.001//длительность
        //console.log(fading)
        //console.log(`[(${pathCenterPosition[0]} + (${pointOnPath[0]} - ${pathCenterPosition[0]}) * ${fading}),(${pathCenterPosition[1]} + (${pointOnPath[1]} - ${pathCenterPosition[1]})* ${fading})]${animateStartPoint[0]}, ${animateStartPoint[1]}`)
        let neededPoint = [(pathCenterPosition[0] + (animateStartPoint[0] - pathCenterPosition[0]) * k),(pathCenterPosition[1] + (animateStartPoint[1] - pathCenterPosition[1]) * k)]
        //console.log(`[(${pathCenterPosition[0]} + (${pointOnPath[0]} - ${pathCenterPosition[0]}) * ${k}),(${pathCenterPosition[1]} + (${pointOnPath[1]} - ${pathCenterPosition[1]})* ${k})]missing points:${missingPoints}, ${missingRewerse} ${range},${k}`)
        
        pathAttr = path.getAttribute('d').split(' ')
        pathAttr[4] = neededPoint[0]
        pathAttr[5] = neededPoint[1]
        pathAttr = pathAttr.join(' ')
        path.setAttribute('d',`${pathAttr}`)
        //console.log(pathAttr)
        //console.log(neededPoint)
        //console.log(k)
        KBefore = k
        if (fading > 0){
            setTimeout(pathFrame,1000/144,missingPoints,missingRewerse,fading)
        }
    }
}