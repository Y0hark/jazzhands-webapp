pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				// sh 'npm install'
                echo 'Installation executed later by firebase.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				// sh 'npm run build'
                echo 'Build executed later by firebase.'
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
                echo 'Deploying functions on firebase'
				sh 'cd /home/yohark/workspace/firebase_projects/jazzhands-webapp/ && sudo firebase deploy --only functions'
				echo 'Done!'
                echo 'Deploying hosting on firebase'
				sh 'cd /home/yohark/workspace/firebase_projects/jazzhands-webapp/ && sudo firebase deploy --only hosting'
				echo 'Done!'
            }
        }
    }
}