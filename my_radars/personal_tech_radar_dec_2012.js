document.title = "Test"

var radar_data = [
// TECHNOLOGIES
//{"name":"Adopt","pc":{"r":0,"t":0},"movement":"r"},
{"name":"Exhaustive Browser Based Testing", "pc":{"r":350,"t":135},"movement":"t"},
// {"name":"Scrum certification", "pc":{"r":350,"t":95},"movement":"c"},
{"name":"Logs As Data", "pc":{"r":250,"t":165},"movement":"t"},
{"name":"Declarative Provisioning", "pc":{"r":250,"t":110},"movement":"t"},
{"name":"Polygot Persistence", "pc":{"r":250,"t":130},"movement":"t"},
{"name":"Configuration In DNS", "pc":{"r":260,"t":150},"movement":"t"},
//{"name":"Trial","pc":{"r":0,"t":0},"movement":"r"},
{"name":"Continuous Delivery", "pc":{"r":180,"t":125},"movement":"t"},
{"name":"Micro Services", "pc":{"r":140,"t":120},"movement":"t"},
{"name":"Deployment & Scripting Test Tools", "pc":{"r":160,"t":140},"movement":"t"},
{"name":"Automation of Developer Workstations", "pc":{"r":180,"t":95},"movement":"t"},
{"name":"Advanced Analytics", "pc":{"r":180,"t":170},"movement":"t"},
{"name":"Health Check Pages", "pc":{"r":180,"t":150},"movement":"t"},
{"name":"Pomodoro Technique", "pc":{"r":90,"t":140},"movement":"t"},
{"name":"WIP Limits", "pc":{"r":80,"t":100},"movement":"t"},
{"name":"Automated Build Pipelines", "pc":{"r":70,"t":170},"movement":"t"},
{"name":"Quality Analytics", "pc":{"r":40,"t":110},"movement":"t"},
{"name":"Continuous Deployment", "pc":{"r":30,"t":160},"movement":"t"},
// TOOLS
{"name":"Maven", "pc":{"r":330,"t":10},"movement":"t"},
{"name":"Aquillian", "pc":{"r":280,"t":85},"movement":"t"},
{"name":"D3", "pc":{"r":280,"t":70},"movement":"t"},
{"name":"JBehave", "pc":{"r":280,"t":50},"movement":"t"},
{"name":"GPars", "pc":{"r":280,"t":30},"movement":"t"},
{"name":"Jasmine", "pc":{"r":240,"t":50},"movement":"t"},
{"name":"Simpleweb/Webbit", "pc":{"r":240,"t":30},"movement":"t"},
{"name":"Geb", "pc":{"r":180,"t":65},"movement":"t"},
{"name":"Highcharts", "pc":{"r":180,"t":50},"movement":"t"},
{"name":"Thurcylides", "pc":{"r":160,"t":85},"movement":"t"},
{"name":"Robolectric", "pc":{"r":130,"t":85},"movement":"t"},
{"name":"Robotium", "pc":{"r":130,"t":55},"movement":"t"},
{"name":"Locust", "pc":{"r":130,"t":30},"movement":"t"},
{"name":"EasyB", "pc":{"r":130,"t":15},"movement":"t"},
{"name":"Puppet", "pc":{"r":80,"t":85},"movement":"t"},
{"name":"Vagrant/Veewee", "pc":{"r":80,"t":10},"movement":"t"},
{"name":"Gradle", "pc":{"r":30,"t":30},"movement":"t"},
{"name":"Sonar", "pc":{"r":50,"t":45},"movement":"t"},
{"name":"Liquibase", "pc":{"r":80,"t":50},"movement":"t"},
{"name":"Concordion", "pc":{"r":70,"t":70},"movement":"t"},
{"name":"Embedded Servlet Containers", "pc":{"r":80,"t":30},"movement":"t"},
// LANGUAGES & FRAMEWORKS
{"name":"Twitter Bootstrap", "pc":{"r":30,"t":320},"movement":"t"},
{"name":"Geb", "pc":{"r":80,"t":310},"movement":"t"},
{"name":"Grails 2.0", "pc":{"r":50,"t":340},"movement":"t"},
{"name":"Silverstripe", "pc":{"r":80,"t":340},"movement":"t"},
{"name":"JSON", "pc":{"r":60,"t":290},"movement":"t"},
{"name":"DropWizard", "pc":{"r":80,"t":290},"movement":"t"},
{"name":"HTML 5", "pc":{"r":160,"t":330},"movement":"t"},
{"name":"Angular JS", "pc":{"r":180,"t":290},"movement":"t"},
{"name":"Clojure", "pc":{"r":170,"t":310},"movement":"t"},
{"name":"DSLs", "pc":{"r":120,"t":320},"movement":"t"},
{"name":"Knockout", "pc":{"r":130,"t":350},"movement":"t"},
{"name":"Spring Social", "pc":{"r":120,"t":280},"movement":"t"},
{"name":"Require.js", "pc":{"r":250,"t":350},"movement":"t"},
{"name":"Gremlin", "pc":{"r":260,"t":280},"movement":"t"},
{"name":"WordPress", "pc":{"r":350,"t":300},"movement":"t"},
// PLATFORMS
{"name":"Private Cloud", "pc":{"r":30,"t":210},"movement":"t"},
{"name":"Neo4j", "pc":{"r":50,"t":225},"movement":"t"},
{"name":"Node.js", "pc":{"r":80,"t":215},"movement":"t"},
{"name":"MongoDB", "pc":{"r":35,"t":250},"movement":"t"},
{"name":"OpenStack", "pc":{"r":70,"t":245},"movement":"t"},
{"name":"CrouchDB", "pc":{"r":70,"t":190},"movement":"t"},
{"name":"JBoss Rules", "pc":{"r":140, "t":190},"movement":"t"},
{"name":"OpenNebula", "pc":{"r":120,"t":220},"movement":"t"},
{"name":"Redis", "pc":{"r":180,"t":200},"movement":"t"},
{"name":"Couchbase", "pc":{"r":160,"t":215},"movement":"t"},
{"name":"Riak", "pc":{"r":150,"t":245},"movement":"t"},
{"name":"Hybrid Clouds", "pc":{"r":160,"t":255},"movement":"t"},
{"name":"Meteor.js", "pc":{"r":220,"t":185},"movement":"t"},
{"name":"BiqQuery", "pc":{"r":250,"t":260},"movement":"t"},
{"name":"Calatrava", "pc":{"r":240,"t":220},"movement":"t"},
{"name":"Vert.x", "pc":{"r":255,"t":240},"movement":"t"},
{"name":"Java Portal Servers", "pc":{"r":340,"t":240},"movement":"t"},
];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":16},
{"name":"Tools", "start":16, "end":37},
{"name":"Platforms", "start":52, "end":70},
{"name":"Languages", "start":37, "end":52}
//{"name":"Languages/Frameworks", "start":37, "end":45}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':''},{'r':310,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "Peter Sellars - Personal Technology Radar (Dec 2012)";