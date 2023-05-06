
pipeline {
    agent {
        docker {
            image 'node:16.13.2'
            args '-v /home/docker/.jenkins/workspace/jk-project/:/usr/src/app/'
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
