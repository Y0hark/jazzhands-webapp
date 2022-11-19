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
				sh 'cp /dist/* /home/yohark/workspace/firebase_projects/jazzhands-webapp/public/'
				sh 'cd /home/yohark/workspace/firebase_projects/jazzhands-webapp/public/ && sudo firebase deploy'
				echo 'SUCESS. Project deployed on firebase.'
            }
        }
    }
}