pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Code has been checked out from GitHub'
            }
        }

        stage('Test') {
            steps {
                sh 'test -f index.html'
                sh 'test -f style.css'
                sh 'test -f script.js'
                echo 'To-Do application files verified successfully'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage completed - static web application requires no compilation'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage reached successfully'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}
