pipeline {
  agent any
  stages {
    stage('Creating a New Docker Image...') {
      steps {
        bat 'docker build -t spencerhurrle/react-app:0.1.1 app/.'
      }
    }
    stage('Push Image to DockerHub...') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          bat 'docker push spencerhurrle/react-app:0.1.1'
        }
      }
    }
    stage('Provisioning AWS Resources With Terraform...') {
      steps {
        dir("learn-terraform-provision-eks-cluster") {
          bat 'terraform init -input=false'
          bat 'terraform plan -out=tfplan -input=false'
          bat 'terraform apply -input=false tfplan'
        }
      }
	}
    stage('Deploy App to AWS EKS Cluster') {
	  steps {
          //bat 'aws eks --region us-east-2 update-kubeconfig --name cluster-name'
		  bat 'kubectl apply -f deployment.yaml'
	      bat 'kubectl get all'
		}
	  
	}
  }
}