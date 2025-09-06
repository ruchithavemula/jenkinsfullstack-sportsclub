pipeline {
  agent any

  stages {
    stage('Build Frontend') {
      steps {
        dir('JenkinsFrontend/SportsClubFrontend') {
          bat 'npm ci'
          bat 'npm run build'
        }
      }
    }

    stage('Deploy Frontend to Tomcat') {
      steps {
        bat """
        if exist "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclubfrontend" (
          rmdir /S /Q "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclubfrontend"
        )
        mkdir "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclubfrontend"
        xcopy /E /I /Y JenkinsFrontend\\SportsClubFrontend\\dist\\* "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclubfrontend\\"
        """
      }
    }

    stage('Build Backend') {
      steps {
        dir('JenkinsBackend/SportsClubBackend') {
          bat 'mvn clean package -DskipTests'
        }
      }
    }

    stage('Deploy Backend to Tomcat') {
      steps {
        bat """
        if exist "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclub-backend.war" (
          del /Q "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclub-backend.war"
        )
        if exist "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclub-backend" (
          rmdir /S /Q "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclub-backend"
        )
        copy JenkinsBackend\\SportsClubBackend\\target\\sportsclub-backend.war "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.1\\webapps\\sportsclub-backend.war"
        """
      }
    }
  }

  post {
    success { echo '✅ Sports Club: frontend + backend deployed to Tomcat' }
    failure { echo '❌ Pipeline failed — check console output' }
  }
}
