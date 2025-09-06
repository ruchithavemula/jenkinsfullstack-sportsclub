pipeline {
    agent any

    environment {
        TOMCAT_PATH = "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps"
        FRONTEND_DIR = "JenkinsFrontend\\SportsClubFrontend"
        BACKEND_DIR = "JenkinsBackend\\SportsClubBackend"
        BACKEND_WAR = "sportsclub-backend.war"
        FRONTEND_FOLDER = "sportsclubfrontend"
    }

    stages {
        stage('Build Frontend') {
            steps {
                dir(FRONTEND_DIR) {
                    bat 'npm ci'
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy Frontend to Tomcat') {
            steps {
                bat """
                if exist "${TOMCAT_PATH}\\${FRONTEND_FOLDER}" rmdir /S /Q "${TOMCAT_PATH}\\${FRONTEND_FOLDER}"
                mkdir "${TOMCAT_PATH}\\${FRONTEND_FOLDER}"
                xcopy /E /I /Y ${FRONTEND_DIR}\\dist\\* "${TOMCAT_PATH}\\${FRONTEND_FOLDER}\\"
                """
            }
        }

        stage('Build Backend') {
            steps {
                dir(BACKEND_DIR) {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Deploy Backend to Tomcat') {
            steps {
                bat """
                if exist "${TOMCAT_PATH}\\${BACKEND_WAR}" del /Q "${TOMCAT_PATH}\\${BACKEND_WAR}"
                copy ${BACKEND_DIR}\\target\\${BACKEND_WAR} "${TOMCAT_PATH}\\"
                """
            }
        }
    }

    post {
        success { echo '✅ Sports Club: Frontend and Backend successfully deployed to Tomcat' }
        failure { echo '❌ Deployment failed — check console output for details' }
    }
}
