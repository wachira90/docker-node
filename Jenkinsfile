pipeline {
    agent {
        docker {
            image 'node:16.13.2'
        }
    }
    stages {
        stage('build') { 
            steps {
                sh 'yarn install'
            }
        }
        stage('start') { 
            steps {
                sh 'node app.js'
            }
        }
    }  
}
