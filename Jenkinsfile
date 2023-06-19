
pipeline {
    agent {
        docker {
            image 'node:16.13.2'
            args '-v /home/docker/.jenkins/workspace/jk-project/:/usr/src/app/ --network=host'
        }
    }
    stages {

        stage('build') { 
            steps {
                sh 'yarn install'
                sh 'node app.js'
            }
        }

        stage('start') { 
            steps {
                sh 'echo SUCCESS'
            }
        }

    }  
}
