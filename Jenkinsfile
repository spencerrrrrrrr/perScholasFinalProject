pipeline {
  agent any
  stages {
    stage('Creating a New Docker Image...') {
      steps {
        bat 'docker build -t spencerhurrle/react-app:latest app/.'
      }
    }
    stage('Push Image to DockerHub...') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          bat 'docker push spencerhurrle/react-app:latest'
        }
      }
    }
    stage('Provisioning AWS Resources With Terraform...') {
	  steps {
	      bat 'terraform init -input=false'
          bat 'terraform plan -out=tfplan -input=false'
		  bat 'terraform apply -input=false tfplan'
        }
	  }
	}
    stage('Deploy App to AWS EKS Cluster') {
	  steps {
	   {
		  bat 'kubectl apply -f deployment.yml'
          bat 'terraform refresh'
	      bat 'kubectl get all'
		}
	  }
	}
  }
}