How To Deploy To Github Pages
-----------------------------

This is a quick step-by-step guide on how to deploy to Github Pages for Mashups students. This is not a comprehensive git or Github tutorial. The objective is solely to get your local single page application deployed to the web via Github Pages. 

### Step 1: Test Your Application 
* Make sure your application runs locally **WITHOUT ANY ERRORS**. Test this by running a localhost. If you are unfamiliar with what a localhost is, read through this [tutorial]((https://github.com/ITP-Mashups/Mashups/tree/master/03_Programming_101/Local_Server)) and/or through read this [explanation](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server) by Scott Murrray. 
* If the application is logging any errors, resolve those before moving forward.

### Step 2: Check The HTML File Name
* For your application to be served correctly, you need the primary html page to be named `index.html`

### Step 3: Create A GitHub Repository
* Use GitHub desktop to create a New Repo
* Add your CSS, HTML, and JS files to the new Repo

###Step 5: Create A gh-pages Branch

* Your code files are now on Github, but the application is not running on the web just yet. We still need to put them in a separate git branch named 'gh-pages' 
* In GitHub Desktop, and go to Branch --> New Branch
* Name your branch `gh-pages`
* Click `Publish this branch to Github`

###Step 6: Check Your Site
* Now you just need to give Github a few minutes to work it's magic and properly serve your files. Your application should be running at      
	```
	your-github-user-name.github.io/your-repository-name
	```

###Step 7: Updating Your App
* If/when you make changes to your files and want to push your updated code to Github, you should first switch back to your master branch via GitHub Desktop.
* After you update your files, make a normal commit and push the changes to Github    
* Then, once your changes have been sent to Github, switch back to your gh-pages branch and publish your canges there too* Rinse and Repeat!
