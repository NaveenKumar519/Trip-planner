var express               = require("express"),
	mongoose              = require("mongoose"),
	methodOverride        = require("method-override"),
	passport              = require("passport"),
	bodyParser            = require("body-parser"),
	LocalStrategy         = require("passport-local"),
	User				  = require("./models/user"),
	TouristPlace          = require("./models/touristPlace"),
	passportLocalMongoose = require("passport-local-mongoose"),
	app                   = express();
//APP CONFIGURATION

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/college_project_3",{useNewUrlParser: true, useUnifiedTopology: true});
app.use(require("express-session")({
	secret: "Rusty is the best and cutest dog in the world",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(bodyParser.urlencoded({extended: true})); 
//middleware to send info of current User to every Page
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});
// TouristPlace.create({
// 	title:"Barangaroo Reserve",
// 	image:"https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/02/Barangaroo_Reserve_Walumil_Lawns.jpg",
// 	description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
// },function(err,touristPlace){
// 	if(!err){
// 		console.log(touristPlace);
// 	}
// })
//Defining the class Graph
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList.set(vertex, []);
        } 
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList.get(vertex1).push({node:vertex2,weight});
        this.adjacencyList.get(vertex2).push({node:vertex1, weight});
    }

    print(){
        var get_keys = this.adjacencyList.keys();
        for (var i of get_keys) 
        {
            var get_values = this.adjacencyList.get(i);
            var conc = "";
            for (var j of get_values){
                conc += j.node + "," + j.weight;
            }       
            console.log(i + " -> " + conc);
        }
    }       

}
//array to store all tourist places
var all_places = ["Fraser Island","Blue Mountains National Park","Sea World Marine Park","Carlton Gardens","Great Barrier Reef","King Street","The Rocks","Cradle Mountain","Taronga Zoo","Cable Beach","Sun Pictures","Pearl Farm Tours","Broome Historical Museum","Barossa Valley","Rottnest Island","Byron Bay","Barangaroo Reserve"];
var g = new Graph();
const INT_MAX = 99999;
g.addVertex("Fraser Island");
g.addVertex("Blue Mountains National Park");
g.addVertex("Sea World Marine Park");
g.addVertex("Carlton Gardens");
g.addVertex("Great Barrier Reef");
g.addVertex("King Street");
g.addVertex("The Rocks");
g.addVertex("Cradle Mountain");
g.addVertex("Taronga Zoo");
g.addVertex("Cable Beach");
g.addVertex("Sun Pictures");
g.addVertex("Pearl Farm Tours");
g.addVertex("Broome Historical Museum");
g.addVertex("Barossa Valley");
g.addVertex("Rottnest Island");
g.addVertex("Byron Bay");
g.addVertex("Barangaroo Reserve");
// g.addVertex("Hyde Park");
// g.addVertex("Royal Botanic Garden");
// g.addVertex("Daintree National Park");
// g.addVertex("Bondi Beach");
g.addEdge("Fraser Island","Blue Mountains National Park",20);
g.addEdge("Fraser Island","Sea World Marine Park",45);
g.addEdge("Fraser Island","Carlton Gardens",10);
g.addEdge("Fraser Island","Great Barrier Reef",70);
g.addEdge("Fraser Island","King Street",6);
g.addEdge("Fraser Island","The Rocks",62);
g.addEdge("Fraser Island","Cradle Mountain",16);
g.addEdge("Fraser Island","Taronga Zoo",24);
g.addEdge("Fraser Island","Cable Beach",18);
g.addEdge("Fraser Island","Sun Pictures",281);
g.addEdge("Fraser Island","Pearl Farm Tours",299);
g.addEdge("Fraser Island","Broome Historical Museum",126);
g.addEdge("Fraser Island","Barossa Valley",25);
g.addEdge("Fraser Island","Rottnest Island",49);
g.addEdge("Fraser Island","Byron Bay",120);
g.addEdge("Fraser Island","Barangaroo Reserve",118);
// g.addEdge("Fraser Island","Hyde Park",16);
// g.addEdge("Fraser Island","Royal Botanic Garden",116);
// g.addEdge("Fraser Island","Daintree National Park",40);
// g.addEdge("Fraser Island","Bondi Beach",79);
g.addEdge("Blue Mountains National Park","Sea World Marine Park",15);
g.addEdge("Blue Mountains National Park","Carlton Gardens",85);
g.addEdge("Blue Mountains National Park","Great Barrier Reef",90);
g.addEdge("Blue Mountains National Park","King Street",11);
g.addEdge("Blue Mountains National Park","The Rocks",124);
g.addEdge("Blue Mountains National Park","Cradle Mountain",116);
g.addEdge("Blue Mountains National Park","Taronga Zoo",17);
g.addEdge("Blue Mountains National Park","Cable Beach",239);
g.addEdge("Blue Mountains National Park","Sun Pictures",281);
g.addEdge("Blue Mountains National Park","Pearl Farm Tours",134);
g.addEdge("Blue Mountains National Park","Broome Historical Museum",122);
g.addEdge("Blue Mountains National Park","Barossa Valley",505);
g.addEdge("Blue Mountains National Park","Rottnest Island",333);
g.addEdge("Blue Mountains National Park","Byron Bay",143);
g.addEdge("Blue Mountains National Park","Barangaroo Reserve",445);
// g.addEdge("Blue Mountains National Park","Hyde Park",989);
// g.addEdge("Blue Mountains National Park","Royal Botanic Garden",1345);
// g.addEdge("Blue Mountains National Park","Daintree National Park",177);
// g.addEdge("Blue Mountains National Park","Bondi Beach",67);
g.addEdge("Sea World Marine Park","Carlton Gardens",4);
g.addEdge("Sea World Marine Park","Great Barrier Reef",12);
g.addEdge("Sea World Marine Park","King Street",98);
g.addEdge("Sea World Marine Park","The Rocks",89);
g.addEdge("Sea World Marine Park","Cradle Mountain",138);
g.addEdge("Sea World Marine Park","Taronga Zoo",142);
g.addEdge("Sea World Marine Park","Cable Beach",93);
g.addEdge("Sea World Marine Park","Sun Pictures",131);
g.addEdge("Sea World Marine Park","Pearl Farm Tours",20);
g.addEdge("Sea World Marine Park","Broome Historical Museum",60);
g.addEdge("Sea World Marine Park","Barossa Valley",253);
g.addEdge("Sea World Marine Park","Rottnest Island",555);
g.addEdge("Sea World Marine Park","Byron Bay",666);
g.addEdge("Sea World Marine Park","Barangaroo Reserve",444);
// g.addEdge("Sea World Marine Park","Hyde Park",161);
// g.addEdge("Sea World Marine Park","Royal Botanic Garden",86);
// g.addEdge("Sea World Marine Park","Daintree National Park",44);
// g.addEdge("Sea World Marine Park","Bondi Beach",10);
g.addEdge("Carlton Gardens","Great Barrier Reef",110);
g.addEdge("Carlton Gardens","King Street",76);
g.addEdge("Carlton Gardens","The Rocks",74);
g.addEdge("Carlton Gardens","Cradle Mountain",109);
g.addEdge("Carlton Gardens","Taronga Zoo",264);
g.addEdge("Carlton Gardens","Cable Beach",2);
g.addEdge("Carlton Gardens","Sun Pictures",314);
g.addEdge("Carlton Gardens","Pearl Farm Tours",269);
g.addEdge("Carlton Gardens","Broome Historical Museum",69);
g.addEdge("Carlton Gardens","Barossa Valley",64);
g.addEdge("Carlton Gardens","Rottnest Island",499);
g.addEdge("Carlton Gardens","Byron Bay",199);
g.addEdge("Carlton Gardens","Barangaroo Reserve",398);
// g.addEdge("Carlton Gardens","Hyde Park",499);
// g.addEdge("Carlton Gardens","Royal Botanic Garden",599);
// g.addEdge("Carlton Gardens","Daintree National Park",699);
// g.addEdge("Carlton Gardens","Bondi Beach",13);
g.addEdge("Great Barrier Reef","King Street",113);
g.addEdge("Great Barrier Reef","The Rocks",183);
g.addEdge("Great Barrier Reef","Cradle Mountain",400);
g.addEdge("Great Barrier Reef","Taronga Zoo",31);
g.addEdge("Great Barrier Reef","Cable Beach",82);
g.addEdge("Great Barrier Reef","Sun Pictures",80);
g.addEdge("Great Barrier Reef","Pearl Farm Tours",285);
g.addEdge("Great Barrier Reef","Broome Historical Museum",287);
g.addEdge("Great Barrier Reef","Barossa Valley",289);
g.addEdge("Great Barrier Reef","Rottnest Island",304);
g.addEdge("Great Barrier Reef","Byron Bay",401);
g.addEdge("Great Barrier Reef","Barangaroo Reserve",579);
// g.addEdge("Great Barrier Reef","Hyde Park",1);
// g.addEdge("Great Barrier Reef","Royal Botanic Garden",147);
// g.addEdge("Great Barrier Reef","Daintree National Park",493);
// g.addEdge("Great Barrier Reef","Bondi Beach",791);
g.addEdge("King Street","The Rocks",84);
g.addEdge("King Street","Cradle Mountain",83);
g.addEdge("King Street","Taronga Zoo",87);
g.addEdge("King Street","Cable Beach",89);
g.addEdge("King Street","Sun Pictures",22);
g.addEdge("King Street","Pearl Farm Tours",222);
g.addEdge("King Street","Broome Historical Museum",2222);
g.addEdge("King Street","Barossa Valley",768);
g.addEdge("King Street","Rottnest Island",4934);
g.addEdge("King Street","Byron Bay",1189);
g.addEdge("King Street","Barangaroo Reserve",112);
// g.addEdge("King Street","Hyde Park",115);
// g.addEdge("King Street","Royal Botanic Garden",119);
// g.addEdge("King Street","Daintree National Park",47);
// g.addEdge("King Street","Bondi Beach",73);
g.addEdge("The Rocks","Cradle Mountain",76);
g.addEdge("The Rocks","Taronga Zoo",79);
g.addEdge("The Rocks","Cable Beach",104);
g.addEdge("The Rocks","Sun Pictures",7656);
g.addEdge("The Rocks","Pearl Farm Tours",765);
g.addEdge("The Rocks","Broome Historical Museum",123);
g.addEdge("The Rocks","Barossa Valley",258);
g.addEdge("The Rocks","Rottnest Island",492);
g.addEdge("The Rocks","Byron Bay",113);
g.addEdge("The Rocks","Barangaroo Reserve",114);
// g.addEdge("The Rocks","Hyde Park",163);
// g.addEdge("The Rocks","Royal Botanic Garden",146);
// g.addEdge("The Rocks","Daintree National Park",4045);
// g.addEdge("The Rocks","Bondi Beach",72);
g.addEdge("Cradle Mountain","Taronga Zoo",101);
g.addEdge("Cradle Mountain","Cable Beach",128);
g.addEdge("Cradle Mountain","Sun Pictures",28);
g.addEdge("Cradle Mountain","Pearl Farm Tours",29);
g.addEdge("Cradle Mountain","Broome Historical Museum",26);
g.addEdge("Cradle Mountain","Barossa Valley",2345);
g.addEdge("Cradle Mountain","Rottnest Island",429);
g.addEdge("Cradle Mountain","Byron Bay",1330);
g.addEdge("Cradle Mountain","Barangaroo Reserve",1118);
// g.addEdge("Cradle Mountain","Hyde Park",137);
// g.addEdge("Cradle Mountain","Royal Botanic Garden",1226);
// g.addEdge("Cradle Mountain","Daintree National Park",400);
// g.addEdge("Cradle Mountain","Bondi Beach",7900);
g.addEdge("Taronga Zoo","Cable Beach",150);
g.addEdge("Taronga Zoo","Sun Pictures",811);
g.addEdge("Taronga Zoo","Pearl Farm Tours",669);
g.addEdge("Taronga Zoo","Broome Historical Museum",106);
g.addEdge("Taronga Zoo","Barossa Valley",108);
g.addEdge("Taronga Zoo","Rottnest Island",45);
g.addEdge("Taronga Zoo","Byron Bay",1590);
g.addEdge("Taronga Zoo","Barangaroo Reserve",117);
// g.addEdge("Taronga Zoo","Hyde Park",100);
// g.addEdge("Taronga Zoo","Royal Botanic Garden",200);
// g.addEdge("Taronga Zoo","Daintree National Park",800);
// g.addEdge("Taronga Zoo","Bondi Beach",71);
g.addEdge("Cable Beach","Sun Pictures",136);
g.addEdge("Cable Beach","Pearl Farm Tours",56);
g.addEdge("Cable Beach","Broome Historical Museum",46);
g.addEdge("Cable Beach","Barossa Valley",266);
g.addEdge("Cable Beach","Rottnest Island",434);
g.addEdge("Cable Beach","Byron Bay",7);
g.addEdge("Cable Beach","Barangaroo Reserve",1088);
// g.addEdge("Cable Beach","Hyde Park",1000);
// g.addEdge("Cable Beach","Royal Botanic Garden",124);
// g.addEdge("Cable Beach","Daintree National Park",407);
// g.addEdge("Cable Beach","Bondi Beach",84);
g.addEdge("Sun Pictures","Pearl Farm Tours",254);
g.addEdge("Sun Pictures","Broome Historical Museum",24);
g.addEdge("Sun Pictures","Barossa Valley",65);
g.addEdge("Sun Pictures","Rottnest Island",779);
g.addEdge("Sun Pictures","Byron Bay",181);
g.addEdge("Sun Pictures","Barangaroo Reserve",191);
// g.addEdge("Sun Pictures","Hyde Park",201);
// g.addEdge("Sun Pictures","Royal Botanic Garden",211);
// g.addEdge("Sun Pictures","Daintree National Park",403);
// g.addEdge("Sun Pictures","Bondi Beach",795);
g.addEdge("Pearl Farm Tours","Broome Historical Museum",113);
g.addEdge("Pearl Farm Tours","Barossa Valley",279);
g.addEdge("Pearl Farm Tours","Rottnest Island",487);
g.addEdge("Pearl Farm Tours","Byron Bay",587);
g.addEdge("Pearl Farm Tours","Barangaroo Reserve",159);
// g.addEdge("Pearl Farm Tours","Hyde Park",1655);
// g.addEdge("Pearl Farm Tours","Royal Botanic Garden",1131);
// g.addEdge("Pearl Farm Tours","Daintree National Park",479);
// g.addEdge("Pearl Farm Tours","Bondi Beach",794);
g.addEdge("Broome Historical Museum","Barossa Valley",33);
g.addEdge("Broome Historical Museum","Rottnest Island",441);
g.addEdge("Broome Historical Museum","Byron Bay",541);
g.addEdge("Broome Historical Museum","Barangaroo Reserve",160);
// g.addEdge("Broome Historical Museum","Hyde Park",360);
// g.addEdge("Broome Historical Museum","Royal Botanic Garden",720);
// g.addEdge("Broome Historical Museum","Daintree National Park",401);
// g.addEdge("Broome Historical Museum","Bondi Beach",773);
g.addEdge("Barossa Valley","Rottnest Island",39);
g.addEdge("Barossa Valley","Byron Bay",28);
g.addEdge("Barossa Valley","Barangaroo Reserve",56);
// g.addEdge("Barossa Valley","Hyde Park",2828);
// g.addEdge("Barossa Valley","Royal Botanic Garden",5656);
// g.addEdge("Barossa Valley","Daintree National Park",562);
// g.addEdge("Barossa Valley","Bondi Beach",468);
g.addEdge("Rottnest Island","Byron Bay",110);
g.addEdge("Rottnest Island","Barangaroo Reserve",136);
// g.addEdge("Rottnest Island","Hyde Park",1622);
// g.addEdge("Rottnest Island","Royal Botanic Garden",1001);
// g.addEdge("Rottnest Island","Daintree National Park",4001);
// g.addEdge("Rottnest Island","Bondi Beach",871);
g.addEdge("Byron Bay","Barangaroo Reserve",148);
// g.addEdge("Byron Bay","Hyde Park",1699);
// g.addEdge("Byron Bay","Royal Botanic Garden",103);
// g.addEdge("Byron Bay","Daintree National Park",203);
// g.addEdge("Byron Bay","Bondi Beach",406);
// g.addEdge("Barangaroo Reserve","Hyde Park",1005);
// g.addEdge("Barangaroo Reserve","Royal Botanic Garden",7979);
// g.addEdge("Barangaroo Reserve","Daintree National Park",879);
// g.addEdge("Barangaroo Reserve","Bondi Beach",853);
// g.addEdge("Hyde Park","Royal Botanic Garden",56);
// g.addEdge("Hyde Park","Daintree National Park",61);
// g.addEdge("Hyde Park","Bondi Beach",88);
// g.addEdge("Royal Botanic Garden","Daintree National Park",37);
// g.addEdge("Royal Botanic Garden","Bondi Beach",5);
// g.addEdge("Daintree National Park","Bondi Beach",3003);

