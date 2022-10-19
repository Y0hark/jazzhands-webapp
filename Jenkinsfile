pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				sh 'npm install'
                echo 'SUCESS. Dependencies retrieved.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				sh 'npm run build'
                echo 'SUCESS. Build completed.'
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
				sh 'cd /home/yohark/workspace/firebase_projects/jazzhands-webapp/ && sudo firebase deploy'
				echo 'SUCESS. Project deployed on firebase.'
            }
        }
    }
}