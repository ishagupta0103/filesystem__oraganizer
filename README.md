# filesystem__organizer 📂
A global command line application using Node.js. It organizes all your files from a folder into different sections so that you need not do it manually.

# Quick Start 🚀
`git clone https://github.com/ishagupta0103/filesystem__oraganizer.git`  
`cd filesystem__organizer`  
To make this application global:  
   `sudo npm link`  
   type your system's login password then press `enter`  

# Working 🪀
In your terminal-

If you've made the application global then you can fire the below commands from any directory you want  
type `oggy help` to see the commands of this application  
type `oggy organize "dirPath"` to organize the folder with path as "dirPath"  
type `oggy tree "dirPath"` to see the contents of the folder with path as "dirPath" in tree like format  

If not then from the filesystem__organizer directory  
type `node main.js help` to see the commands of this application  
type `node main.js organize "dirPath"` to organize the folder with path as "dirPath"  
type `node main.js tree "dirPath"` to see the contents of the folder with path as "dirPath" in tree like format  

**Note :** If you don't provide path after organize and tree commands then these commands will run on the current working directory's path 

# Personalization 💅
To personalize the organize function  
open `utility.js` in your favourite code editor, modify the types of organized folder add the file extensions accordingly then hit `save`  
you can make as many types of folder as you want but be careful of not adding same extension in different types


Extras'  
To remove this application from global:  
open your terminal   
`npm list -g`  
go to the directory(**don't forget to tick show hidden folders**) written in the followed line and delete all files named as oggy  