//functions
//function to calculate minimum cost of travel
function tsp(mask,pos,dp = [],visited_all,n,mat =[])
{
    if(mask==visited_all)
    {
        return 0;
    }
    if(dp[mask][pos]!=-1)
    return dp[mask][pos];
    var ans=INT_MAX;
    for(var city=0;city<n;city++)
    {
        if((mask&(1<<city))==0)
        {
            var cur_ans=mat[pos][city]+tsp(mask|(1<<city),city,dp,visited_all,n,mat);
            if(ans>cur_ans){
                ans = cur_ans;
            }
        }
    }
    return dp[mask][pos]=ans;
}
//function to trace the cheapest path
function trace_path(mask,pos,sum,visited_all,v = [],ans = [],n,mat)
{
    if(mask == visited_all)
    {
        if((sum == 0) && (ans.length == 0)){
           for(var i=0;i<v.length;i++){
                ans.push(v[i]);
             }
        }
        else{
             v.pop();
        }
        return;
    }
    if(sum <0){
        return;
    }
    for(var city=0;city<n;city++)
    {
        if((mask&(1<<city))==0)
        {
            if(sum - mat[pos][city]>=0){
                v.push(city);
                trace_path(mask|(1<<city),city,sum-mat[pos][city],visited_all,v,ans,n,mat);
            }
        }
    }
    v.pop();
}
// console.log(g.adjacencyList.get("Fraser Island")[0]);
// ROUTES

