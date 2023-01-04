pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				sh 'sudo npm install'
                echo 'SUCESS. Dependencies retrieved.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				sh 'sudo npm run build'
                echo 'SUCESS. Build completed.'
            }
        }
		stage('Distribution') {
            steps {
				echo 'Cleaning dist folder..'
				sh 'sudo rm -rf dist/*'
                echo 'Distributing project..'
				sh 'sudo npm run generate'
                echo 'SUCESS. Dist completed.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				echo 'No tests implemented yet: skipping tests.'
            }
        }
        stage('Deployment') {
            steps {
                echo 'Deploying project on firebase'
				echo 'Cleaning firebase project folder..'
				sh 'sudo rm -rf /home/yohark/workspace/firebase_projects/jazzhands-webapp/public/*'
				echo 'Copying dist folder to firebase project folder..'
				sh 'sudo cp -r dist/* /home/yohark/workspace/firebase_projects/jazzhands-webapp/public/'
				echo 'Deploying project on firebase..'
				sh 'cd /home/yohark/workspace/firebase_projects/jazzhands-webapp/ && sudo firebase deploy'
				echo 'SUCESS. Project deployed on firebase.'
            }
        }
    }
}