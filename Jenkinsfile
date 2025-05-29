pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token')
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                withSonarQubeEnv('MySonarQube') {
                    sh 'npx sonar-scanner'
                }
            }
        }

        stage('Security') {
            steps {
                sh 'npm audit --json || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker build -t nutrivoice-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Promoting to Production (simulated)'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring simulation...'
            }
        }
    }
}
