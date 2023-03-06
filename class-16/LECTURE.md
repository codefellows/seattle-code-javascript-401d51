# AWS

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/Y1tMn7EN8) 

## Presentations:  Final Event Lab

## Where We've Been

1. RESTful HTTP web services with Express and Node
1. Database management:  RESTful CRUD capability
1. Authentication and Authorization with ACL
1. Event Driven programs with the Observer Pattern

## Cloud Computing

10 years ago...  this was totally a thing:  On-site servers that required a lot of diverse maintenance

- ## How (30 min)
  - Many VMs (Virtual Machine)  can run on one physical machine
    ![VM](./assets/vm.jpg)
  - Hypervisor software manages and scales these as needed
    ![Hypervisor](./assets/hypervisor.jpeg)
  - A Blade Cluster has up to 32 Slots each with up to 4 computers (each of which is 10x more powerful than your laptop), capable running hundreds of VMs on each
    ![Blade](./assets/cloud-1-blades.png)
  - Blade Clusters live in racks that can generally hold 4-6 Clusters
    ![Cluster](./assets/cloud-2-racks.jpg)
  - Server Farms hold many, many racks
    ![Hallways](./assets/cloud-3-hallways.jpg)
  - Server farms are huge -- many football fields in size, and many (many) floors deep
    ![Farms](./assets/cloud-4-farms.jpg)
  - And they're all over the world. Millions of servers, Billions of VMs
    ![World](./assets/cloud-5-world.png)

## AWS  IAM

you will need to have at least one user with an access key and secret key added to the command line.  

1. Go to IAM
1. If no user exists, create one.  follow the prompts in the GUI
1. give that user permissions create group (or not).  
  - permissions for lab 16: `AdministratorAccess-AWSElasticBeanstalk`

To manage the Access Key:
1. go to the users tab in `IAM`
1. select your user
1. notice the tabs:  `Permissions | Groups | Tags | Security credentials`
1. select `Security credentials`
1. create an access key.  yes a CLI access key
1. note: once created, you will not be able to view the secret key again
1. go to the terminal
  1. run the command  `aws configure`.  follow instructions... basically
  1. paste in your access key. press enter
  1. paste in your secret key. press enter.
  1. select your region
  1. default output leave as is

to deploy via elastic beanstalk in the GUI
1. Go to Elastic beanstalk in console (use search bar or recently visited)
1. select the orange create application button
1. name your application (unique to your account)
1. platform, select node.js
1. platform branch, use default of node 16
1. platform version use default provided
1. no need to add tags
1. select `Upload your code`
1. confirm you have a zip file with ONLY package.json and your code.  
  - NO node modules or package-lock.json
1. choose file and upload
1. you are done making selections, click the  orange `create application` button

to deploy via elastic beanstalk in the CLI
1. `eb init`
  1. use default names, select region, no need to add SSH
1. `eb deploy`
  1. use default names, select region, no need to add "extras" with thee y/n questions
1. that's it.  note: create ALSO deploys code
1. if you need to update your code, run `eb deploy`
