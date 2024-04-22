To be able to run this program on Node level, the following dependencies
should be installed.

1.	Axios		- 	Axios is used in this project to handle
				the http request.
				run this command in the project dir
				=>	npm install axios

2.	react-switch 	- 	The toggle used in this project was
				imported from the node lib.
				run this command in the project dir
				=>	npm install react-switch


////////////////////////////////////////////////////////////////////////////

To start the node server, navigate to the project dir and run this command
=>	npm start
If it successfully runs it, it should seen on a port 3000 of your local
host (localhost:3000). You can choose to interact with the app from the
web or you can take it a step further by bundling it into an Android or 
ios package.

To get started with this, install Capacitor; the preferred bundler for
making React.js apps into crossplatform apps like android and ios.
Run these commands

=>	npm install @capacitor/core @capacitor/cli
=>	npx cap init re3vr www.example.re3vr build

then run

=>	npm run build

To add the platforms we need, we need to install them first. Here's how;
run

=>	npm i @capacitor/ios @capacitor/android

After that has completed successfully, you can run the following command
to add the builds to their respective platform folders

=>	npx cap add andriod
=>	npx cap add ios