//landing page
app.get("/",function(req,res){
	res.render("landing",{g : g});
});
//AUTHENTICATION Routes
//route for sign up form
app.get("/register",function(req,res){
	res.render("register");
});
//handling user signup
app.post("/register",function(req,res){
	// console.log(req.body.username);
	// console.log(req.body.password);
	User.register(new User({username: req.body.username}),req.body.password,function(err,user){
		if(err){
			console.log("OOPS SOMETHING WENT WRONG!!");
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){ //to log in the user
			res.redirect("/tripPlanner");
		});
	});
});
// LOGIN ROUTES
// render login forms
app.get("/login",function(req,res){
	res.render("login");
});
//login logic
//middleware: code that runs before our final route callback
app.post("/login",passport.authenticate("local",{  //to check our login credentials
	successRedirect: "/tripPlanner",
	failureRedirect: "/login"
}),function(req,res){
});
app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});

//route to show dashboard of the user
app.get("/tripPlanner",isLoggedIn,function(req,res){
	res.render("dashboard");
});
//SHOW ROUTE
app.get("/tripPlanner/show",isLoggedIn,function(req,res){
	TouristPlace.find({},function(err,found){
		if(!err){
			//console.log(found[1].title);
			res.render("show",{touristPlaces: found});
		}
	})
});
//route to show graphs
app.get("/tripPlanner/viewgraph",isLoggedIn,function(req,res){
	res.render("viewgraph",{g: g,all_places: all_places});
});
//route to view plan history
app.get("/tripPlanner/history",isLoggedIn,function(req,res){
	res.render("history",{arr: req.user.tripPlans, minCosts : req.user.minCosts,g: g});
});
//Routes to ask the user which places he/she wishes to visit
app.get("/tripPlanner/input",isLoggedIn,function(req,res){
	
	res.render("input");
	
});
app.post("/tripPlanner/input",isLoggedIn,function(req,res){
	
	var src = req.body.source;
	//console.log(typeof(src));
	delete req.body.source;
	var touristPlaces  = Object.keys(req.body);
	// console.log(req.body);
	var index = touristPlaces.indexOf(src);
	if(index == -1){
		res.redirect("/tripPlanner");
	}
	else{
		//following two lines of code are used to bring the source location at 0th index of the array
		touristPlaces.splice(index,1);
		touristPlaces.unshift(src);
		// console.log(touristPlaces);
		var n = touristPlaces.length;
		var mat = [];
		for(var i=0; i<n; i++){
			mat[i] = new Array(n);
		}
		for(var i=0; i<n; i++){
			for(var j=0; j<n; j++){
				if(i == j){
					mat[i][j] = 0;
				}
				else{
					for(var k=0; k<g.adjacencyList.get(touristPlaces[i]).length; k++){
						if(g.adjacencyList.get(touristPlaces[i])[k].node == touristPlaces[j]){
							mat[i][j] = g.adjacencyList.get(touristPlaces[i])[k].weight;
						}
					}
				}
			}
		}
		var visited_all = (1<<n)-1;
		const rows = Math.pow(2,n);
		let dp = new Array(rows); 
		for (var i = 0; i < rows; i++) {
		  dp[i] = new Array(n); 
		}
		for(var i=0; i<rows; i++){
			for(var j=0; j<n; j++){
				dp[i][j] = -1;
			}
		}
		var v = [];
		var ans = [];
		var minCost = tsp(1,0,dp,visited_all,n,mat);
		//console.log(minCost);
		trace_path(1,0,minCost,visited_all,v,ans,n,mat);
		ans.unshift(0);  
		var triproute = [];
		for(var i=0; i<ans.length; i++){
			triproute.push(touristPlaces[ans[i]]);
		}
		// console.log(triproute);
		//saving the answer to the database
		User.findById(req.user._id,function(err,foundUser){
			if(!err){
				//console.log(foundUser.tripPlans);
				foundUser.tripPlans.push(triproute);
				foundUser.minCosts.push(minCost);
				foundUser.save(function(err,User){});
				//console.log(foundUser.tripPlans)
			}
		});
		
		res.render("cheapestRoute",{minCost: minCost,arr: ans,mat: mat,touristPlaces: touristPlaces,g:g,src: src});
	}
});


// writing our own middleware
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	 res.redirect("/login");		
}
app.listen(process.env.PORT||3000,process.env.IP,function(){
	console.log("THE SERVER IS LISTENING!!");
})
