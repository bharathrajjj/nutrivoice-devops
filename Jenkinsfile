pipeline {
    agent any

    environment {
        SONAR_TOKEN = credentials('sonar-token')  // Use the ID from Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/bharathrajjj/nutrivoice-devops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQube') {
                    sh 'npx sonar-scanner -Dsonar.projectKey=nutrivoice -Dsonar.sources=. -Dsonar.login=$SONAR_TOKEN'
                }
            }
        }
    }
}
