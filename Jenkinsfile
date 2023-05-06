pipeline {
    agent {
        docker {
            image 'node:16.13.2' 
            args '-p 7055:7055' 
        }
    }
    stages {
        stage('build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('start') { 
            steps {
                sh 'node app.js' 
            }
        }
    }  
}
