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
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQube') {
                    bat 'npx sonar-scanner -Dsonar.projectKey=nutrivoice -Dsonar.sources=. -Dsonar.login=$SONAR_TOKEN'
                }
            }
        }
    }
}
