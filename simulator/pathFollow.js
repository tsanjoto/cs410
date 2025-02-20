queue()
.defer(d3.xml, "wiggle.svg", "image/svg+xml")
.await(ready);

function ready(error, xml) {
    var dependencyData1 = dependencyData

    // global constants
    var REAL_DATA = true;   //if true, run the code with real data
    var ONE_TICK = 500;     //speed of one tick
    var TICK_DELAY = ONE_TICK;
    var SPEED_COUNTER = 0;
    var GROUND_LEVEL = 200;
    var SPEED_CONTROLLER = 2;
    
    var realDataForRelationsChange = [{"date":{"year":2014,"month":10,"day":24,"hour":0,"minute":0,"second":0},"commits":[{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":14,"minute":39,"second":9},"filesAdded":[{"fileName":"A","parents":["D"]},{"fileName":"B","parents":["A"]},{"fileName":"C","parents":["A"]},{"fileName":"D","parents":[]},{"fileName":"E","parents":["D"]}],"filesModified":[],"relationshipModified":[],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":14,"minute":52,"second":29},"filesAdded":[],"filesModified":["C","E"],"relationshipModified":[{"fileName":"C","parents":["B"]},{"fileName":"E","parents":[]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":14,"minute":53,"second":23},"filesAdded":[],"filesModified":["A","E"],"relationshipModified":[{"fileName":"A","parents":[]},{"fileName":"E","parents":["A"]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":14,"minute":55,"second":0},"filesAdded":[],"filesModified":["B","C"],"relationshipModified":[{"fileName":"B","parents":["D"]},{"fileName":"C","parents":["D"]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":18,"minute":20,"second":25},"filesAdded":[{"fileName":"F","parents":[]}],"filesModified":["B","C","E"],"relationshipModified":[{"fileName":"B","parents":["A","C","E","D","F"]},{"fileName":"C","parents":[]},{"fileName":"E","parents":[]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":18,"minute":21,"second":25},"filesAdded":[],"filesModified":["B","E"],"relationshipModified":[{"fileName":"B","parents":["A","C","D","F"]},{"fileName":"E","parents":["F"]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":18,"minute":22,"second":21},"filesAdded":[],"filesModified":["B"],"relationshipModified":[{"fileName":"B","parents":["D","F"]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":18,"minute":22,"second":53},"filesAdded":[],"filesModified":["B"],"relationshipModified":[{"fileName":"B","parents":["A","C","E"]}],"filesDeleted":[]},{"author":"BoRa Choi","Email":"boradori_@hotmail.com","timestamp":{"year":2014,"month":10,"day":24,"hour":18,"minute":39,"second":9},"filesAdded":[],"filesModified":[],"relationshipModified":[],"filesDeleted":["A","B"]}]}];
    
    if(REAL_DATA){
        for(var i = 0; i < realData.length; i++){
            realData[i].date = new Date(realData[i].date.year,realData[i].date.month,realData[i].date.day,0,0,0);
            if(realData[i].commits !== null){
                for(var j = 0; j < realData[i].commits.length;j++){
                    var tempDate = realData[i]["commits"][j]["timestamp"];
                    realData[i]["commits"][j]["timestamp"] = new Date(tempDate["year"],tempDate["month"],tempDate["day"],tempDate["hour"],tempDate["minute"],tempDate["second"])  // array
                }
            }
        }

        console.log(realData)
        console.log(dependencyData)
    }
    //mock data
    var data = [
        {
            'date':new Date(2014, 0, 1, 0, 0, 0, 0),
            'commits'://this is already sorted chronologically
            [
                {
                    'author':'Thompson',
                    'timestamp': new Date(2014, 0, 1, 1, 1 , 1, 1),
                    'filesAdded': 
                    [
                        {
                            'fileName':'fruits',
                            'parents':
                            [
                                        //to add if exist
                            ]
                        },
                        {
                            'fileName':'tools',
                            'parents':
                            [
                            ]
                        }
                    ],
                    
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },
                {
                    'author':'Byung',
                    'timestamp': new Date(2014, 0, 1, 13, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'animals',
                        'parents':
                        [
                        //to add if exist
                        ]
                    },
                    {
                        'fileName':'cat',
                        'parents':
                        [
                        'animals'
                        ]
                    }  
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },
                {
                    'author':'Thompson',
                    'timestamp': new Date(2014, 0, 1, 3, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'apple',
                        'parents':
                        [
                        'fruits'
                        ]
                    },
                    {
                        'fileName':'oranges',
                        'parents':
                        [
                        'fruits'
                        ]
                    } 
                    ],                   
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },
                {
                    'author':'Thompson',
                    'timestamp': new Date(2014, 0, 1, 15, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'persian',
                        'parents':
                        [
                        'cat'
                        ]
                    },
                    {
                        'fileName':'dog',
                        'parents':
                        [
                        'animals'
                        ]
                    } 
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                }
            ]
        },
        {
            'date':new Date(2014, 0, 2, 0, 0, 0, 0),
            'commits':
            [
                {
                    'author':'Aki',
                    'timestamp': new Date(2014, 0, 2, 5, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'mandarin',
                        'parents':
                        [
                        'oranges'
                        ]
                    },
                    {
                        'fileName':'hammer',
                        'parents': 
                        [
                        'tools'
                        ]
                    }
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },
                {
                    'author':'Thompson',
                    'timestamp': new Date(2014, 0, 2, 7, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'banana',
                        'parents':
                        [
                        'fruits'
                        ]
                    },
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },    
                {
                    'author':'Thompson',
                    'timestamp': new Date(2014, 0, 2, 8, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'clothes',
                        'parents':
                        [
                        ]
                    },
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                },
                {
                    'author':'Byung',
                    'timestamp': new Date(2014, 0, 2, 9, 1 , 1, 1),
                    'filesAdded': 
                    [
                    {
                        'fileName':'pants',
                        'parents':
                        [
                        'clothes'
                        ]
                    },
                    ],
                    'filesModified': [],
                    'filesDeleted':[],
                    'relationshipModified':[]
                }
            ]
        }
    ];

    if(REAL_DATA){
        data = realData
    }

    var authors = {}
    var rooms = {}
    var grid = new Grid()
    
    
    //Adding our svg file to HTML document
    var importedNode = document.importNode(xml.documentElement, true);
    d3.select("#pathAnimation").node().appendChild(importedNode);
    
    var svg =   d3.select("svg")
                .attr("width",window.innerWidth)
                .attr("height",window.innerHeight);
    
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
    
    var tooltipAnt = d3.select("body").append("div")
    .attr("class", "tooltipAnt")
    .style("opacity", 0);

    var isPaused = false;
    var universalHour;
    var commits;
    var commitsIndex = 0;
    var speedFlag = false;


    simulateDay(0, data.length, data)


    function simulateDay(index, lastIndex, iData){
        console.log("check1");
        if (index < lastIndex) {
            var entry = iData[index];
            today = new Date(entry["date"]);
            var tommorrow = new Date(entry["date"]);
            tommorrow.setDate(tommorrow.getDate()+1);


            commits = entry["commits"];

            var intervalId = setInterval(function() {

                if(!isPaused){
                    todayLabel.text(today)

                    console.log(today.getTime());
                    if (today.getTime() < tommorrow.getTime()){

                        if(today.getHours()==0||today.getHours()==12){
                            initializeSky(today.getHours());
                        }

                        if(today.getHours()==0){
                            initializeOrbits();
                        }
                        
                        if(commits !== null){
                            iterateCommit(today,commits, commitsIndex)
                        }

                        today.setHours(today.getHours()+1);

                    } else {
                        pauseAnimationForCommit();
                        commitsIndex = 0
                        clearInterval(intervalId)
                        if(speedFlag){
                            TICK_DELAY = ONE_TICK;
                            speedFlag = false;
                        }
                        else{
                            console.log(Math.pow(2,SPEED_COUNTER))
                            console.log(SPEED_COUNTER)
                            TICK_DELAY = TICK_DELAY / Math.pow(2,SPEED_COUNTER);
                            SPEED_COUNTER = 0;
                        }

                        simulateDay(index+1,lastIndex,iData)
                    }
                }
            }, TICK_DELAY);
        } else {
            //after finishing all commits
            todayLabel.text("Project ended")
        }
    }


    var iterateCommit = function(today, commits, index){
        if(index < commits.length){
            var commit = commits[index]

            if(!commit["processed"]){
                if(today.getTime()>commit["timestamp"]){
                    isPaused = true;
                    universalHour = today.getHours();
                    pauseAnimationForCommit();
                    commit["processed"] = true;
                    var author = authors[commit["author"]];

                    if(!author){
                        author = {};
                        author["contribution"] = 10;
                        
                        var ant = new ants(svg,commit["author"]);
                        ant.name = commit["author"];
                        author["antMarker"] = ant;
                        
                        authors[commit["author"]] = author;
                        checkRoom(commit, ant);

                    } else {
                        author["contribution"]  += 1;
                        var ant = author["antMarker"]

                        checkRoom(commit, ant);
                    }
                        
                    //Tooltip for each ant
                    mergedRoom.selectAll('.eachAnt').on("mouseover", mouseoverAnt)
                    .on("mousemove", mousemove)
                    .on("mouseout", mouseout)
                    .attr("author", function(d) { return commit['author']});
                        
                }else{
                    if(isPaused){
                        console.log("hE")                        
                        isPaused = false;
                        universalHour = today.getHours();
                        resumeAnimeationFromCommit(universalHour);
                    }
                }
            }            
        }
    }

    //function to initialize sky
    function initializeSky(time){
        var durationTime = TICK_DELAY * 12;

        sky.transition()
        .duration(durationTime)
        .style("fill", skycolor(time));

        star.transition()
        .duration(durationTime)
        .style("opacity", starcolor(time));
    }

    //funcion to initialize sun and moon
    function initializeOrbits(){
        var durationTime = TICK_DELAY * 24;

        sun
        .transition()
        .duration(durationTime)
        .ease("in-out")
        .attrTween("transform", orbit(1/4));

        moon
        .transition()
        .duration(durationTime)
        .ease("in-out")
        .attrTween("transform", orbit(3/4));
    }

    //stopping the animation except the ants
    function pauseAnimationForCommit(){
        sky.transition().duration(0);
        star.transition().duration(0);
        sun.transition().duration(0);
        moon.transition().duration(0);
    }

    //resuming the animation of the background
    function resumeAnimeationFromCommit(time){
        var tweleveTime = (time % 12);
        var skyDuration = (12 - tweleveTime)*TICK_DELAY;
        var orbitDuration = 24 * TICK_DELAY;

        sky.transition().duration(skyDuration)
        .style("fill", resumeSkyColor(time));
        star.transition().duration(skyDuration)
        .style("opacity", resumeStarColor(time));

        sun.transition().duration(orbitDuration)
        .ease("in-out")
        .attrTween("transform", orbit(sunPosition(time)));
        moon.transition().duration(orbitDuration)
        .ease("in-out")
        .attrTween("transform", orbit(moonPosition(time)));
    }

    // retrieves the color of sky
    function resumeSkyColor(time){
        if(time < 12)
            return skycolor(0);
        else
            return skycolor(12);
    }

    // retrieves the color of stars
    function resumeStarColor(time){
        if(time < 12)
            return starcolor(0);
        else
            return starcolor(12);
    }

    // retruns the position of sun
    function sunPosition(time){
        // depending on the time, calculates the angle
        return ((6+time)%24)/24;
    }

    // returns the positon of moon
    function moonPosition(time){
        // depending on the time, calculates the angle
        return ((18+time)%24)/24;
    }
 
    var sky = createBackground(svg);
    
    var star = createStars(svg);
    
    var sun =   svg.append("circle")
    .attr("r", 40)
    .style("fill", "yellow");
    var moon =  svg.append("circle")
    .attr("r", 30)
    .style("fill", "white");
    
    var ground =    svg.append("rect")
    .attr("x", 0)
    .attr("y", GROUND_LEVEL)
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight-GROUND_LEVEL)
    .style("fill", "#A9672E");
    
    var todayLabel =    svg.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .text("Welcome to Git-Java Source Code Analyzer")
    .attr("stroke-width", 1)
    .attr("stroke", "black")
    .style("font-family", "Verdana")
    .style("font-size", "20px")
    .style("fill", "white");


    function checkRoom(files, ant){
        if (ant != null){
            //console.log(files);
            filesAdded = files['filesAdded']
            filesAdded.forEach(function(file){
                var filename = file['fileName'];
                var existingFile = rooms[filename];
                if(!existingFile){
                    //no room of this file... so create a new room
                    var newRoom = new Room(file)
                    rooms[filename] = newRoom; //creating an empty dictionary in the global "room" variable with the filename as the key
                    ant.moveToRoom(newRoom)


                } else {
                    //room exist so modidfy that room
                }
            

            });
            filesModified = files['filesModified']
            filesModified.forEach(function(file){
                                  var existingRoom = rooms[file];
                                  ant.moveToRoom(existingRoom)
                                  })

            var a  = d3.select(ant.group1);
            a.moveToFront();            

            ant.runAllMove(ant.lastMoveIndex+1);
            ant.lastMoveIndex = ant.moveStack.length -1
        }
    }
    
    
    
 
    

    function Grid(){
        this.rooms = [[]];
        this.pushingRoom;

        this.delete = function(x,y){
            this.rooms[y][x]=0
        }

        this.moveChildren = function(parentRoom){
            for(var i = parentRoom.childs.length-1; i >= 0 ;i--){
                if(parentRoom.childs[i].svg){
                    grid.delete(parentRoom.childs[i].x,parentRoom.childs[i].y)
                    if (grid.pushingRoom){
                        //grid.pushingRoom.moveStack.push(parentRoom.childs[i])
                    }
                    //parentRoom.childs[i].move(parentRoom.childs[i].x+1, parentRoom.childs[i].y)
                }
                parentRoom.childs[i].x = parentRoom.childs[i].x + 1     
                var callback = grid.moveChildren                       
                grid.push(parentRoom.childs[i].x, parentRoom.childs[i].y,parentRoom.childs[i],callback)
            }  
        }

        this.push = function (x,y,room, callback){

            if (y >= this.rooms.length) {
                this.rooms.push([]);
            }

            if (x >= this.rooms[y].length){
                this.rooms[y].push(0);
            }

            if (!this.rooms[y][x]) {
                //if no room in the grid
                this.rooms[y][x]=room
                if(callback){
                    this.pushingRoom.moveStack.push(room)
                    callback(room)
                }
            }else {
                //theres room in grid
                var occupyingRoom = this.rooms[y][x]

                if (occupyingRoom.parents.length == 0 && !(room.svg)){
                    room.x = room.x + 1                    
                    this.push(x+1, y, room)

                } else {
                    //search for the root and then movement
                    occupyingRoomBranch = occupyingRoom
                    while(occupyingRoomBranch.parents.length != 0){
                        occupyingRoomBranch = occupyingRoomBranch.parents[0]
                    }
                    currentBranch = room
                    while(currentBranch.parents.length != 0){
                        currentBranch = currentBranch.parents[0]
                    }
                    
                    var occupyingRoot = occupyingRoomBranch
                    var currentRoot = currentBranch

                    var targetMove
                    if (currentRoot.x > occupyingRoot.x){
                        targetMove = currentRoot                
                    } else {
                        targetMove = occupyingRoot 
                    }
                    this.delete(targetMove.x,targetMove.y)
                    targetMove.x = targetMove.x + 1

                    var pushChildren = this.moveChildren
                    var nextRoom = this.rooms[targetMove.y][targetMove.x]
                    if (nextRoom) {
                        if (nextRoom.svg){
                            this.delete(nextRoom.x, nextRoom.y)
                        }
                        nextRoom.x = nextRoom.x + 1
                        var pushNextRoomChildren = this.moveChildren
                        this.push(nextRoom.x, nextRoom.y, nextRoom,pushNextRoomChildren)
                    }

                    this.push(targetMove.x,targetMove.y,targetMove, pushChildren)
                    if(!this.rooms[y][x]){
                        this.rooms[y][x]=room
                        if(callback){
                            this.pushingRoom.moveStack.push(room)
                            callback(room)
                        }
                    }

                }
            }
        }
    }
    
    
    
    var mergedRoom = svg.append('g')
                        .call(d3.behavior.drag().origin(function() {
                                                    var t = d3.select(this);
                                                    return {    x: t.attr("x") + d3.transform(t.attr("transform")).translate[0],
                                                                y: t.attr("y") + d3.transform(t.attr("transform")).translate[1]};
                                                })
                                                .on("drag", function(d,i) {
                                                    d3.select(this).attr("transform", function(d,i){
                                                        return "translate(" + [ d3.event.x,0 ] + ")"
                                                    })
                                                })
                        )


    var inviGround = mergedRoom.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 999999)
    .attr("height", 999999)
    .attr("opacity", 0);
    

    function Room(file, ant){
        var roomRx = 80; //Rx means radius in x direction since the room is ellipse
        var roomRy = 50; //Ry means radius in y direction
        var distanceXBetweenRooms = 50;
        var distanceYBetweenRooms = 25;
        var distanceToBorder = 20;
        var distanceToGround = 25;

        var ROOM_DELAY = TICK_DELAY/(SPEED_CONTROLLER*2.5);

        this.x = -1; //Coordinates in respect to grid
        this.y = -1;
        this.nameLabel
        this.svg
        this.parents = [];
        this.childs = [];
        this.name = file['fileName'];
        this.tunnel
        this.group
        this.antsInside = {}
        this.moveStack = [] 


        this.showSvg = function (delay, index, ant){
            this.tunnel.transition()
            .duration(ROOM_DELAY)
            .delay((delay*(index-ant.lastMoveIndex)))
            .attr("opacity", 1)

            this.svg.transition()
            .duration(ROOM_DELAY)
            .delay((delay*(index-ant.lastMoveIndex)))            
            .attr("opacity", 1)

            this.nameLabel.transition()
            .duration(ROOM_DELAY)
            .delay((delay*(index-ant.lastMoveIndex)))            
            .attr("opacity", 1)
            .each("end", ant.runAllMove(index+1))
        }

        this.calcX = function(){
            return (roomRx*2 + distanceXBetweenRooms)*(this.x)+(roomRx+distanceToBorder)
        }

        this.calcY = function(){
            return GROUND_LEVEL+distanceToGround+roomRy+(this.y * (distanceYBetweenRooms + (roomRy*2)))
        }
        

        this.addSvg = function (x, y){
            var color = "hsl(" + Math.random() * 360 + ",100%,50%)";
            var group = mergedRoom.append("g").attr("class", "eachRoom");
            var calcX = (roomRx*2 + distanceXBetweenRooms)*(this.x)+(roomRx+distanceToBorder)
            var calcY = GROUND_LEVEL+distanceToGround+roomRy+(this.y * (distanceYBetweenRooms + (roomRy*2)))

            var tunnel =    group.append("line")
                            .attr("x1", calcX)
                            .attr("y1", calcY)
                            .attr("x2", calcX)
                            .attr("y2", GROUND_LEVEL)
                            .attr("stroke-width", 10)
                            .attr("stroke", color)
                            .attr("opacity",0);

            var roomSvg = group.append("ellipse")
                            .attr("cx", calcX)
                            .attr("cy", calcY)
                            .attr("rx", roomRx)
                            .attr("ry", roomRy)
                            .attr("fill",color)
                            .attr("opacity",0);

            var name =  group.append("text")
                        .attr("x", calcX)
                        .attr("y", calcY)
                        .text(file['fileName'])
                        .attr("stroke-width", 1)
                        .attr("stroke", "black")
                        .style("font-family", "Verdana")
                        .style("font-size", "12px")
                        .style("fill", "white")
                        .attr("opacity",0);
            
            if (y > 0) {
                var parentRoom = this.parents[0]
                var parentRoomSvg = this.parents[0].svg
                var color = parentRoomSvg.attr('fill');

                tunnel
                .attr("x2", (roomRx*2 + distanceXBetweenRooms)*(parentRoom.x)+(roomRx+distanceToBorder))
                .attr("y2", parentRoomSvg.attr('cy'))
                .attr("stroke-width", 10)
                .attr("stroke", color);

                roomSvg.attr("fill", color);
            }

            this.nameLabel = name
            this.svg = roomSvg;
            this.tunnel = tunnel
            this.group = group;
        }
        this.move = function (delay, i,j, ant){
            var moveRoomDuration = TICK_DELAY/SPEED_CONTROLLER;
            var newXCoor = (roomRx*2 + distanceXBetweenRooms)*(this.x)+(roomRx+distanceToBorder)
            //console.log("moving..."+this.name)
            var parentXcoor = newXCoor
            if (this.parents[0]){
                parentXcoor = (roomRx*2 + distanceXBetweenRooms)*(this.parents[0].x)+(roomRx+distanceToBorder)
            }                
                
                this.tunnel.transition()
                .duration(200)
                .delay((delay*(i-ant.lastMoveIndex)))
                .attr("x1", newXCoor)
                .attr("x2", parentXcoor)
                this.svg.transition()
                .duration(200)
                .delay((delay*(i-ant.lastMoveIndex)))
                .attr("cx", newXCoor)
                
                for (var singleAnt in this.antsInside) {
                    if (this.antsInside.hasOwnProperty(singleAnt)) {
                        var movingAnt = this.antsInside[singleAnt]

                        movingAnt.group1.transition()
                        .duration(200)
                        .delay((delay*(i-ant.lastMoveIndex)))
                        .attr("transform", "translate(" + [newXCoor,this.calcY()] + ")")
                        movingAnt.x = newXCoor
                    }
                }

                this.nameLabel.transition()
                .duration(200)
                .delay((delay*(i-ant.lastMoveIndex)))
                .attr("x",newXCoor)
                .each("end",ant.runAllMove(i,j+1))
        }


        
        if(rooms[file['parents']]){
            //this room is a child of some file

            var parentRoom = rooms[file['parents'][0]];
            var numParentKids = parentRoom.childs.length;

            this.parents = [];
            this.childs = [];
            grid.pushingRoom = this            
            this.parents.push(parentRoom);
            parentRoom.childs.push(this);

            this.x = parentRoom.x + numParentKids
            this.y = parentRoom.y + 1;
            grid.push(this.x, this.y, this)
            this.addSvg(this.x, this.y)

        } else {
            //this room is a root room
            //50 is the ry 
            //25 is tunner distance

            this.y = 0;
            this.x = 0;
            this.parents = [];
            this.childs = [];

            grid.pushingRoom = this

            grid.push(this.x, this.y, this)

            this.addSvg(this.x, this.y)
        }

       
        //Tooltips for each room.
        mergedRoom.selectAll('.eachRoom').on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);
        
        dependencyArray = {}
        console.log(dependencyData1)
        console.log("data length")
        for(i = 1; i < dependencyData1.length; i++){
            console.log(dependencyData1[i]['fileName'])
            if(dependencyData1[i]['fileName'] == this.name){
                var dependencyArray = dependencyData1[i]["targetedBy"];
            break;
            }
        }
        depString = "";
        if(dependencyArray != {}){
            for(i = 0; i < dependencyArray.length; i++){
                    depString = depString.concat(dependencyArray[i].concat("</br>"));
                    console.log(depString)
            }
            temp = depString.trim()
            if (!temp) {
                depString = "none";
            }
            this.group.attr("dependency", function(d) {return depString});
        }else
            this.group.attr("dependency", function(d) {return "hellllllo"});
        
        this.group.attr("name", function(d) { return file['fileName']});     // TEXT HERE 1
        

        //Mouseover function for each room, displays shortened tooltip
        function mouseover()
        {
            var myRoom = d3.select(this);
            myRoom.attr("class", "dataRoomSelected");
            
            tooltip.html(    //Populate tooltip text
                         "Name: " + myRoom.attr("name") + "</br>" +                              // TEXT HERE 2
                         "Dependency: " + myRoom.attr("dependency")
                         )
            .transition()
            .delay(150)
            //.duration(250)
            .style("opacity", 1);
        }
    }
    
    
    function mousemove()
    {    //Move tooltip to mouse location
        return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
    }


    function mouseout()
    {
        tooltip
        .transition()
        .delay(50)
        .style("opacity", 0)    //Make tooltip invisible
        
        tooltipAnt
        .transition()
        .delay(50)
        .style("opacity", 0)
        
        d3.select(this).attr("class", "dataRoom");
        
    }
    
    
    function countNumberRootRooms(){
        var count = 0;
        //console.log("print all rooms");
        //console.log(rooms)
        for(var key in rooms){
            var room = rooms[key];
                //console.log("printing a root room:");
                //console.log(room)

            //console.log("key:"+key);
            if(room.parents.length == 0){
                count++;
            }
        }
        return count;
    }


    //Get path start point for placing marker
    function pathStartPoint(path) {
        var d = path.attr("d"),
        dsplitted = d.split(" ");
        return dsplitted[1].split(",");
    }
    

    function transition() {
        marker.transition()
        .duration(TICK_DELAY)
        .attrTween("transform", translateAlong(path.node()))
    }
    
    function ants(canvas, newName) {
        //initializing variable used inside
        //height of ant
        var height = 55;
        //initializing random color
        var color = "hsl(" + Math.random() * 360 + ",100%,50%)";
        var position = 0;

        //setting variables for ant
        this.height = height;
        this.color = color;
        this.position = 0;
        this.direction = "left";
        this.name = newName        
        this.lastMoveIndex = -1;
        this.moveStack = []
        this.roomStack = []
        this.room
        this.moveDuration = 300

        this.createAnt = function createAnt(canvas, height, color, position){
             
            // Draw the Circle
            var circleData = [
            { "cx": position+20, "cy": 20, "radius": 20, "color": color },
            { "cx": position+50, "cy": 20, "radius": 20, "color": color },
            { "cx": position+80, "cy": 20, "radius": 20, "color": color },
            { "cx": position+87, "cy": 15, "radius": 6, "color": "white" },
            { "cx": position+87, "cy": 15, "radius": 3, "color": color } ];

            // put circles in group1
            var group1 = mergedRoom.append("g");

            var circles = group1.selectAll("circle")
            .data(circleData)
            .enter()
            .append("circle");
            
            var circleAttributes = circles
            .attr("cx", function (d) {return d.cx;})
            .attr("cy", function (d) {return d.cy;})
            .attr("r", function (d) {return d.radius;})
            .style("fill", function (d) {return d.color;});
            
            // draw legs in group1
            for(i = 0; i < 2; i++){
                for(j = 0; j < 2; j++){
                    var line = group1.append("line")
                    .attr("x1", position+13+(j*12)+(i*47))
                    .attr("y1", 20)
                    .attr("x2", position+13+(j*12)+(i*47))
                    .attr("y2", 55)
                    .attr("stroke-width", 2)
                    .attr("stroke", color);
                }
            }
            
            var name = group1.append("text")
            .attr("x", position)
            .attr("y", 5)
            .text(this.name)
            .attr("stroke-width", 1)
            .attr("stroke", "white")
            .style("font-family", "Verdana")
            .style("font-size", "15px")
            .style("fill", "black");

            group1
            .attr("transform", "translate(" + [7,GROUND_LEVEL-height] + ")");

            return group1;
        }

        this.group1 = this.createAnt(canvas, height, color, position);
        this.moveDuration = TICK_DELAY/SPEED_CONTROLLER;


        this.moveUpToGround = function(room){
            var tempRoom = room;
            while(tempRoom.parents[0]){
                parentRoom = tempRoom.parents[0]
                this.moveAnt(parentRoom.svg[0][0].cx["baseVal"].value, parentRoom.svg[0][0].cy["baseVal"].value )
                this.roomStack.push(parentRoom)
                tempRoom = parentRoom
                this.room = parentRoom
            }
            this.moveAnt(this.room.svg[0][0].cx["baseVal"].value, GROUND_LEVEL-55)
            this.roomStack.push(0)
            this.room = 0
        }


        this.moveDownToParent = function(room){
            var roomPath = []
            var tempRoom = room;

            while(tempRoom.parents[0]){
                parentRoom = tempRoom.parents[0]
                roomPath.push(parentRoom)
                tempRoom = parentRoom                
            }
            this.moveAnt(roomPath[roomPath.length-1].svg[0][0].cx["baseVal"].value, GROUND_LEVEL-55)
            this.roomStack.push(0)            
            for (var i = roomPath.length-1 ; i >=0 ; i--){
                this.moveAnt(roomPath[i].svg[0][0].cx["baseVal"].value, roomPath[i].svg[0][0].cy["baseVal"].value)
                this.roomStack.push(roomPath[i])
            }
        }
        

        this.moveToRoom = function(room){

            if(this.room){
                var tempCurrentRoom = this.room
                this.moveUpToGround(tempCurrentRoom)
                delete tempCurrentRoom.antsInside[this.name]
            }

            
            if(room.parents[0]){                
                this.moveDownToParent(room)

                this.moveStack.push(room) 
                this.roomStack.push(0)


                this.moveAnt(room.svg[0][0].cx["baseVal"].value,room.svg[0][0].cy["baseVal"].value)
                this.room = room                
                this.roomStack.push(room)

            }else{
                this.moveAnt(room.svg[0][0].cx["baseVal"].value, GROUND_LEVEL-55)//move to the correct x on upper ground
                this.roomStack.push(0)

                this.moveStack.push(room)//creationg of room   
                this.roomStack.push(0)

                this.moveAnt(room.svg[0][0].cx["baseVal"].value, room.svg[0][0].cy["baseVal"].value) //move to newly created room
                this.room = room
                this.roomStack.push(room)
            }
        }

        //runs the moves stack in the moveStack array
        this.runAllMove = function(i, j){
            if (i < this.moveStack.length && i >= 0){

                if(!this.moveStack[i].svg){
                    if(this.roomStack[i]){
                        this.roomStack[i].antsInside[this.name]= this
                        if(i-1>=0){
                            var counter = 1;
                            while (!this.roomStack[i-counter].svg){
                                counter++
                                if(i - counter < 0){
                                    break;
                                }
                            }
                            if(i - counter >= 0){
                                delete this.roomStack[i-counter].antsInside[this.name]
                            }
                        }
                    }

                    this.group1.transition()
                    .duration(this.moveDuration)
                    .delay(this.moveDuration*(i-this.lastMoveIndex))
                    .attr("transform", this.moveStack[i])
                    .each("end", this.runAllMove(i+1))

                }else{
                    var currentRoom = this.moveStack[i]
                    if(currentRoom.moveStack.length > 0){
                        if(!j){
                            j = 0
                        }                        
                        if (j < currentRoom.moveStack.length  && j >= 0){
                            currentRoom.moveStack[j].move(this.moveDuration, i,j,this)
                        }  else {
                            currentRoom.moveStack = []
                        }
                    }

                    currentRoom.showSvg(this.moveDuration, i, this)
                }
            }

            else{
                if(commitsIndex+1 < commits.length){
                    this.group1.transition()
                    .delay(this.moveDuration*(i-this.lastMoveIndex))
                    .each("end", function(){
                        commitsIndex = commitsIndex + 1
                        iterateCommit(today,commits, commitsIndex)
                    })
                } else {
                    this.group1.transition()
                    .delay(this.moveDuration*(i-this.lastMoveIndex))
                    .each("end", function(){
                        isPaused = false;
                        resumeAnimeationFromCommit(universalHour);
                    })
                }
            }
        }


        //add the next move into a moveStack 
        this.moveAnt = function(x,y){
            var pos = this.position;
            var direction = this.direction;
            this.moveStack.push("translate(" + [x,y] + ")")
            this.position = x;
        }
    }

    
    //buttons for changing speed
    var resumeBtn = svg.append("rect")
    .attr("x", window.innerWidth - 100)
    .attr("y", 10)
    .attr("width", 30)
    .attr("height", 20)
    .style("fill", "green")
    .on("click", resumeFunction);
    

    var fastBtn = svg.append("rect")
    .attr("x", window.innerWidth - 50)
    .attr("y", 10)
    .attr("width", 30)
    .attr("height", 20)
    .style("fill", "blue")
    .on("click", fastFunction);


    var slowBtn = svg.append("rect")
    .attr("x", window.innerWidth - 50)
    .attr("y", 40)
    .attr("width", 30)
    .attr("height", 20)
    .style("fill", "red")
    .on("click", slowFunction);

    function resumeFunction(){
        console.log("resume");
        speedFlag = true;
    }

    function fastFunction(){
        console.log("fastFoward");
        SPEED_COUNTER++;
    }

    function slowFunction(){
        console.log("slower");
        SPEED_COUNTER--;
    }


    function createAnt(canvas, height, color, position){
         // Draw the Circle
         var circleData = [
                             { "cx": position+20, "cy": 20, "radius": 20, "color": color },
                             { "cx": position+50, "cy": 20, "radius": 20, "color": color },
                             { "cx": position+80, "cy": 20, "radius": 20, "color": color },
                             { "cx": position+87, "cy": 15, "radius": 6, "color": "white" },
                             { "cx": position+87, "cy": 15, "radius": 3, "color": color } ];

        var group1 = mergedRoom.append("g").attr("class", "eachAnt");
    
        var circles =   group1.selectAll("circle")
                        .data(circleData)
                        .enter()
                        .append("circle");
        
        
        var circleAttributes =  circles
                                .attr("cx", function (d) {return d.cx;})
                                .attr("cy", function (d) {return d.cy;})
                                .attr("r", function (d) {return d.radius;})
                                .style("fill", function (d) {return d.color;});
        
        
        // draw legs in group1
        for(i = 0; i < 2; i++){
            for(j = 0; j < 2; j++){
                var line =  group1.append("line")
                            .attr("x1", position+13+(j*12)+(i*47))
                            .attr("y1", 20)
                            .attr("x2", position+13+(j*12)+(i*47))
                            .attr("y2", 55)
                            .attr("stroke-width", 2)
                            .attr("stroke", color);
            }
        }
        
        group1
        .attr("transform", "translate(" + [7,GROUND_LEVEL-height] + ")");
        
        return group1;
    }
    

    function createBackground(canvas) {
        var sky =   canvas.append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", window.innerWidth)
                    .attr("height", GROUND_LEVEL)
                    .style("fill", "#0c1317");
        return sky;
    }
    

    function createStars(canvas) {
        var starData = [
                        { "cx": window.innerWidth/6, "cy": 80, "radius": 1, "color": "white"  },
                        { "cx": 2*window.innerWidth/3, "cy": 40, "radius": 2, "color": "white" },
                        { "cx": window.innerWidth/4, "cy": 40, "radius": 2, "color": "white" },
                        { "cx": 5*window.innerWidth/6, "cy": 80, "radius": 1, "color": "white"},
                        { "cx": window.innerWidth/3, "cy": 80, "radius": 2, "color": "white"  },
                        { "cx": window.innerWidth/2, "cy": 90, "radius": 1, "color": "white"  },
                        { "cx": window.innerWidth/20, "cy": 50, "radius": 2, "color": "white"  },
                        { "cx": window.innerWidth/15, "cy": 120, "radius": 1, "color": "white"  },
                        { "cx": 18*window.innerWidth/20, "cy": 120, "radius": 2, "color": "white"  },
                        { "cx": 15*window.innerWidth/20, "cy": 120, "radius": 2, "color": "white"  },
                        { "cx": 13*window.innerWidth/20, "cy": 160, "radius": 2, "color": "white"  },
                        { "cx": 2*window.innerWidth/5, "cy": 170, "radius": 2, "color": "white"  }];
        
        var group2 = canvas.append("g");
        var stars = group2.selectAll("circle").data(starData).enter().append("circle");
        var starAttributes =    stars
                                .attr("cx", function (d) {return d.cx;})
                                .attr("cy", function (d) {return d.cy;})
                                .attr("r", function (d) {return d.radius;})
                                .style("fill", function (d) {return d.color;});
        
        return group2;
    }


    function starcolor(hours) {
        var starcolor = 1;
        switch (hours) {
            case 0:
            starcolor = 0;
            break;
            case 12:
            starcolor = 1;
            break;
        }
        return starcolor;
    }
    

    function skycolor(hours) {
        var skycolor = "blue"
        switch (hours) {
            case 0:
                skycolor = "#97ccf1";
                
                break;
                case 12:
                skycolor = "#0c1317";
                break;

            }

            return skycolor;
    }


    function orbit(initValue) {

        return function(d, i, a) {
            return function(t) {

                var t_x, t_y;

                var rotation_radius_x = (window.innerWidth/2)+80;
                var rotation_radius_y = 200;
                var t_angle = (2 * Math.PI) * (t+(initValue));
                var t_x = rotation_radius_x * Math.cos(t_angle);
                var t_y = rotation_radius_y * Math.sin(t_angle);

                return "translate(" + ((window.innerWidth/2) + t_x) + "," + (200 + t_y) + ")";
            };
        };
    }


    function translateAlong(path) {
        var l = path.getTotalLength();
        return function(i) {
            return function(t) {
                var p = path.getPointAtLength(t * l);
                return "translate(" + p.x + "," + p.y + ")";//Move marker
            }
        }
    }


    d3.selection.prototype.moveToFront = function() {
        return this.each(function(){
            this[0][0].parentNode.appendChild(this[0][0]);
        });

        //not yet customized to work
        d3.selection.prototype.moveToBack = function() { 
            return this.each(function() { 
                var firstChild = this.parentNode.firstChild; 
                if (firstChild) { 
                    this.parentNode.insertBefore(this, firstChild); 
                } 
            }); 
        };

    };
}