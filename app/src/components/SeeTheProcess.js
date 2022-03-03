import './SeeTheProcess.css';

function SeeTheProcess(props) {
    return (
        <div className="process_body">
{/*         <h2>Technologies Involved In This Application</h2> */}
            <div>
                <ul className="process_list">
                    <li>{props.name}: {props.usage}</li>
{/* Before          <li>ReactJS: Building the App</li>
 checking out       <li>Docker: Created an Image ContainLoadbBalancering the App</li>
  prop usage        <li>Terraform: Provisioning Cloud Resources</li>
                    <li>AWS: Deployment Environment</li>
                    <li>Chef: Configuring Cloud Resources</li>
                    <li>Jenkins: Automating CI/CD Processes</li>
                    <li>Kubernetes: Deploying App Instances with  + Rolling Deployments</li>
*/}                </ul>
            </div>
        </div>
    );
}

export default SeeTheProcess;
