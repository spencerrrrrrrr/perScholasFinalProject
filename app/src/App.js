import SeeTheProcess from "./components/SeeTheProcess";

const technologies = [
  {
    name: "ReactJS",
    usage: "Built the app with ReactJS",
  },
  { name: "Docker", usage: "Created an image containing the app" },
  { name: "Terraform", usage: "Provisioned cloud resources" },
  { name: "AWS", usage: "Deployed my pod cluster in an AWS EC2 instance" },
  { name: "GitLab", usage: "Automated CI/CD processes" },
  {
    name: "Kubernetes",
    usage: "Deployed app instances with LoadbBalancer + rolling deployments"
  },
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>
        My name is Spencer Hurrle, and I’m currently a DevOps Student at Per
        Scholas. I’m pursuing a career in DevOps so that I can fill out more of
        my personal potential. I always aim to achieve the most effective and
        transparent solutions in my work. In addition to being technically
        proficient, I love to collaborate with others and pool the best ideas
        into one amazing product.
      </p>
      <h2>Technologies Involved In This Application:</h2>
      {/*The variable name is what is sent into props, so when calling these 
      properties in SeeTheProcess, you would use props.name or props.useage*/}
      <SeeTheProcess name={technologies[0].name} usage={technologies[0].usage}></SeeTheProcess>
      <SeeTheProcess name={technologies[1].name} usage={technologies[1].usage}></SeeTheProcess>
      <SeeTheProcess name={technologies[2].name} usage={technologies[2].usage}></SeeTheProcess>
      <SeeTheProcess name={technologies[3].name} usage={technologies[3].usage}></SeeTheProcess>
      <SeeTheProcess name={technologies[4].name} usage={technologies[4].usage}></SeeTheProcess>
      <SeeTheProcess name={technologies[5].name} usage={technologies[5].usage}></SeeTheProcess>
    </div>
  );
}

export default App;
