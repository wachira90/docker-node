pipeline {
    agent {
        docker {
            image 'node:16.13.2' 
            args '-p 7055:7055' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
