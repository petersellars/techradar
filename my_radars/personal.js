//This is the title for your window tab, and your Radar
document.title = "Personal Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                  ,{'r':500,'name':'Considerations'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1300;
var w = 1500;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 

            // ADOPT
            { name: "Lightweight Architecture Decision Records", pc: { r: 50, t: 120} , movement: 'c'},

            // TRIAL
            { name: "Continuous compliance", pc: { r: 140, t: 140} , movement: 'c'},

            // ASSESS
            { name: "Tracking health over debt", pc: { r: 260, t: 160} , movement: 'c'},

            // HOLD

            // CONSIDERATIONS

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

            // ADOPT
            { name: "commitlint", pc: { r: 70, t: 60} , movement: 'c'},
            { name: "act", pc: { r: 70, t: 30} , movement: 'c'},

            // TRIAL
            { name: "Devbox", pc: { r: 140, t: 30} , movement: 'c'},
            { name: "GitHub Copilot", pc: { r: 140, t: 60} , movement: 't'},
            { name: "Renovate", pc: { r: 140, t: 80} , movement: 'c'},

            // ASSESS

            // HOLD

            // CONSIDERATIONS

        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#FF0000",
        "items" : [

            // ADOPT
            { name: "GitHub Actions", pc: { r: 50, t: 205} , movement: 'c'},

            // TRIAL
            { name: "Contentful", pc: { r: 140, t: 200} , movement: 'c'},

            // ASSESS
            { name: "Cloud Events", pc: { r: 235, t: 205}, movement: 'c'},

            // HOLD
            { name: "Rancher Desktop", pc: { r: 330, t: 215} , movement: 't'},

            // CONSIDERATIONS

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 

            // ADOPT
            { name: "Dotbot", pc: { r: 50, t: 325} , movement: 'c'}, 

            // TRIAL
            { name: "Astro", pc: { r: 140, t: 300} , movement: 'c'},
            { name: "fasttemplate", pc: { r: 160, t: 330} , movement: 'c'},

            // ASSESS
            { name: "score", pc: { r: 240, t: 345} , movement: 'c'},
            { name: "Testcontainers", pc: { r: 240, t: 330} , movement: 'c'},
            
            // HOLD

            // CONSIDERATIONS

        ]
    }
];
